import "./App.css";
//import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import Button from "./components/Card";
function App() {
  return (
    <div className="App theme layout no-highlight">
      <Button icon={<BsFillPersonFill />}></Button>
    </div>
  );
}

export default App;
