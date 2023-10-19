import "./App.css";
//import { countries } from "countries-list";
import { useSelector } from "react-redux";
import Crousal from "./containers/Crousal";
import Nav from "./containers/Nav";
import SearchSidebar from "./containers/SearchSidebar";
//import Select from "./components/Select";
//import Select from "react-select";
import InfoCard from "./containers/ExperienceInfoCard";
import CandidateInfo from "./containers/CandidatesList/List";
//import Avatar from "./components/Avatar";
function App() {
  // let options = ["helo", "123", "CYYY"]; //console.log(countries);
  const { searchSidebarHeight } = useSelector((state) => state.app);
  return (
    <div className="App theme layout no-highlight">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {/* <CandidateInfo />
        <CandidateInfo /> */}
        {/*        <InfoCard />
        <InfoCard />
        <InfoCard /> */}

        {/* <Nav Title={"Search / Search Candidate"} />
        <Crousal />
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "30%",
              height: `${searchSidebarHeight}px`,
              overflow: "scroll",
            }}
          >
            <SearchSidebar />
          </div> */}

        <div>
          <CandidateInfo />
          {/* <CandidateInfo />
          <CandidateInfo /> */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
