import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import articles from '../assets/articles';

function Blogs() {
  const navigate = useNavigate();

  const handleExplore = (id) => {
   
    navigate(`/articles/${id}`);
  };

  return (
    <div className="items-center min-h-10 bg-[#0d0413] sm:pb-10 lg:px-20 pb-0" id='blogs'>
      <h1 className="text-white text-4xl font-bold text-center pt-20 mb-20 uppercase font-roboto">Articles</h1>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {articles.map((article) => (
          <div key={article.id} className="relative h-[18em] w-[20em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] via-purple-700/80 to-[rgba(75,30,133,0.2)] text-white font-nunito p-[1.5em] flex justify-center items-left flex-col gap-[1em] backdrop-blur-[12px] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500">
            <h1 className="text-[2.2em] font-bold bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent ">{article.title}</h1>
            <p className="text-[0.9em] text-purple-100/90 leading-relaxed font-light">
              {article.description.length > 100 ? `${article.description.substring(0, 100)}...` : article.description}
            </p>
            <button
              className="relative h-fit w-fit px-[1.4em] py-[0.7em] mt-2 border-[1px] border-purple-300/30 rounded-full"
              onClick={() => handleExplore(article.id)} 
            >
              Explore Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
