import { useNavigate } from "react-router-dom";
import { urls } from "./constants/urls";
import "./styles/core.css";

export function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="widget-container">
        <label className="title">Landing Page</label>
        <div className="button-container">
          <button className="cbutton" onClick={() => navigate(urls.LOGIN)}>
            LOGIN
          </button>
          <button
            className="cbutton"
            onClick={() => navigate(urls.REGISTER)}
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}
