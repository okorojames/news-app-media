import "../MainSection.css"
// import imageOne from "../images/news_22.jpg"
// import imageTwo from "../images/ads_1.jpg"
// import imageThree from "../images/cat_1.jpg"
// import imageThree from "../images/cat_2.jpg"
// import imageThree from "../images/cat_3.jpg"
// import imageThree from "../images/cat_4.jpg"
const Main = () => {
  return (
    <div className="mainSectionContainer">
      {/* main section col 1 */}
      <div className="mainSectionColOneContainer">
      <div className="mainSectionColOne">
        <div className="firstColHolder">
          <div className="firstColContext">
            <p className="firstColP">Technology <span className="mainContextDate">/ {new Date().toLocaleString("en-us", {
              weekday: "long",
              day: "numeric",
              month: "short",
              year: "numeric"
            })}</span></p>
            <h4 className="firstColH3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt commodi sunt ex!
            </h4>
          </div>
        </div>
      </div>
      </div>
      {/*  */}
      {/* main section col 2 */}
      <div className="mainSectionColTwo">
        {/*  */}
        <div className="secondCol1">
          <p className="secondColParagraph">Categories</p>
          <p className="secondColParagraph"><a className="headlineViewAll" href="">View All</a></p>
        </div>
        {/*  */}
        <div className="secondCol2">
          <p className="secondColParagraph">Business</p>
        </div>
        {/*  */}
        <div className="secondCol3">
          <p className="secondColParagraph">Technology</p>
        </div>
        {/*  */}
        <div className="secondCol4">
          <p className="secondColParagraph">Entertainment</p>
        </div>
        {/*  */}
        <div className="secondCol5">
          <p className="secondColParagraph">Sports</p>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default Main