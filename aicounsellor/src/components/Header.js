import React, { useEffect, useState } from "react";
import "./Header.css";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
function Header(props) {
  const [program, setProgram] = useState("mba");
  useEffect(() => {
    props.dataHandler(program);
  }, [program]);
  return (
    <div className="header">
      <p className="head">
        <span>
          <SchoolRoundedIcon
            style={{
              fontSize: "xx-large",
              marginRight: "1rem",
              marginTop: "0.25rem",
            }}
          />
        </span>
        AI-Counsellor
      </p>
      <nav className="header-nav">
        <select
          value={program}
          onChange={(event) => {
            setProgram(event.target.value);
          }}
        >
          <option value="btech">Btech</option>
          <option value="mtech">Mtech</option>
          <option value="mba">MBA</option>
        </select>
      </nav>
    </div>
  );
}

export default Header;
