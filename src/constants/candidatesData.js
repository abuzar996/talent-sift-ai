import image from "../assets/photo2.jpg";
import linkedIn from "../assets/linkedIn.png";
import apple from "../assets/apple.png";
import fast from "../assets/fast.png";
export const candidateData = [
  {
    id: 1,
    name: "Abuzar Rahim",
    currentRole: "Full Stact Developer",
    company: "Apple.inc",
    image: image,
    Experiences: [
      {
        id_: 11,
        role: "Full Stack Developer",
        Dates: "November 2019- present",
        company: "Apple.inc",
        logo: apple,
      },
      {
        id_: 12,
        role: "Staff Developer",
        Dates: "November 2020- August 2021",
        company: "LinkedIn",
        logo: linkedIn,
      },
    ],
    Education: [
      {
        id_: 111,
        degree: "Ms Computer Engineering",
        Dates: "November 2021- August 2023",
        school: "Lums, Lahore",
        logo: fast,
      },
      {
        id_: 112,
        degree: "Bs Computer Engineering",
        Dates: "November 2017- August 2021",
        school: "Fast University",
        logo: fast,
      },
    ],
  },
];
