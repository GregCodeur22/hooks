import React, { useContext } from "react";
import { UseNumber } from "./AppContext";

const OtherComponent = () => {
  const userNumber = useContext(UseNumber);

  console.log(userNumber);

  return <div>{userNumber} </div>;
};

export default OtherComponent;
