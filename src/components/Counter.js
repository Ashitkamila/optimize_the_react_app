import React, { useCallback, useEffect, useMemo } from "react";
import dummyData from "../data.json";

const Counter = (props) => {
  let { count } = props;

  const totalLengthOfData = (arr) => {
    console.log("always calling"); //to varify the recalling the funtion again and again
    let count = 0;
    for (let i = 0; i < arr.products.length; i++) count++;
    return count;
  };

  const totalLength = useMemo(() => totalLengthOfData(dummyData), []);
  // const totalLength = totalLengthOfData(dummyData); to prevent the memory leak we can use above
  // const totalLength = dummyData.products.length;
  //To find the length of the products data above is not good way ,we can make it function;

  //useCallback
  const windowLoadCallback = useCallback(() => {
    console.log(".....loaded!");
  }, []);

  useEffect(() => {
    window.addEventListener("load", windowLoadCallback);

    return () => {
      window.removeEventListener("load", windowLoadCallback);
    };
  }, []);
  return (
    <div>
      <h1>This is Performance Improvement Application..!!</h1>
      <h3>Counter={count}</h3>
      <h4>Total Numbers of Data = {totalLength}</h4>
    </div>
  );
};

export default Counter;
