import React, { useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component"
import { Spinner } from './Spinner';
import { NewsItem } from './NewsItem';

export const News = (props) => {
    const [articles, setArticlaes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    

    const capitalizeText = (str)=>  {
        return str.charAt(0).toUpperCase() + str.substring(1);
      }

    const updateNews = async ()=>  {
        // console.log("cdm");
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json()
        props.setProgress(70);
        setArticlaes(parseData.articles);
        setTotalResults(parseData.totalResults)
        setLoading(false)
        // console.log(parseData);  
        props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeText(props.category)} - News`;
    updateNews(); 
   // eslint-disable-next-line
 },  []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parseData = await data.json()
    // console.log(parseData);
    setArticlaes(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)           
   };

  return (
    
    <div className='py-5 mt-5 position-relative overflow-auto' style={{background: "#F2F0FF"}}>
        
          <h1 className='text-center display-3 mb-5 fw-bolder'>Top Headlines - {capitalizeText(props.category)}</h1>
          {loading && <Spinner />}          
            <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={ <Spinner />}
                    >
              <div className="container">
                <div className='row gx-4 gy-4'>

                    { articles.map((element)=> {
                    return  <div className='col-lg-3' key={element.url}>
                      <NewsItem title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 80):""} imageUrl={element.urlToImage?element.urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/1002B/production/_128097556_capture.png"} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
                    </div>
                    })} 

              </div>
              </div>
            </InfiniteScroll>           
        
      </div>
  )
}
News.defaultProps = {
    country: 'un',
    pageSize: '8',
    category: 'general',
  }

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  export default News