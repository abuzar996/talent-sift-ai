import { ImMagicWand } from "react-icons/im";
import { MdWorkHistory } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";
import { GiCompanionCube } from "react-icons/gi";
import { CgAttribution } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
export const searchSideData = [
  {
    heading: "TalentSift Magic",
    id_: 1,
    icon: <ImMagicWand />,
    subHeading: [
      {
        name: "TalentSift Magic",
        id_: 11,
        active: false,
        tags: [
          {
            title: "Verified Repoistory for junior developers",
            id_: 1,
          },
          {
            title: "Early Stage Startup expert",
            id_: 2,
          },
          {
            title: "Open-source contributer",
            id_: 3,
          },
          {
            title: "Verified code contributions",
            id_: 4,
          },
        ],
        opened: false,
      },
    ],
  },
  {
    heading: "Job Title",
    id_: 2,
    icon: <MdWorkHistory />,

    subHeading: [
      {
        name: "Current Title",
        id_: 21,
        active: false,
        tags: [
          {
            title: "Software Engineer",
            id_: 1,
          },
        ],
        opened: false,
      },
      {
        name: "Recent Ttile",
        id_: 22,
        active: true,
        tags: [
          {
            title: "Staff Engineer",
            id_: 2,
          },
        ],
        opened: false,
      },
    ],
  },
  {
    heading: "Location",
    id_: 3,
    icon: <IoLocation />,
    subHeading: [
      {
        name: "Location",
        id_: 31,
        active: false,
        tags: [
          {
            title: "United States",
            id_: 1,
          },
        ],
        opened: false,
      },
    ],
  },
  {
    heading: "Skills",
    id_: 4,
    icon: <AiOutlineStar />,
    subHeading: [
      {
        name: "Must have skills",
        id_: 41,
        active: false,
        tags: [
          {
            title: "JavaScript",
            id_: 1,
          },
        ],
        opened: false,
      },
    ],
  },
  {
    heading: "Companies",
    id_: 5,
    icon: <GiCompanionCube />,
    subHeading: [
      {
        name: "Companies and domains",
        id_: 51,
        active: true,
        tags: [
          {
            title: "Apple.inc",
            id_: 1,
          },
        ],
        opened: false,
      },
    ],
  },
  {
    heading: "Company Attributes",
    id_: 6,
    icon: <CgAttribution />,
    subHeading: [
      {
        name: "Recent Growth Rate",
        id_: 61,
        active: true,
        tags: [
          {
            title: "Remote Working",
            id_: 1,
          },
        ],
        opened: false,
      },
    ],
  },
  {
    heading: "Company Size",
    id_: 7,
    icon: <IoIosPeople />,
    subHeading: [
      { name: "Recent Size", id_: 71, opened: false, active: false },
    ],
  },
];
