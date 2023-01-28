import { GrAccessibility, GrAnnounce, GrAlarm, GrYoga, GrLock } from "react-icons/gr";

export const Skills = [
  {
    slug: "communicative",
    Component: GrAccessibility,
    title: "Communicative",
    Description: () => <>I always try to communicate in the best possible way.</>,
  },
  {
    slug: "innovative",
    Component: GrAnnounce,
    title: "Innovative",
    Description: () => <>Always giving ideas for news and improvements.</>,
  },
  {
    slug: "productive",
    Component: GrAlarm,
    title: "Productive",
    Description: () => <>Delivering before expected time.</>,
  },
  {
    slug: "competitive",
    Component: GrYoga,
    title: "Competitive",
    Description: () => <>I seek to be among the best to stand out.</>,
  },
  {
    slug: "optimistic",
    Component: GrYoga,
    title: "Optimistic",
    Description: () => <>Dealing with challenges such as: doing what has to be done.</>,
  },
  {
    slug: "grateful",
    Component: GrLock,
    title: "Grateful",
    Description: () => <>Dedicating to the company as if it were mine.</>,
  },
];
