import { useEffect } from "react";
import "./App.css";
import MenuLayout from "./layouts/menuLayout/menuLayout";
import SearchLayout from "./layouts/searchLayout";
import ApplicantsLayout from "./layouts/applicantsLayout";
import { useDimentions } from "./hooks/useDimensions";
import ApplicantInfo from "./containers/ApplicantsTable/ApplicantInfo/applicantInfo";
import CustomTable from "./containers/CustomTable/table";
// import CustomTable from "./containers/CustomTable/table";
// import { applicantInfo } from "./constants/applicantsInfo";
// import ApplicantInfo from "./containers/ApplicantsTable/ApplicantInfo";
// import ApplicantsLayout from "./layouts/applicantsLayout/applicantsLayout";

function App() {
  useEffect(() => {
    //alert(window.screen.height);
  }, []);
  // let options = ["helo", "123", "CYYY"]; //console.log(countries);
  // const { searchSidebarHeight } = useSelector((state) => state.app);

  return (
    <div className="App theme layout no-highlight">
      <ApplicantsLayout />
    </div>
  );
}

export default App;
