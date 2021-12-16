import React, { useEffect } from "react";
import { changeLayOutColors } from "../utils/helpers";

const InHouse = () => {
  useEffect(() => {
    changeLayOutColors("#fff");
  }, []);
  return (
    <main>
      <h1 className='text-6xl'>In House</h1>
    </main>
  );
};

export default InHouse;
