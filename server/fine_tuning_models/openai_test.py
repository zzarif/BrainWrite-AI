import openai

# Authenticate to OpenAI API
openai.organization = "org-h7YLCmGP3QzeuXlZkbpjCTOA"
openai.api_key = "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"
# fine_tune_id: "ft-LoMGGyMLTtZDDhllXRTw2HPn"

# Define the model and text generation prompt
model = "davinci:ft-personal:bw-hero-title-davinci-2023-02-11-12-33-02"
prompt = "Company Name: BrainWrite\nCompany Description: BrainWrite is a plugin for Figma that enables designers and content writers to quickly write text and content using the GPT-3 technology. The plugin will allow users to easily generate hero copy, copy for services offers, features copy, and benefits copy inside Figma without leaving the platform.\nWrite a Hero Title for SaaS Landing Page.\nBrainWrite:\n\n###\n\n"

# Generate the text response
response = openai.Completion.create(
    model=model,
    prompt=prompt,
    temperature=0.9,
    max_tokens=256,
    stop=" END",
    top_p=1,
    frequency_penalty=0.5,
    presence_penalty=0.5,
    n=1,
)

# Print the response
print(response["choices"][0]["text"])