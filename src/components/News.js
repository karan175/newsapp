import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const capitalizefirstletter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const UpdateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?Country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.PageSize}`
        setloading(true)
        let data = await fetch(url)
        let parseddata = await data.json()
        setArticles(parseddata.articles)
        settotalResults(parseddata.totalResults)
        setloading(false)
    }

    useEffect(() => {
        document.title = `${capitalizefirstletter(props.category)} - NewsMonkey`;
        UpdateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        //setPage(page + 1) if placed here thn it give a bug since setpage is a asynchronous function and takes time to increment page value
        let url = `https://newsapi.org/v2/top-headlines?Country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.PageSize}`
        setPage(page + 1)
        let data = await fetch(url)
        let parseddata = await data.json()
        setArticles(articles.concat(parseddata.articles))

    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '75px 0px' }}>NewsMonkey - Top {capitalizefirstletter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className="container my-3">
                    {/* <div class="d-flex flex-row bd-highlight  flex-wrap mb-10 "> */}
                        <div className="row">
                        {
                            articles.map((element) => {
                                return  element.source.name !== "[Removed]" &&  <div className='col-md-4' key={element.url}><NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} /></div>
                            })
                        }
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
News.defaultProps = {
    country: "in",
    PageSize: 8,
    category: "general"
}
News.propTypes = {
    country: propTypes.string,
    PageSize: propTypes.number,
    category: propTypes.string
}
export default News