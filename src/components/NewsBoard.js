import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';

const NewsBoard = ({category}) => {
    const [articles , setArticles] = useState([]);
    const apiKey = process.env.REACT_APP_NEWS_MAG_KEY ;
    console.log(apiKey);
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
        console.log(url);
    },[category])
  return (
    <div>
      <h2  className='text-center mt-3'>Latest <span className='badge bg-danger'>NEWS</span></h2>
      {articles.map((news,index)=>{
        return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} published={news.publishedAt}/>
      })}
    </div>
  )
}

export default NewsBoard
