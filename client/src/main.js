import React, { useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import ClipLoader from "react-spinners/ClipLoader";
import { multiSelectStyle } from "./constants/custom_styles";
import {
  loadWebsiteTypeList,
  loadSaaSCopyList,
  loadPortfolioSubList,
  loadPortfolioCopyList,
} from "./apis/selectDataLoader";
import resolveAPI from "./apis/api_endpoints";
import "./styles/app.css";

function App() {
  const [companyName, setCompanyName] = useState(""); // Company Name
  const [companyDesc, setCompanyDesc] = useState(""); // Company Description
  const [websiteType, setWebsiteType] = useState(-1); // Selected Website Type
  const [copy, setCopy] = useState(-1); // Selected Copy from Copy List
  const [response, setResponse] = useState(""); // OpenAI response

  const [loading, setLoading] = useState(false); // Spinner

  ////////////////// SPECIAL COPIES /////////////////////////
  const [teamMemberList, setTeamMemberList] = useState([]); // for SAAS team copy
  const [category, setCategory] = useState(-1); // for PORTFOLIO


  const getOpenAIResponseForSaaS = () => {
    setLoading(true);

    console.log(`{${companyName}, ${companyDesc}, ${websiteType}, ${copy}, ${teamMemberList}}`);

    const method = "POST";
    const headers = { "Content-Type": "application/json" };
    const body = {
      companyName: companyName,
      companyDesc: companyDesc,
      websiteType: websiteType,
      copy: copy,
    }
    if(copy === 9) {
      body.teamMemberList = teamMemberList;
    }

    setTimeout(async () => {
      await fetch(resolveAPI(websiteType, copy), {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          setResponse(data.message);
        });

      setLoading(false);
    }, 2000);
  };

  const getOpenAIResponseForPortfolio = () => {
    setLoading(true);

    console.log(`{${companyName}, ${companyDesc}, ${websiteType}, ${category}, ${copy}}`);

    setTimeout(async () => {
      await fetch(resolveAPI(websiteType, copy), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: companyName,
          companyDesc: companyDesc,
          websiteType: websiteType,
          category: category,
          copy: copy,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          setResponse(data.message);
        });

      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <div className="header">BrainWrite.ai</div>
      <div className="container">
        <div className="container-1">
          <div className="div-label-select">
            <label className="text-label-large">
              Generate Copy for your Website
            </label>
          </div>

          {/* company name */}
          <div className="div-label-select">
            <label className="text-label">Company Name</label>
            <input
              className="input-box-small"
              placeholder="Ex: BrainWrite"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          {/* company description */}
          <div className="div-label-select">
            <label className="text-label">Short Description</label>

            <textarea
              className="input-box"
              spellCheck={false}
              placeholder="What your website is about. Use bullet points or short sentences."
              onChange={(e) => setCompanyDesc(e.target.value)}
            />
          </div>

          {/* website type */}
          <div className="div-label-select">
            <label className="text-label">Website Type</label>
            <AsyncSelect
              placeholder="Select Website Type"
              loadOptions={loadWebsiteTypeList}
              onChange={(e) => {
                setWebsiteType(e.value);
                setCopy(-1);
                setCategory(-1);
                setTeamMemberList([]);
              }}
              styles={multiSelectStyle}
              defaultOptions
            />
          </div>

          {/* if PORTFOLIO then show category */}
          {websiteType === 1 && (
              <div className="div-label-select">
              <label className="text-label">Select Category</label>
              <AsyncSelect
                placeholder="Select Category"
                loadOptions={loadPortfolioSubList}
                onChange={(e) => setCategory(e.value)}
                styles={multiSelectStyle}
                defaultOptions
              />
            </div>
          )}

          {/* copy type */}
          <div className="div-label-select">
            <label className="text-label">Select Copy</label>
            {websiteType === 0 && (
              <AsyncSelect
                placeholder="Select Copy Type"
                loadOptions={loadSaaSCopyList}
                onChange={(e) => {
                  setCopy(e.value);
                  setTeamMemberList([]);
                }}
                styles={multiSelectStyle}
                defaultOptions
              />
            )}
            {websiteType === 1 && (
              <AsyncSelect
                placeholder="Select Copy Type"
                loadOptions={loadPortfolioCopyList}
                onChange={(e) => {
                  setCopy(e.value);
                  setTeamMemberList([]);
                }}
                styles={multiSelectStyle}
                defaultOptions
              />
            )}
            {websiteType === -1 && (
              <Select
                placeholder="Select Copy Type"
                styles={multiSelectStyle}
              />
            )}
          </div>

          {/* if SAAS - TEAM COPY */}
          {websiteType === 0 && copy === 9 && (
            <div className="div-team-member-list">
              {teamMemberList.map((member, i) => {
                  return (
                      <div className="div-team-member">
                          <input placeholder="Ex: John Doe, Graphics Designer" 
                                className="input_team-member" 
                                value={member} onChange={(e) => {
                              const newList = [...teamMemberList];
                              newList[i] = e.target.value;
                              setTeamMemberList(newList);
                          }}/>
                          <button className="button-team-member-rem" onClick={() => {
                              const newList = [...teamMemberList];
                              newList.splice(i,1);
                              setTeamMemberList(newList);
                          }}>Remove</button>
                      </div>
                  )
              })}

              <button className="button-team-member-add" onClick={() => {
                const newList = [...teamMemberList,[]];
                setTeamMemberList(newList);
              }}>Add New Member</button>
            </div>
          )}

          {/* Generate button */}
          <button className="button-22" onClick={
            websiteType === 0? 
            getOpenAIResponseForSaaS:
            getOpenAIResponseForPortfolio
          }>
            Generate
          </button>
          
        </div>

        <div className="container-2">
          <div className="div-response">
            {loading ? (
              <ClipLoader color={"maroon"} loading={loading} size={150} />
            ) : (
              response
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
