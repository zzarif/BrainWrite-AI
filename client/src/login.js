import { useNavigate } from "react-router-dom";
import { urls } from "./constants/urls";
import "./styles/core.css";

export function Login() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="widget-container">
        <label className="title">Login Page</label>
        <div className="button-container">
          <button
            className="cbutton"
            onClick={() => navigate("/" + urls.DASHBOARD)}
          >
            DASHBOARD
          </button>
          <button
            className="cbutton"
            onClick={() => navigate("/" + urls.REGISTER)}
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}
