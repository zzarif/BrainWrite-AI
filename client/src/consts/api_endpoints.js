// async select items api endpoints
export const WEBSITE_TYPE_LIST = "/api/select/websiteTypeList";
export const SAAS_COPY_LIST = "/api/select/saasCopyList";
export const ECOM_COPY_LIST = "/api/select/ecomCopyList";
export const PORTFOLIO_COPY_LIST = "/api/select/portfolioCopyList";

// get OpenAI response api endpoints
export const SAAS_HERO_TITLE = "/api/prompt/saasHeroTitle";





export default function resolveAPI(websiteType, copy) {
    
    switch(websiteType) {
        // SAAS
        case 0:
            switch(copy) {
                case 0: return SAAS_HERO_TITLE;
                // case 1:
                // case 2:
            }
            break;

        // E-COMMERCE
        case 1:
            switch (copy) {
                case 0: return SAAS_HERO_TITLE;
                // case 1:
                // case 2:
            }
            break;
        
        // PORTFOLIO
        case 2:
            switch(copy) {
                case 0: return SAAS_HERO_TITLE;
                // case 1:
                // case 2:
            }
            break;
    }
}