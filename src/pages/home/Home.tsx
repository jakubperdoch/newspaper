import "./_home.scss";
import PostGrid from "../../components/PostGrid/PostGrid";
import { useEffect, useState } from "react";

const Home = () => {
  const [items, setItems] = useState([]);
  const [callCount, setCallCount] = useState(0);

  useEffect(() => {
    if (callCount < 1) {
      fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=a95cef147016408992269caf44b4298a"
      )
        .then((res) => res.json())
        .then((data) => setItems(data.articles))
        .then(() => setCallCount(1));
    }
  }, [callCount]);
  return (
    <div className="homePage">
      <span className="homeTitle ">Latest Updates</span>
      <PostGrid items={items}></PostGrid>
    </div>
  );
};

export default Home;
