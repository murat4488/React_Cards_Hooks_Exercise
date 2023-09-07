import React, { useState } from "react";

const useFlip = () => {
  const [state, setState] = useState(true);
  const flipState = () => {
    setState((flip) => !flip);
  };
  return [state, flipState];
};
export default useFlip;
