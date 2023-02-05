import Hamburger from './Hamburger';
const Header = () => {
  return (
    <header>
      {/* First Header */}
      {/* First Header */}
      <div className="first-header">
        <div className="headline">Headlines</div>
        <div className="headline-carousel">
          <a href="" className="headlines-link">These are the headlines...</a>
        </div>
        <div className="today-date">{new Date().toLocaleString("en-us", {
          year: "numeric",
          month: "long",
          weekday: "long",
          day: "numeric",
        })}</div>
      </div>
        {/* Second Header */}
      {/* Second Header */}
      <nav>
        <div className="nav-logo">News<span className="nav-logo-dark">Media</span></div>
        <div className="nav-links">
          <a href="" className="nav-link">home</a>
          <a href="" className="nav-link">categories</a>
          <a href="" className="nav-link">single news</a>
          <a href="" className="nav-link">contact</a>
        </div>
        <Hamburger/>
      </nav>
      {/* Third Header */}
      {/* Third Header */}
    </header>
  )
}

export default Header