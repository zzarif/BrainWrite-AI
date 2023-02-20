export const fetchPromptResponse = async (props) => {
    console.log(props);
    const finalResponse = await fetch("/api/prompt/saasHeroTitle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName: props.companyName,
        companyDesc: props.companyDesc,
        websiteType: props.websiteType,
        copyType: props.copyType,
      }),
    })
      .then((res) => res.json())
      .then((data) => data.message);

    return finalResponse;
};
