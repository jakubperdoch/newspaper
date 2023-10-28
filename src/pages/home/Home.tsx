import "./_home.scss";
import Post from "../../components/Post/Post";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
interface Article {
  title: string;
  description: string;
  urlToImage: string;
  author: string;
}

const Home = () => {
  const [data, setData] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [hasMore, setHasMore] = useState(true);
  const getNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=art&page=${page}&pageSize=${pageSize}&apiKey=a95cef147016408992269caf44b4298a`
      )
      .then((response) => {
        console.log(response);
        const newArticles = response.data.articles;
        if (newArticles.length === 0) {
          // If there are no new articles, set hasMore to false
          setHasMore(false);
        } else {
          setData([...data, ...newArticles]);
          setPage(page + 1);
        }
      });
  };
  useEffect(() => {
    getNews();
  }, []);
  const getMoreData = () => {
    setTimeout(() => {
      setPageSize(pageSize + 1);
      setPage(page + 1);
      getNews();
    }, 1200);
  };

  return (
    <div className="homePage">
      <span className="homeTitle">Latest Updates</span>
      <div className="scrollContainer">
        <InfiniteScroll
          className="scroll"
          dataLength={data.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={<h5 className="loadingTitle">Loading...</h5>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {data.map((item, i) => (
            <Post key={i} item={item} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;
