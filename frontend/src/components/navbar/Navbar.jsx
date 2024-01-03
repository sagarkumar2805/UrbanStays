import "./Navbar.css"
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo"><img src={logo} style={{height:"30px"}} alt="" /></span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar