import "../styles/App.css";
import type IMemberCard from "../interfaces/ImemberCard.ts";
import MemberCard from "./MemberCard.tsx";

export default function MembersList(props: { members: IMemberCard[] }) {
  return (
    <div className="members-list">
      {props.members.map((member, idx) => (
        <MemberCard key={idx} info={member} />
      ))}
    </div>
  );
}
