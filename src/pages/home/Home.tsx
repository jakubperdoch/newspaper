import "./_home.scss";
import Post from "../../components/Post/Post";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
interface Article {
  title: string;
  description: string;
  urlToImage: string;
}
const Home = () => {
  const [items, setItems] = useState<Article[]>([]); // Specify the type as Article[]
  const [page, setPage] = useState(1); // Track the current page
  const [hasMore, setHasMore] = useState(true);
  const [isLoaded, setLoaded] = useState(true);

  const loadMoreData = () => {
    const pageSize = 6; // Number of items to load in each request
    const apiKey = "a95cef147016408992269caf44b4298a"; // Replace with your NewsAPI key
    fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2023-10-21&to=2023-10-21&sortBy=popularity&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.articles.length === 0) {
          // No more data available
          setHasMore(false);
        } else {
          setItems([...items, ...data.articles]);
          setPage(page + 1);
        }
      });
  };

  useEffect(() => {
    loadMoreData();
  }, [isLoaded]);

  return (
    <div className="homePage">
      <span className="homeTitle">Latest Updates</span>
      <InfiniteScroll
        className="scroll"
        dataLength={items.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {items.map((item, i) => (
          <Post key={i} item={item} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Home;
