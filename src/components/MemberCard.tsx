import "../styles/App.css";
import type IMemberCard from "../interfaces/ImemberCard.ts";

export default function MemberCard(props: { info: IMemberCard }) {
  const roleColorClass =
    props.info.role === "Leader"
      ? "role-leader"
      : props.info.role === "Member"
      ? "role-member"
      : props.info.role === "Guest"
      ? "role-guest"
      : "role-default";

  return (
    <div className={props.info.active ? "member-card" : "member-card inactive"} onClick={()=>{
      if (props.info.active) {
        
      } else {
        
      }
    }}>
      <div className={`avatar ${roleColorClass}`}>{props.info.avatar}</div>
      <div className="info">
        <p className="name">{props.info.username}</p>
        <span className={`role ${roleColorClass}`}>{props.info.role}</span>
        <span className="active">
          {props.info.active ? "Active" : "Inactive"}
        </span>
      </div>
      <div className="member-btn">
        <button
          className={`action-btn ${roleColorClass}`}
          disabled={!props.info.active}
        >
          Action
        </button>
      </div>
    </div>
  );
}
