import React from "react";

function TestA() {
  const arry = ["a", "b", "c", "a", "b"];
    arry.map((arr, i) => {
      console.log("🚀 ~ file: TestA.js ~ line 8 ~ arry.map ~ arr", arr);
    });
   

  return <div></div>;
}

export default TestA;
