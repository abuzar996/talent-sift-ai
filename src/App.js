import "./App.css";
//import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import Button from "./containers/Select";
//import Input from "./components/Input";
function App() {
  return (
    <div className="App theme layout no-highlight">
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", width: "50%" }}> */}
      {/* <div style={{ display: "flex" }}> */}
      <Button
        icon={<BsFillPersonFill />}
        description={"hello my name is abuzar"}
        heading={"hindndndni"}
      ></Button>
    </div>
    //</div>
    //  </div>
    //</div>
  );
}

export default App;
