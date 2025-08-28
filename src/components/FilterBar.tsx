import "../styles/App.css";
import { useState } from "react";

export default function FilterBar(props: {
  toggleText: string;
}) {
  const [toggle, setToggle] = useState(false);
  const [switchLayout, setSwichLayout] = useState("list");

  return (
    <div className="filter-bar">
      <div className="filterbar-toggle">
        <label htmlFor="toggle-checkbox" className="filterbar-toggle-label">
          {props.toggleText}
        </label>
        <input
          id="toggle-checkbox"
          type="checkbox"
          className="filterbar-toggle-input"
          checked={toggle}
          onChange={() => setToggle(!toggle)}
        />
      </div>
      <div className="filterbar-switch">
        <button
          className="swich-layout-btn"
          onClick={() =>
            setSwichLayout(switchLayout === "list" ? "grid" : "list")
          }
        >
          {switchLayout}
        </button>
      </div>
    </div>
  );
}
