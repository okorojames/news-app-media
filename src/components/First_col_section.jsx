import imageOne from "../images/news_5.jpg"
import imageTwo from '../images/news_6.jpg'
import imageThree from "../images/news_8.jpg"
const First_col_section = () => {
  function modeToggle() {
    alert("hello")
  }
  return (
    <div className="three-col-carousel">
      {/*  */}
      <div className="carousel-card">
        <img src={imageOne} alt="" />
        <div className="carousel-card-context">Lorem ipsum, dolor sit amet consectetur adipisicing elit officia.</div>
      </div>
      {/*  */}
      <div className="carousel-card">
        <img src={imageTwo} alt="" />
        <div className="carousel-card-context">Lorem ipsum, dolor sit amet consectetur adipisicing elit officia.</div>
      </div>
      {/*  */}
      <div className="carousel-card">
        <img src={imageThree} alt="" />
        <div className="carousel-card-context">Lorem ipsum, dolor sit amet consectetur adipisicin elit. officia.</div>
      </div>
      {/* DARK AND LIGHT MODE */}
      <div className="darkAndLight">
        <i className="ri-sun-line lightMode" onClick={modeToggle}></i>
        <i className="ri-moon-fill darkMode" onClick={modeToggle}></i>
      </div>
    </div>
  )
}

export default First_col_section