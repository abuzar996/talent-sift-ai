//import { useEffect } from "react";
import "./App.css";
//import { countries } from "countries-list";
//import { useSelector } from "react-redux";
//import Crousal from "./containers/Crousal";
//import Nav from "./containers/Nav";
//import SearchSidebar from "./containers/SearchSidebar";
//import Select from "./components/Select";
//import Select from "react-select";
//import InfoCard from "./containers/ExperienceInfoCard";
//import CandidateInfo from "./containers/CandidatesList/List";
//import Header from "./containers/SearchHeader/Header";
import MenuLayout from "./layouts/searchLayout";
//import Select from "./containers/SearchHeader/Select";
//import Avatar from "./components/Avatar";
function App() {
  // let options = ["helo", "123", "CYYY"]; //console.log(countries);
  // const { searchSidebarHeight } = useSelector((state) => state.app);

  return (
    <div className="App theme layout no-highlight">
      <MenuLayout />
    </div>
  );
}

export default App;
