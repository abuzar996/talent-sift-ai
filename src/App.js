import "./App.css";
//import { countries } from "countries-list";
import { useSelector } from "react-redux";
import Crousal from "./containers/Crousal";
import Nav from "./containers/Nav";
import SearchSidebar from "./containers/SearchSidebar";
//import Select from "./components/Select";
//import Select from "react-select";
import InfoCard from "./containers/infoCard";
import Avatar from "./components/Avatar";
function App() {
  // let options = ["helo", "123", "CYYY"]; //console.log(countries);
  const { searchSidebarHeight } = useSelector((state) => state.app);
  return (
    <div className="App theme layout no-highlight">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
        }}
      >
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      {/*
        <Nav Title={"Search / Search Candidate"} />
        <Crousal />
        <div
          style={{
            width: "30%",
            height: `${searchSidebarHeight}px`,
            overflow: "scroll",
          }}
        >
          <SearchSidebar />
        </div>
      </div> */}
    </div>
  );
}

export default App;
