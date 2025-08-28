import "../src/styles/App.css";
import Header from "./components/Header.tsx";
import FilterBar from "./components/FilterBar.tsx";
import MemberCard from "./components/MemberCard.tsx";
import type IMemberCard from "./interfaces/ImemberCard.ts";
import MembersList from "./components/MembersList.tsx";

const memberInfo: IMemberCard[] = [
  {
    avatar: "MS",
    username: "Menachem Salzberg",
    role: "Member",
    active: true,
  },
  {
    avatar: "JD",
    username: "Jane Doe",
    role: "President",
    active: true,
  },
  {
    avatar: "AB",
    username: "Alex Brown",
    role: "Vice President",
    active: false,
  },
  {
    avatar: "SK",
    username: "Sam Kim",
    role: "Treasurer",
    active: true,
  },
  {
    avatar: "LT",
    username: "Linda Tran",
    role: "Secretary",
    active: false,
  },
];

function App() {
  return (
    <>
      <Header text="Campus Club Dashboard" />
      <FilterBar toggleText="Show only active members" />
      <MembersList members={memberInfo} />
    </>
  );
}

export default App;
