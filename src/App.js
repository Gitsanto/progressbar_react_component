import React, { useState, useEffect } from "react";
import ProgressBar from "./Progressbar";
import "./styles.css";

const testData = [{ bgcolor: "#6a1b9a", completed: 60 }];

function App() {
  const [LabelProgressWidth, setLabelProgressWidth] = useState(0);

  useEffect(() => {
    setInterval(
      () => setLabelProgressWidth(Math.floor(Math.random() * 100) + 1),
      2000
    );
  }, []);

  return (
    <div className="App">
      {testData.map((item, idx) => (
        <ProgressBar
          key={idx}
          bgcolor={item.bgcolor}
          completed={LabelProgressWidth}
        />
      ))}
    </div>
  );
}

export default App;
