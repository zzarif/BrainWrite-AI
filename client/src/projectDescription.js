import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AsyncSelect from "react-select/async";
import { urls } from "./constants/urls";
import "./styles/core.css";
import {
  loadWebsiteTypeList,
  loadPortfolioSubList,
} from "./helpers/selectDataLoader";
import { multiSelectStyle } from "./constants/custom_styles";
import { UserContext } from "./app";
import { actions } from "./helpers/globalStateManager";

export function ProjectDescription() {
  const userContext = useContext(UserContext);

  const [companyName, setCompanyName] = useState(""); // Company Name
  const [companyDesc, setCompanyDesc] = useState(""); // Company Description
  const [websiteType, setWebsiteType] = useState(-1); // Website Type
  const [category, setCategory] = useState(-1); // Category for PORTFOLIO

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="widget-container">
        <label className="title">Project Description</label>
        <div className="label-input-container">
          <label className="label-text">Company Name</label>
          <input
            className="input-box"
            placeholder="Ex: Microsoft"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="label-input-container">
          <label className="label-text">Company Description</label>
          <textarea
            className="textarea-box"
            placeholder="What your company is about?"
            onChange={(e) => setCompanyDesc(e.target.value)}
          />
        </div>
        <div className="label-input-container">
          <label className="label-text">Website Type</label>
          <AsyncSelect
            placeholder="Select Website Type"
            loadOptions={loadWebsiteTypeList}
            onChange={(e) => {
              setWebsiteType(e.value);
              setCategory(-1);
            }}
            styles={multiSelectStyle}
            defaultOptions
          />
        </div>

        {websiteType === 1 && (
          <div className="label-input-container">
            <label className="label-text">Select Category</label>
            <AsyncSelect
              placeholder="Select Category"
              loadOptions={loadPortfolioSubList}
              onChange={(e) => setCategory(e.value)}
              styles={multiSelectStyle}
              defaultOptions
            />
          </div>
        )}
        <button
          className="cbutton"
          onClick={() => {
            userContext.userDispatch({type: actions.COMPANY_NAME, payload: companyName});
            userContext.userDispatch({type: actions.COMPANY_DESC, payload: companyDesc});
            userContext.userDispatch({type: actions.WEBSITE_TYPE, payload: websiteType});
            userContext.userDispatch({type: actions.CATEGORY, payload: category});
            navigate("/" + urls.PLAYGROUND);
          }}
        >
          PROCEED
        </button>
      </div>
    </div>
  );
}
