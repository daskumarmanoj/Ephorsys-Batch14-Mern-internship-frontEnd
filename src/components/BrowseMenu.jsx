import "./BrowseMenu.css"
import Tea from "../assets/tea 1.png"
const BrowseMenu = () => {
  return (
    <div className="Browse-Menu-div">
      <h2 className="Heading">Browse Our Menu</h2>
      <div className="card-div">
        {/* 1st Card */}
        <div className="card">
          <div className="round">
            <img src={Tea} alt="Tea" />
          </div>
          <h3 className="card-head">Breakfast</h3>
          <p className="card-para">In the new era of technology we look in the future with certainty and pride for our life.</p>
          <button className="card-btn">Explore Menu</button>
        </div>
        {/* 2nd Card */}
        <div className="card">
          <div className="round">
            <img src={Tea} alt="Tea" />
          </div>
          <h3 className="card-head">Breakfast</h3>
          <p className="card-para">In the new era of technology we look in the future with certainty and pride for our life.</p>
          <button className="card-btn">Explore Menu</button>
        </div>
        {/* 3rd Card */}
        <div className="card">
          <div className="round">
            <img src={Tea} alt="Tea" />
          </div>
          <h3 className="card-head">Breakfast</h3>
          <p className="card-para">In the new era of technology we look in the future with certainty and pride for our life.</p>
          <button className="card-btn">Explore Menu</button>
        </div>
        {/* 4th Card */}
        <div className="card">
          <div className="round">
            <img src={Tea} alt="Tea" />
          </div>
          <h3 className="card-head">Breakfast</h3>
          <p className="card-para">In the new era of technology we look in the future with certainty and pride for our life.</p>
          <button className="card-btn">Explore Menu</button>
        </div>
      </div>
    </div>
  )
}

export default BrowseMenu