import "./WeOffer.css"
import Caterings from "../assets/Caterings.jpg"
import BirthDate from "../assets/BirthDay.jpg"
const Weoffer = () => {
  return (
    <div className="We-offer-main">
      <h2 className="heading">We also offer unique <br /> services for your events</h2>

      <div className="Card-div">
        <div className="Card">
          <div className="img-div">
            <img className="image" src={Caterings} alt="" />
          </div>
          <p className="Title">Caterings</p>
          <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>
        <div className="Card">
          <div className="img-div">
            <img className="image" src={BirthDate} alt="" />
          </div>
          <p className="Title">Birthdays</p>
          <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>
        <div className="Card">
          <div className="img-div">
            <img className="image" src={Caterings} alt="" />
          </div>
          <p className="Title">Caterings</p>
          <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>
        <div className="Card">
          <div className="img-div">
            <img className="image" src={Caterings} alt="" />
          </div>
          <p className="Title">Caterings</p>
          <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>
      </div>
    </div>
  )
}

export default Weoffer