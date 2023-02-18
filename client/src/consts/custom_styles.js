export const multiSelectStyle = {
  control: (base, state) => ({
    ...base,
    background: "transparent",
    borderRadius: "0.5rem",
    padding: "0.2rem 0.2rem",
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
  option: (provided) => ({
    ...provided,
    color: 'black',
    fontFamily: "'Roboto', sans-serif",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#C7C7C7",
  }),
};
