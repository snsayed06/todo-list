import { useEffect, useState } from "react";
import Bar from "./Bar";
import "./Styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const time = setInterval(() => {
      setValue((val) => val + 0.1);
    }, 20);
    return ()=>{
      clearInterval(time)
    }
  }, []);

  return (
    <div className="app">
      <span>Progress Bar</span>
      <Bar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Complete!" : "Loading..."}</span>
    </div>
  );
}
