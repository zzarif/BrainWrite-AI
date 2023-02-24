import * as api_endpoints from "../consts/api_endpoints";

// fetches Website Type List from backend
// @props-> searchValue: the value being searched
// @returns -> list of website types 
export const loadWebsiteTypeList = (searchValue, callback) => {
    setTimeout(async () => {
        const data = await fetch(api_endpoints.WEBSITE_TYPE_LIST, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
              },
            })
            .then((response) => response.json())
            .then((objectList) => objectList.filter(
            (obj) => obj.label.toLowerCase()
                        .includes(searchValue.toLowerCase())
        ));
        console.log(data);
        callback(data);
    }, 2000);
}

// fetches SAAS Copy List from backend
export const loadSaaSCopyList = (searchValue, callback) => {
  setTimeout(async () => {
    const data = await fetch(api_endpoints.SAAS_COPY_LIST, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((objectList) =>
        objectList.filter((obj) =>
          obj.label.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    console.log(data);
    callback(data);
  }, 2000);
};

// fetches E-COMMERCE Copy List from backend
export const loadEcomCopyList = (searchValue, callback) => {
  setTimeout(async () => {
    const data = await fetch(api_endpoints.ECOM_COPY_LIST, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((objectList) =>
        objectList.filter((obj) =>
          obj.label.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    console.log(data);
    callback(data);
  }, 2000);
};

// fetches PORTFOLIO Copy List from backend
export const loadPortfolioCopyList = (searchValue, callback) => {
  setTimeout(async () => {
    const data = await fetch(api_endpoints.PORTFOLIO_COPY_LIST, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((objectList) =>
        objectList.filter((obj) =>
          obj.label.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    console.log(data);
    callback(data);
  }, 2000);
};