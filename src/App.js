import "./App.css";
import { countries } from "countries-list";
import { useSelector } from "react-redux";
import Crousal from "./containers/Crousal";
import Nav from "./containers/Nav";
import SearchSidebar from "./containers/SearchSidebar";

function App() {
  console.log(countries);
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
      </div>
    </div>
  );
}

export default App;
