import "./FirstPage.scss"
import logo from "../../assets/logo-white.png";
export default function FirstPage() {
  return (
    <div className="">
      <div className="header">
        {/* logo */}
        <div className="header__logo-box">
          <img className="header__logo" src={logo} alt="" />
        </div>

        {/* main body */}
        <div className="main-box">
          <div className="text-box">
            <span className="main-heading">OUTDOORS</span>
            <span className="sub-heading">is where life happens</span>
          </div>
          <button className="btn-white btn-animation"> Discover More</button>
        </div>
      </div>
    </div>
  )
}
