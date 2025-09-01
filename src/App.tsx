import "../src/styles/App.css";
import Header from "./components/Header.tsx";
import FilterBar from "./components/FilterBar.tsx";
import type IMemberCard from "./interfaces/ImemberCard.ts";
import MembersList from "./components/MembersList.tsx";
import { useState } from "react";
import Footer from "./components/Footer.tsx";

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
    role: "Leader",
    active: true,
  },
  {
    avatar: "AB",
    username: "Alex Brown",
    role: "Leader",
    active: false,
  },
  {
    avatar: "SK",
    username: "Sam Kim",
    role: "Member",
    active: true,
  },
  {
    avatar: "LT",
    username: "Linda Tran",
    role: "Guest",
    active: false,
  },
];

function App() {
  const [members] = useState(memberInfo);
  const [switchLayout, setSwitchLayout] = useState("list");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="dashboard">
      <Header text="Campus Club Dashboard" />
      <FilterBar
        toggleText="Show only active members"
        toggle={toggle}
        onToggle={() => setToggle(toggle === true ? false : true)}
        switchLayout={switchLayout}
        onSwitchLayout={() =>
          setSwitchLayout(switchLayout === "list" ? "grid" : "list")
        }
      />
      <MembersList
        members={members}
        layout={switchLayout}
        showActive={toggle}
      />
      <Footer />
    </div>
  );
}

export default App;
