export const initialUserState = {
    isLoggedIn: false,
    userId: null,

    projectId: null,
    projectName: null,
    projectType: null,

    companyName: null,
    companyDesc: null,
    websiteType: null,
    category: null,
}

export const actions = {
    IS_LOGGED_IN: "is_logged_in",
    USER_ID: "user_id",

    PROJECT_ID: "project_id",
    PROJECT_NAME: "project_name",
    PROJECT_TYPE: "project_type",

    COMPANY_NAME: "company_name",
    COMPANY_DESC: "company_desc",
    WEBSITE_TYPE: "website_type",
    CATEGORY: "category"
}

export const reducer = (state, action) => {
    switch(action.type) {
        case actions.IS_LOGGED_IN: return { ...state, isLoggedIn: !state.isLoggedIn};
        case actions.USER_ID: return { ...state, userId: action.payload};
        
        case actions.PROJECT_ID: return { ...state, projectId: action.payload};
        case actions.PROJECT_NAME: return { ...state, projectName: action.payload};
        case actions.PROJECT_TYPE: return { ...state, projectType: action.payload};
        
        case actions.COMPANY_NAME: return { ...state, companyName: action.payload};
        case actions.COMPANY_DESC: return { ...state, companyDesc: action.payload};
        case actions.WEBSITE_TYPE: return { ...state, websiteType: action.payload};
        case actions.CATEGORY: return { ...state, category: action.payload};

        default: return state;
    }
}