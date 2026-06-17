import "./Video.css"
import FoodVideo from "../assets/foodvideo.mp4"
const Video = () => {
  return (
    <div className="Video-main">
      <video controls autoPlay loop className="vdo" src={FoodVideo}></video>
    </div>
  )
}

export default Video