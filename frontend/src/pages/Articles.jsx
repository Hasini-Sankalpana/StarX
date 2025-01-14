import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../assets/articles';

function Articles() {
  const { id } = useParams();
  const article = articles.find((post) => post.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="bg-black min-h-screen text-white p-5 sm:p-8 md:p-10 lg:p-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center pt-10 sm:pt-14 md:pt-20 mb-6 sm:mb-8 lg:mb-10">
        {article.title}
      </h1>

      <div className="relative mb-2 h-[20em] sm:h-[25em] md:h-[30em] w-full rounded-lg overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-contain z-10"
          src={article.videourl}
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className="p-4 px-5 sm:px-10 md:px-20 lg:px-40">
        <p className="text-base sm:text-lg md:text-xl text-justify">
          {article.description}
        </p>
      </div>
    </div>
  );
}

export default Articles;
