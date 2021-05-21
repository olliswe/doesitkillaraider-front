import React, { useState } from "react";
import NumberInput from "../elements/NumberInput";

const StatsForm = () => {
  const [state, setState] = useState("");

  return (
    <div>
      <NumberInput value={state} onChange={setState} />
    </div>
  );
};

export default StatsForm;
