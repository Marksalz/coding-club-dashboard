import "../styles/App.css";
import type IMemberCard from "../interfaces/ImemberCard.ts";
import MemberCard from "./MemberCard.tsx";

export default function MembersList(props: {
  members: IMemberCard[];
  layout: string;
}) {
  const containerClass =
    props.layout === "grid" ? "members-grid" : "members-list";
  return (
    <div className={containerClass}>
      {props.members.map((member, idx) => (
        <MemberCard key={idx} info={member} />
      ))}
    </div>
  );
}
