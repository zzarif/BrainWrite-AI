export const baseURL = "http://localhost:5000";

// async select items api endpoints
export const WEBSITE_TYPE_LIST = "/api/select/websiteTypeList";
export const SAAS_COPY_LIST = "/api/select/saasCopyList";
export const PORTFOLIO_SUB_LIST = "/api/select/portfolioSubList";
export const PORTFOLIO_COPY_LIST = "/api/select/portfolioCopyList";

// get OpenAI response api endpoints
export const SAAS_GENERIC = "/api/prompt/saasGeneric";
export const SAAS_HERO_TITLE = "/api/prompt/saasHeroTitle";
export const SAAS_TEAM_COPY = "/api/prompt/saasTeamCopy";

export const PORTFOLIO_GENERIC = "/api/prompt/portfolioGeneric";
export const PORTFOLIO_HERO_TITLE = "/api/prompt/portfolioHeroTitle";


export default function resolveAPI(websiteType, copy) {
    
    switch(websiteType) {
        // SAAS
        case 0:
            switch(copy) {
                case 0: return SAAS_HERO_TITLE; //saas hero title
                case 9: return SAAS_TEAM_COPY; //saas team copy
                default: return SAAS_GENERIC;
            }
            break;

        // PORTFOLIO
        case 1:
            switch (copy) {
                case 0: return PORTFOLIO_HERO_TITLE;
                default: return PORTFOLIO_GENERIC;
            }
            break;
        
        default: return null;
    }
}