import { MdOutlinePersonSearch } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
import { IoIosFlash } from "react-icons/io";
import { PiUserFocusThin } from "react-icons/pi";
import { LiaConnectdevelop } from "react-icons/lia";
import { FaHospitalUser } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
export const mainCrousalData = [
  {
    name: "Search",
    icon: <MdOutlinePersonSearch />,
    id_: 1,
    count: 12900,
    selected: true,
  },
  {
    name: "Applicants",
    icon: <GrDocumentUser />,
    id_: 2,
    count: 0,
    selected: false,
  },
  {
    name: "ATS",
    icon: <IoIosFlash />,
    id_: 3,
    count: 524,
    selected: false,
  },
  {
    name: "CRM",
    icon: <PiUserFocusThin />,
    id_: 4,
    count: 6400,
    selected: false,
  },
  {
    name: "Connections",
    icon: <LiaConnectdevelop />,
    id_: 5,
    count: 3400,
    selected: false,
  },
  {
    name: "Alumni",
    icon: <FaHospitalUser />,
    id_: 6,
    count: 0,
    selected: false,
  },
  {
    name: "Employees",
    icon: <GrUserWorker />,
    id_: 7,
    count: 2,
    selected: false,
  },
  {
    name: "Shortlisted",
    icon: <BsFillPeopleFill />,
    id_: 8,
    count: 0,
    selected: false,
  },
  {
    name: "Campaigns",
    icon: <AiOutlineMail />,
    id_: 9,
    count: 0,
    selected: false,
  },
];
