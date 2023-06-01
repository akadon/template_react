import { useState } from "react";
import Button from "components/atoms/Button";

function App() {
  const [count, setCount] = useState(0);
  const test = 123;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="noreffer">
          test{" "}
        </a>
        <a href="https://react.dev" target="noreffer">
          tset{" "}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount((count) => count + 1)}
          type="button"
        >
          count is {count}
        </button>
        <Button>test</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
