import "./App.css";
//import { BiSearch } from "react-icons/bi";
//import { BsFillPersonFill } from "react-icons/bs";
//import Button from "./containers/Select";
//import Nav from "./containers/Nav";
//import Overlay from "./containers/Overlay";
//import SearchView from "./views/searchView";
import Crousal from "./containers/Crousal";
import Nav from "./containers/Nav";
import SearchSidebar from "./containers/SearchSidebar";
//import Heading from "./containers/SearchSidebar/Sections/Headings/heading";
//import Tag from "./components/Tag";
//import Input from "./components/Input";
function App() {
  return (
    <div className="App theme layout no-highlight">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
        }}
      >
        <Nav Title={"Search"} />
        <Crousal />
        <div style={{ width: "30%" }}>
          <SearchSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
