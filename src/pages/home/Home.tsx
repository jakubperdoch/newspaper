import "./_home.scss";
import PostGrid from "../../components/PostGrid/PostGrid";
import { useEffect, useState } from "react";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=1e1629a8c5154bcba69417441c0ac8fd"
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  });
  return (
    <div className="homePage">
      <span className="homeTitle ">Latest Updates</span>
      <PostGrid items={items}></PostGrid>
    </div>
  );
};

export default Home;
