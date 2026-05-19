import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
       <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={() => setIsDark(!isDark)}>
        Toggle
      </button>
      <h1>{count}</h1>


      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      <br />
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  );
}

export default App;