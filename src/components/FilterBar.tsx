import "../styles/App.css";
import { useState } from "react";

export default function FilterBar(props: {
  toggleText: string;
  switchLayout: string;
  onSwitchLayout: () => void;
}) {
  const [toggle, setToggle] = useState(false);

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
        <button className="swich-layout-btn" onClick={props.onSwitchLayout}>
          {props.switchLayout}
        </button>
      </div>
    </div>
  );
}
