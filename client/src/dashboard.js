import { useNavigate } from "react-router-dom";
import { urls } from "./constants/urls";
import "./styles/core.css";

export function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="widget-container">
        <label className="title">Dashboard</label>
        <div className="button-container">
          <button
            className="cbutton"
            onClick={() => navigate("/"+urls.PROJECT_DESCRIPTION)}
          >
            PROJECT DESCRIPTION
          </button>
          <button className="cbutton" onClick={() => navigate("/"+urls.PLAYGROUND)}>
            PLAYGROUND
          </button>
        </div>
      </div>
    </div>
  );
}
