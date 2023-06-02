import React from 'react'; 
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
    return (
      <div className="Home">
        <div className="Home-text-cont">
          <h3>So, you want to travel to</h3>
          <h1>Space</h1>
          <p>
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
          </p>
        </div>
  
        <div className="Home-explore-cont">
        <button className="explore-btn">
            <Link to="/project-space/destination" className="explore-link">
                Explore
            </Link>
        </button>
          
        </div>
      </div>
    );
}
  
export default Home;