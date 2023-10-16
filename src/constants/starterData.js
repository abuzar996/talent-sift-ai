import { BsFillPersonFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { GiArtificialHive } from "react-icons/gi";
import { BsFillBagCheckFill } from "react-icons/bs";

export const searchData = [
  {
    icon: <BsFillPersonFill />,
    id_: 1,
    heading: "Candidate Role",
    description: "Begin by selecting a specific role or job title",
  },

  {
    icon: <BsLinkedin />,
    id_: 2,
    heading: "LinkedIn profile",
    description: "Begin by using the LinkedIn profile of an ideal candidate.",
  },
  {
    icon: <BsFillBagCheckFill />,
    id_: 3,
    heading: "Job Description",
    description: "Base your search on an existing job description.",
  },
  {
    icon: <GiArtificialHive />,
    id_: 4,
    heading: "Ai Search Assistant",
    description:
      "Tell us in your own words what you are looking for. Our Ai will help you find the right candidates.",
  },
];
