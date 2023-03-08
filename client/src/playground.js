import { useContext, useState } from "react";
import Axios from "axios";
import AsyncSelect from "react-select/async";
import {
  loadSaaSCopyList,
  loadPortfolioCopyList,
} from "./helpers/selectDataLoader";
import "./styles/playground.css";
import { multiSelectStyle } from "./constants/custom_styles";
import { UserContext } from "./app";
import resolveAPI from "./constants/api_endpoints";

export function Playground() {
  const userContext = useContext(UserContext);

  const [copy, setCopy] = useState(-1);
  const [extraDesc, setExtraDesc] = useState("");

  const [response, setResponse] = useState("");

  const getResponse = () => {
    const data = {
      companyName: userContext.userState.companyName,
      companyDesc: userContext.userState.companyDesc,
      websiteType: userContext.userState.websiteType,
      copy: copy,
    };
    
    setTimeout(async () => {
      await Axios.post(resolveAPI(data.websiteType, data.copy), data)
      .then(res => {
        console.log(res.data.message);
        setResponse(res.data.message);
      });
    }, 2000);
  };

  return (
    <div className="container">
      <div className="widget-container">
        <label className="title">PLAYGROUND</label>
        <div className="label-input-container">
          <label className="label-text">Select Copy</label>
          {userContext.userState.websiteType === 0 && (
            <AsyncSelect
              placeholder="Select Copy"
              loadOptions={loadSaaSCopyList}
              onChange={(e) => setCopy(e.value)}
              styles={multiSelectStyle}
              defaultOptions
            />
          )}
          {userContext.userState.websiteType === 1 && (
            <AsyncSelect
              placeholder="Select Copy"
              loadOptions={loadPortfolioCopyList}
              onChange={(e) => setCopy(e.value)}
              styles={multiSelectStyle}
              defaultOptions
            />
          )}
        </div>

        <div className="label-input-container">
          <label className="label-text">Context for Copy</label>
          <textarea
            className="textarea-box"
            placeholder="Provide some more context"
            onChange={(e) => setExtraDesc(e.target.value)}
          />
        </div>

        <button
          className="cbutton"
          onClick={getResponse}
        >
          GENERATE
        </button>

        <label className="label-text">Response: {response}</label>
      </div>
    </div>
  );
}
