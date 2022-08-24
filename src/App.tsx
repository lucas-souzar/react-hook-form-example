import "./App.css";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <h1>Components Sample</h1>

      <Input
        id="username"
        type="text"
        label="Username"
        placeholder="Enter your username"
        required
      />
    </div>
  );
}

export default App;
