import { Image } from "../components/image/Image";
import "../App.css";
const Home = () => {
  return (
    <>
      <div className="banner-container">
        <Image className="banner" src="banner-world.jpg" alt="banner" />
        <div className="banner-text">
          <h1 className="banner-text-main">
            THIS IS THE BLOG YOU ARE LOOKING FOR!
          </h1>
          <h2 className="banner-text-sub">
            Want to learn something new today? Or are you looking for practical
            solutions to real development problems? You've come to the right
            place.
          </h2>
        </div>
      </div>
      <div>
        <h2 className="text-container">What you will find here?</h2>
        <div className="block-containers">
          <div className="block-container">
            <h3>Practical guides</h3>
            <div className="linea" />
            <h4>Clear tutorials to learn for real</h4>
          </div>
          <div className="block-container">
            <h3>Best practices</h3>
            <div className="linea" />
            <h4>Watch how expert developers do it</h4>
          </div>
          <div className="block-container">
            <h3>Tips & Tricks</h3>
            <div className="linea" />
            <h4>Quick tricks to improve your code.</h4>
          </div>
          <div className="block-container">
            <h3>Advanced concepts</h3>
            <div className="linea" />
            <h4>If explained properly, nothing is difficult.</h4>
          </div>
        </div>
        <h2>and much more...</h2>
      </div>
    </>
  );
};

export default Home;
