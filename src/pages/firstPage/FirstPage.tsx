import "./FirstPage.css"
import logo from "../../assets/logo-white.png";
export default function FirstPage() {
  return (
    <div className="first-header">
      {/* logo */}
      <div className="logo-box">
        <img className="logo" src={logo} alt="" />
      </div>
    </div>
  )
}
