import React, { useState, useContext } from "react";
import { DataContext } from "./App";
import axios from "axios";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const data = useContext(DataContext);
  const [fees, setFees] = useState(0);
  const [payload, setPayload] = useState("");
  const converse = async (msg) => {
    console.log("MEssage sent to server ", msg);
    let message;
    try {
      const result = await axios.post("http://localhost:3001/nlpbot", {
        payload: msg,
      });
      // console.log("Recieved Response :: ", result.data);
      message = createChatBotMessage(result.data);
      updateState(message, "generic");
    } catch (e) {
      console.log("Error in Retrieving from Express server....");
      console.log(e);
    }

    message = createChatBotMessage(
      `Here are Some Services that I can assist you with!`,
      {
        withAvatar: true,
        delay: 500,
        widget: "bot_functions",
      }
    );
    updateState(message, "generic");
  };
  const college_inquire_query = () => {
    const message = createChatBotMessage(
      "Please enter the name of the college you wish to inquire about."
    );
    updateState(message, "inquired_college");
  };
  const college_fetch = (clgname) => {
    const obj = data.filter((record) => record.Name === clgname);
    if (obj[0]) {
      let message = createChatBotMessage(
        `${obj[0].Name} is a reputed college in India located in ${obj[0].Location}.`,
        { withAvatar: true }
      );
      updateState(message, "");
      message = createChatBotMessage(
        `It offers ${obj[0].ProgramType} course. Fees can usually go upto ₹${obj[0].Fees}/yr. The average package offered in the recent past is ₹${obj[0].Package}.`,
        { withAvatar: true, delay: 1000 }
      );
      updateState(message, "");
      message = createChatBotMessage(
        `It has been rated ${obj[0].Rating}/10 and has got an Overall Score of ${obj[0].Score}/100. Some of the surveys have noted that the college is ${obj[0].Review}. `,
        { withAvatar: true, delay: 1000 }
      );
      updateState(message, "");
      message = createChatBotMessage(
        `For Admission in This College , You might have to take up some Entrance Examinations such as ${obj[0].Exam}. `,
        { withAvatar: true, delay: 1000 }
      );
      updateState(message, "");
      message = createChatBotMessage(
        `To know more about the college, please follow given link: ${obj[0].SiteLink}. Thank You!`,
        { withAvatar: true, delay: 1000 }
      );
      updateState(message, "");
    } else {
      const message = createChatBotMessage(
        "Hey!!! I am sorry, I am unaware of this College. Please try again by copying the college name from the table entry properly!!"
      );
      updateState(message, "inquired_college");
    }
    // call the init functions display part
    const message = createChatBotMessage(`Functionalities`, {
      withAvatar: true,
      delay: 500,
      widget: "bot_functions",
    });
    updateState(message, "generic");
    // here the user can ask general questions which need to be answered by having an api hit on the local server which runs NLP model and identifies intent and answers accordingly.
  };

  const get_best_college = () => {
    const message = createChatBotMessage(
      "Sure! On what basis should I fetch the best colleges?",
      {
        withAvatar: true,
        widget: "select_criteria",
      }
    );
    updateState(message, "best_college");
  };
  const getCriteriaValue = (college, criteria) => {
    switch (criteria) {
      case "Rating":
        return college.Rating;
      case "Fees":
        return college.Fees;
      case "Package":
        return college.Package;
      case "Score":
        return college.Score;
      default:
        break;
    }
  };
  const top_colleges = (criteria) => {
    const best_colleges_based_on_criteria = data.sort((a, b) =>
      a[criteria] < b[criteria] ? 1 : -1
    );
    let msg = "";
    for (var i = 0; i < 5; i++) {
      msg = `${i + 1}.  ${
        best_colleges_based_on_criteria[i].Name
      } | ${criteria} = ${getCriteriaValue(
        best_colleges_based_on_criteria[i],
        criteria
      )}`;
      const message = createChatBotMessage(msg, { withAvatar: true });
      updateState(message, "");
    }
    // call the init functions display part
    const message = createChatBotMessage(`Functionalities`, {
      withAvatar: true,
      delay: 500,
      widget: "bot_functions",
    });
    updateState(message, "generic");
  };

  const ideal_college = () => {
    const message = createChatBotMessage(
      "Please enter the maximum fees amount you would afford to pay (for 4 years) "
    );
    updateState(message, "inquired_fees");
  };

  const getLocation_Preference = (rec_fees) => {
    setFees(rec_fees);
    const message = createChatBotMessage(
      "If you have any location preference, please enter the city or state of your choice! Else enter 'No'!"
    );
    updateState(message, "inquired_location");
  };

  const getIdealCollege = (state) => {
    // get all the colleges with fees lower than the set one...
    const feefilter = data.filter((record) => record.Fees <= fees);
    let location_filter = {};
    if (state.ideal_location) {
      location_filter = feefilter.filter((record) =>
        record.Location.toLowerCase().includes(
          state.ideal_location.toLowerCase()
        )
      );
    } else {
      location_filter = feefilter;
    }

    const final_sort = location_filter.sort((a, b) =>
      a["Score"] < b["Score"] ? 1 : -1
    );

    let message = createChatBotMessage(
      `Fetching the Ideal College for you....`,
      { withAvatar: true }
    );
    updateState(message, "");
    message = createChatBotMessage(`Analysing Parameters ....`, {
      withAvatar: true,
      delay: 1000,
    });
    updateState(message, "");

    message = createChatBotMessage(
      `The Ideal College would be: ${final_sort[0].Name}, which has a aggregate fees of ${final_sort[0].Fees} and a Overall Score of ${final_sort[0].Score}.`,
      { withAvatar: true, delay: 1000 }
    );
    updateState(message, "");

    message = createChatBotMessage(
      `The college is ranked at ${final_sort[0].Id} in India. The average package offered here is ${final_sort[0].Package}`,
      { withAvatar: true, delay: 1000 }
    );
    updateState(message, "");

    message = createChatBotMessage(
      `To know more about the college, please follow given link: ${final_sort[0].SiteLink}. Thank You!`,
      { withAvatar: true, delay: 1000 }
    );
    updateState(message, "");

    // call the init functions display part
    message = createChatBotMessage(`Functionalities`, {
      withAvatar: true,
      delay: 500,
      widget: "bot_functions",
    });
    updateState(message, "generic");
  };
  const updateState = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            converse,
            college_inquire_query,
            college_fetch,
            get_best_college,
            top_colleges,
            ideal_college,
            getLocation_Preference,
            getIdealCollege,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
