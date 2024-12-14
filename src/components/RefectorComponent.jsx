import { useState } from "react";

export default function RefectorComponent({ children }) {
  const [count, setCount] = useState(0);
  console.log("Called")
  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      {children}
    </>
  );
}
