import { useEffect } from "react";
import "./App.css";
import CustomTable from "./containers/CustomTable/table";
import { applicantInfo } from "./constants/applicantsInfo";
import ApplicantInfo from "./containers/ApplicantsTable/ApplicantInfo";

function App() {
  useEffect(() => {
    //alert(window.screen.height);
  }, []);
  // let options = ["helo", "123", "CYYY"]; //console.log(countries);
  // const { searchSidebarHeight } = useSelector((state) => state.app);

  return (
    <div className="App theme layout no-highlight">
      {/* <MenuLayout>
        <SearchLayout />
        <
      </MenuLayout> */}
      <div style={{ display: "flex", flex: 1 }}>
        <CustomTable>
          <ApplicantInfo data={applicantInfo} />
        </CustomTable>
        {/* <ApplicantInfo data={applicantInfo} /> */}
      </div>
    </div>
  );
}

export default App;
