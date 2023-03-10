import { useContext, useState } from "react";
import Axios from "axios";
import AsyncSelect from "react-select/async";
import ClipLoader from "react-spinners/ClipLoader";
import {
  loadSaaSCopyList,
  loadPortfolioCopyList,
} from "./helpers/selectDataLoader";
import { multiSelectStyle } from "./constants/custom_styles";
import { UserContext } from "./app";
import resolveAPI from "./constants/api_endpoints";
import "./styles/playground.css";

export function Playground() {
  const userContext = useContext(UserContext);

  const [copy, setCopy] = useState(-1);
  const [extraDesc, setExtraDesc] = useState("");

  const [response, setResponse] = useState("");

  const [loading, setLoading] = useState(false);

  const getResponse = () => {
    setLoading(true);

    let data = {
      companyName: userContext.userState.companyName,
      companyDesc: userContext.userState.companyDesc,
      websiteType: userContext.userState.websiteType,
      copy: copy,
    };
    if(userContext.userState.category!==-1)
      data["category"] = userContext.userState.category;
    if(extraDesc) data["context"] = extraDesc;

    console.log(data);
    
    setTimeout(async () => {
      await Axios.post(resolveAPI(data.websiteType, data.copy), data)
      .then(res => {
        setLoading(false);
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
      </div>
      <div className="false-div"></div>
      <div className="widget-container">
        <div className="label-input-container">
          {loading && (
              <ClipLoader color={"maroon"} loading={loading} size={12} />
          )}
          <label className="label-text">Response</label>
          
          <textarea
            className="textarea-box-response"
            placeholder="OpenAI Response"
            value={response}
          />
        </div>
      </div>
    </div>
  );
}
