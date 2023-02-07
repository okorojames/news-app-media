const Hamburger = () => {
  function navtoggle() {
    3 < 2 ? console.log("3 is greater than two"):console.log("three is less than 2")
  }
  return (
    <div className="hamburger" onClick={navtoggle}>
      <div className="burger burger-one"></div>
      <div className="burger burger-two"></div>
      <div className="burger burger-three"></div>
    </div>
  )
}

export default Hamburger