import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-title">
          <h1>Akmal Ihksan</h1>
          <p>Web Developer</p>
        </div>
        <div className="sidebar-link">
          <i className="bx bxs-user-pin"></i>
          <Link className="link" to="">
            About
          </Link>
          <Link className="link" to="">
            Experience
          </Link>
          <Link className="link" to="">
            Project
          </Link>
          <Link className="link" to="">
            Skills
          </Link>
          <Link className="link" to="">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
