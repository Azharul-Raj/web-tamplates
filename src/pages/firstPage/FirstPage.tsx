import "./FirstPage.css"
import logo from "../../assets/logo-white.png";
export default function FirstPage() {
  return (
    <div className="">
      <div className="first-header">
        {/* logo */}
        <div className="logo-box">
          <img className="logo" src={logo} alt="" />
        </div>

        {/* main body */}
        <div className="main-box">
          <div className="text-box">
            <span className="main-heading">OUTDOORS</span>
            <span className="sub-heading">is where life happens</span>
          </div>
          <button className="btn-white"> Discover More</button>
        </div>
      </div>
    </div>
  )
}
