import React, { useEffect, useRef, useState } from "react";
import { UseNumber } from "./component/AppContext";
import OtherComponent from "./component/OtherComponent";

const App = () => {
  const [myNumber, setMyNumber] = useState(0);
  const selectedNumber = useRef();

  useEffect(() => {
    console.log(`mon nombre est égale à ${myNumber}`);
  }, [myNumber]);

  return (
    <UseNumber.Provider value={myNumber}>
      <div>
        <h1>Hello</h1>
        <p>{myNumber}</p>
        <button onClick={() => setMyNumber(myNumber + 1)}> add </button>
        <label htmlFor="">Numéros de départ</label>
        <input
          type="number"
          defaultValue={0}
          ref={selectedNumber}
          onChange={() => setMyNumber(parseInt(selectedNumber.current.value))}
        />
      </div>
      <OtherComponent />
    </UseNumber.Provider>
  );
};

export default App;
