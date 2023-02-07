import imageOne from "../images/news_5.jpg"
import imageTwo from '../images/news_6.jpg'
import imageThree from "../images/news_8.jpg"
const First_col_section = () => {
  return (
    <div className="three-col-carousel">
      {/*  */}
      <div className="carousel-card">
        <img src={imageOne} alt="" />
        <div className="carousel-card-context">Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Iure alias animi velit officia. Voluptatibus eligendi quia quos consequatur eaque totam </div>
      </div>
      {/*  */}
      <div className="carousel-card">
        <img src={imageTwo} alt="" />
        <div className="carousel-card-context">Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Iure alias animi velit officia. Voluptatibus eligendi quia quos consequatur eaque totam </div>
      </div>
      {/*  */}
      <div className="carousel-card">
        <img src={imageThree} alt="" />
        <div className="carousel-card-context">Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Iure alias animi velit officia. Voluptatibus eligendi quia quos consequatur eaque totam </div>
      </div>
    </div>
  )
}

export default First_col_section