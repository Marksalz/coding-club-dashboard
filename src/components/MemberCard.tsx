import "../styles/App.css";
import type IMemberCard from "../interfaces/ImemberCard.ts";

export default function MemberCard(props: { info: IMemberCard }) {
  return (
    <div className={props.info.active ? "member-card" : "member-card inactive"}>
      <div
        className="avatar"
        style={{
          backgroundColor:
            props.info.role === "Leader"
              ? "#3498db"
              : props.info.role === "Member"
              ? "#2ecc71"
              : props.info.role === "Guest"
              ? "#cc2eaaff"
              : "#000000ff",
        }}
      >
        {props.info.avatar}
      </div>
      <div className="info">
        <p className="name">{props.info.username}</p>
        <span
          className="role"
          style={{
            color:
              props.info.role === "Leader"
                ? "#3498db"
                : props.info.role === "Member"
                ? "#2ecc71"
                : props.info.role === "Guest"
                ? "#cc2eaaff"
                : "#000000ff",
          }}
        >
          {props.info.role}
        </span>
        <span className="active">
          {props.info.active ? "Active" : "Inactive"}
        </span>
      </div>
      <div className="member-btn">
        <button
          className="action-btn"
          style={{
            backgroundColor:
              props.info.role === "Leader"
                ? "#3498db"
                : props.info.role === "Member"
                ? "#2ecc71"
                : props.info.role === "Guest"
                ? "#cc2eaaff"
                : "#000000ff",
          }}
          disabled={!props.info.active}
        >
          Action
        </button>
      </div>
    </div>
  );
}
