// Code Keypad Component Here
import React from "react";

function Keypad() {
  const logPass = () => console.log("Entering password...");
  return (
    <div>
      <input type="password" name="Nuclear keypad" onChange={logPass} />
    </div>
  );
}

export default Keypad;
