import "../src/styles/App.css";
import Header from "./components/Header.tsx";
import FilterBar from "./components/FilterBar.tsx";
import type IMemberCard from "./interfaces/ImemberCard.ts";
import MembersList from "./components/MembersList.tsx";
import { useState } from "react";
import Footer from "./components/Footer.tsx";
// import type ITask from "./interfaces/ITasks.ts";

const memberInfo: IMemberCard[] = [
  {
    id: 1,
    avatar: "MS",
    username: "Menachem Salzberg",
    role: "Member",
    active: true,
  },
  {
    id: 2,
    avatar: "JD",
    username: "Jane Doe",
    role: "Leader",
    active: true,
  },
  {
    id: 3,
    avatar: "AB",
    username: "Alex Brown",
    role: "Leader",
    active: false,
  },
  {
    id: 4,
    avatar: "SK",
    username: "Sam Kim",
    role: "Member",
    active: true,
  },
  {
    id: 5,
    avatar: "LT",
    username: "Linda Tran",
    role: "Guest",
    active: false,
  },
];

// const tasksInfo: ITask[] = [
//   { id: 1, title: "Prepare club meeting agenda", done: false, assignedTo: 2 },
//   { id: 2, title: "Update member directory", done: true, assignedTo: 1 },
//   { id: 3, title: "Design event poster", done: false, assignedTo: 3 },
//   { id: 4, title: "Book conference room", done: true, assignedTo: 4 },
//   { id: 5, title: "Send invitations", done: false, assignedTo: 5 },
//   { id: 6, title: "Review club budget", done: true, assignedTo: 2 },
//   { id: 7, title: "Organize workshop materials", done: false, assignedTo: 1 },
//   { id: 8, title: "Update website", done: true, assignedTo: 3 },
//   { id: 9, title: "Prepare feedback form", done: false, assignedTo: 4 },
//   { id: 10, title: "Coordinate with guest speaker", done: true, assignedTo: 5 },
//   { id: 11, title: "Print certificates", done: false, assignedTo: 2 },
//   { id: 12, title: "Set up registration desk", done: true, assignedTo: 1 },
//   { id: 13, title: "Create social media post", done: false, assignedTo: 3 },
//   { id: 14, title: "Prepare snacks", done: true, assignedTo: 4 },
//   { id: 15, title: "Collect RSVPs", done: false, assignedTo: 5 },
//   { id: 16, title: "Test projector", done: true, assignedTo: 2 },
//   { id: 17, title: "Draft meeting minutes", done: false, assignedTo: 1 },
//   { id: 18, title: "Update club rules", done: true, assignedTo: 3 },
//   { id: 19, title: "Prepare welcome kit", done: false, assignedTo: 4 },
//   { id: 20, title: "Clean up venue", done: true, assignedTo: 5 },
// ];

function App() {
  const [members] = useState(memberInfo);
  const [switchLayout, setSwitchLayout] = useState("list");
  const [toggle, setToggle] = useState(false);
  // const [tasks] = useState(tasksInfo);

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
