import "../styles/App.css";
import type IMemberCard from "../interfaces/ImemberCard.ts";
import MemberCard from "./MemberCard.tsx";

export default function MembersList(props: {
  members: IMemberCard[];
  layout: string;
  showActive: boolean;
}) {
  const containerClass =
    props.layout === "grid" ? "members-grid" : "members-list";
  const filteredMembers = props.showActive
    ? props.members.filter((member) => member.active)
    : props.members;
  return (
    <div className={containerClass}>
      {filteredMembers.map((member, idx) => (
        <MemberCard key={idx} info={member} />
      ))}
    </div>
  );
}
