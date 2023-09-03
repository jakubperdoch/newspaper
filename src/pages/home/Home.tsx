import "./_home.scss";
import Header from "../../components/Header/Header";
function Home() {
  return (
    <div className="homePage">
      <Header></Header>
      <span className="homeTitle mx-auto">Latest Updates</span>
    </div>
  );
}

export default Home;
