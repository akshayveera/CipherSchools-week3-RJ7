import React, { useEffect, useState } from "react";
import higherOrderComponent from "./HOC";
import LOC from "./LOC";

const TaskComponent = () => {
  const [taskList, setTaskList] = useState([]);
  const [sum, setSum] = useState(0);

  // useEffect(() => {
  //   dummyApiCall()
  //     .then((data) => setTaskList(data))
  //     .catch()
  //     .finally(() => setIsLoading(false));
  // }, []);

  useEffect(() => {
    console.log("TaskComponent was mounted!");
  }, [taskList]);

  useEffect(() => {
    console.log("TaskComponent was updated!");

    return () => {
      console.log("TaskComponent was unmounted!");
    };
  });

  const LowerOrder = higherOrderComponent(
    () => console.log("LOC in Task Component"),
    LOC
  );

  return (
    <>
      <div>
        <h1 onClick={(e) => setSum(sum + 1)}>The sum is: {sum}</h1>
      </div>
      <LowerOrder />
    </>
  );
};

export default TaskComponent;
