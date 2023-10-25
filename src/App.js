import { useEffect } from "react";
import "./App.css";
//import MenuLayout from "./layouts/menuLayout/menuLayout";
//import SearchLayout from "./layouts/searchLayout";
//import ApplicantsLayout from "./layouts/applicantsLayout";
import { useDimentions } from "./hooks/useDimensions";
// import ApplicantInfo from "./containers/ApplicantsTable/ApplicantInfo/applicantInfo";
import AtsTable from "./containers/AtsTable";
//import Applayout from "./layouts/AppLayout";
//import CustomTable from "./containers/CustomTable/table";

function App() {
  const windowSize = useDimentions();
  useEffect(() => {
    console.log(windowSize.height);
  });
  return (
    <div className="App theme layout no-highlight">
      <AtsTable />
    </div>
  );
}

export default App;
