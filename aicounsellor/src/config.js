import { Avatar } from "@mui/material";
import { createChatBotMessage } from "react-chatbot-kit";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import Button from "./Button";
import BotFunctions from "./BotFunctions";
import SelectCriteria from "./SelectCriteria";
const config = {
  botName: "AI-Counsellor",
  initialMessages: [
    createChatBotMessage(
      `Hi , I'm your AI-Counsellor. I will be personally assisting you to all your queries.`
    ),
    createChatBotMessage(`Some of My Functionalities are as follows:`, {
      withAvatar: true,
      delay: 500,
      widget: "bot_functions",
    }),
  ],
  customComponents: {
    botAvatar: (props) => (
      <Avatar sx={{ background: "black" }}>
        <SupportAgentIcon />
      </Avatar>
    ),
    userAvatar: (props) => (
      <Avatar sx={{ background: "orange" }}>
        <SchoolRoundedIcon />
      </Avatar>
    ),
  },
  state: {
    checker: "generic",
    ideal_fees: null,
    ideal_location: null,
  },
  widgets: [
    {
      widgetName: "bot_functions",
      widgetFunc: (props) => <BotFunctions {...props} />,
    },
    {
      widgetName: "select_criteria",
      widgetFunc: (props) => <SelectCriteria {...props} />,
    },
  ],
};

export default config;
