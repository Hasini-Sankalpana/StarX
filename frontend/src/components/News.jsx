import React, { useEffect, useState } from "react";

function NewsSection() {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(4); 
      } else {
        setVisibleCount(6); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v4/articles/?limit=30&ordering=-published_at"
        ); 
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); 
  };

  if (loading) {
    return <div className="text-center text-gray-600 bg-[#0d0413]">Loading news...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 bg-[#0d0413]">Error: {error}</div>;
  }

  return (
    <div className="bg-[#0d0413] py-10 px-5 md:px-20 sm:px-14">
      <h2 className="text-white text-4xl font-bold text-center pt-20 mb-20 uppercase font-roboto">
        Latest <span className="font-lemon font-light text-purple-600">StarX</span> News
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, visibleCount).map((article) => (
          <div
            key={article.id}
            className="bg-[#0f0d11] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-200 mb-3">
                {article.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {article.summary.length > 100
                  ? `${article.summary.substring(0, 100)}...`
                  : article.summary}
              </p>
              <p className="text-sm text-slate-400 mb-3">
                Published:{" "}
                {new Date(article.published_at).toLocaleDateString()}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-medium hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < articles.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default NewsSection;