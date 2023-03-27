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
        <div className="header__main-box">
          <div className="text-box">
            <span className="text-box__heading">OUTDOORS</span>
            <span className="text-box__sub-heading">is where life happens</span>
          </div>
          <button className="btn btn__animation"> Discover More</button>
        </div>
      </div>
    </div>
  )
}
