import React from "react";
import Button from "./Button";

const BotFunctions = (props) => {
  return (
    <div className="bot-functions-container">
      <Button
        {...{ props, text: "Inquire about a College", func: "college_inquire" }}
      />
      <Button
        {...{ props, text: "List Best Colleges", func: "best_college" }}
      />
      <Button
        {...{ props, text: "Ideal College for you", func: "ideal_college" }}
      />
    </div>
  );
};

export default BotFunctions;
