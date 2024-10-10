import "./HomePage.scss";
import SearchBar from "../../component/Searchbar/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function HomePage() {
  
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Place</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            quisquam minima consequatur. Suscipit deserunt unde hic voluptate a
            magni alias debitis veritatis necessitatibus vero ea molestiae,
            quisquam laborum provident? Modi!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years Of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
