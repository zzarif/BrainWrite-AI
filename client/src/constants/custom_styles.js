export const multiSelectStyle = {
  control: (base, state) => ({
    ...base,
    // background: "transparent",
    marginTop: "0.3rem",
    borderRadius: "0.5rem",
    padding: "0.4rem",
    fontFamily: "'TiltNeon', sans-serif",
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
    fontFamily: "'TiltNeon', sans-serif",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#2C3E50",
  }),
};
