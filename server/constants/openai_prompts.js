// https://stackoverflow.com/a/21247500

module.exports = Object.freeze({
    // OpenAI keys
    ORGANIZATION: 'org-h7YLCmGP3QzeuXlZkbpjCTOA',
    API_KEY: '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',

    // OpenAI params
    MODEL: 'text-davinci-003',
    TEMPERATURE: 0.9,
    MAX_TOKENS: 500,
    TOP_P: 1,
    FREQUENCY_PENALTY: 0.5,
    PRESENCE_PENALTY: 0.5,
    BEST_OF: 1,

    // Prompt body
    COMPANY_NAME_TAG: 'Company Name: ',
    COMPANY_DESC_TAG: 'Company Description: ',
    WEBSITE_TYPE_TAG: 'Website Type: ',
    PRE_COMMAND: 'Write copy for ',
    POST_COMMAND: ' from the above information.',
    EXAMPLES: 'Examples:\n',

    // SaaS Hero Title
    SAAS_HERO_TITLE: `Slack: Where Work Happens. Simplify communication and collaboration, for teams of all sizes.
                    Hubspot: Grow Better. The all-in-one marketing, sales, and service platform, designed to help you succeed.
                    Zoom: Connect. From Anywhere. Video conferencing made it easy for remote teams and global meetings.
                    Quickbooks: Manage Your Finances, Effortlessly. Simplify accounting, for small businesses and freelancers alike.
                    Dropbox: Store, Sync, and Share. Keep your files and data safe, accessible, and always up-to-date.`.removeIndentation(),
    
    // some other stuff


});