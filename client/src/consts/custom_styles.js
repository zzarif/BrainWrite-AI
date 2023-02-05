import chroma from 'chroma-js'

export const multiSelectStyles = {
  control: (base, state) => ({
    ...base,
    background: "transparent",
    borderRadius: "0.5rem",
    padding: "0.2rem 1rem",
    fontFamily: "'Roboto', sans-serif",
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "yellow" : "#C7C7C7",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "red" : "blue",
    },
  }),
};