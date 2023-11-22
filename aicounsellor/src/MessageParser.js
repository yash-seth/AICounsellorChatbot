import React from "react";

const MessageParser = ({ children, actions }) => {
  console.log("Checker :: ", children.props.state.checker);
  const parse = (message) => {
    if (children.props.state.checker === "inquired_college") {
      actions.college_fetch(message);
    } else if (children.props.state.checker === "inquired_fees") {
      actions.getLocation_Preference(parseInt(message));
    } else if (children.props.state.checker === "inquired_location") {
      children.props.state.ideal_location = message === "No" ? null : message;
      actions.getIdealCollege(children.props.state);
    } else if (children.props.state.checker === "generic") {
      actions.converse(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: { actions },
        });
      })}
    </div>
  );
};

export default MessageParser;
