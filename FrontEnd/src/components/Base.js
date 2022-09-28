import CustomNavbar from "./CustomNavbar";
import "./../App.css";

const Base = ({ title = "welcome to BloodForLives", children }) => {
  return (
    <div>
      <CustomNavbar />

      {children}
      <div className="footer ">©BloodForLives</div>
      {/* <div className="footer"></div> */}
    </div>
  );
};

export default Base;
