import "./FastestFood.css"
import FastestFoodImage from "../assets/FastestFood.jpg"
const FastestFood = () => {
  return (
    <div className="FastestFood-main">
      <div className="left">
        <img src={FastestFoodImage} alt="FastestFoodImage" />
      </div>
      <div className="right">
        <h3 className="Head">Fastest Food <br /> Delivery in City</h3>
        <p>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
        <div className="info-div">
          <div className="point-div">
            1
          </div>
          <p>Delivery within 30 minutes</p>
        </div>
        <div className="info-div">
          <div className="point-div">
            2
          </div>
          <p>Best Offer & Prices</p>
        </div>
        <div className="info-div">
          <div className="point-div">
            3
          </div>
          <p>Online Services Available</p>
        </div>
      </div>
    </div>
  )
}

export default FastestFood