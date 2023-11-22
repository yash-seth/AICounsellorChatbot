import React from "react";

const Button = (props) => {
  const takeaction = () => {
    switch (props.func) {
      case "college_inquire":
        props.props.actionProvider.actions.college_inquire_query();
        break;
      case "best_college":
        props.props.actionProvider.actions.get_best_college();
        break;
      case "sort_by":
        props.props.actionProvider.actions.top_colleges(props.criteria);
        break;
      case "ideal_college":
        props.props.actionProvider.actions.ideal_college();
        break;
      default:
        break;
    }
  };
  return (
    <button
      className="chat-button"
      onClick={() => {
        takeaction();
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
