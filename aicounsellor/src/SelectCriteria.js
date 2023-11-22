import React from "react";
import Button from "./Button";
const SelectCriteria = (props) => {
  return (
    <div className="bot-functions-container">
      <Button
        {...{ props, text: "Rating", criteria: "Rating", func: "sort_by" }}
      />
      <Button {...{ props, text: "Fees", criteria: "Fees", func: "sort_by" }} />
      <Button
        {...{ props, text: "Package", criteria: "Package", func: "sort_by" }}
      />
      <Button {...{ props, text: "Score", criteria: "Score", func: "sort_by" }} />
    </div>
  );
};

export default SelectCriteria;
