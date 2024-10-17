import { useState } from "react";

export default function Button({ children }) {
  const [clickCount, setClickCount] = useState(0);
  const onClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <button onClick={onClick}>
      {children}
      {clickCount}
    </button>
  );
}
