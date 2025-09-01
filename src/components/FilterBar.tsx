import "../styles/App.css";

export default function FilterBar(props: {
  toggleText: string;
  toggle: boolean;
  onToggle: () => void;
  switchLayout: string;
  onSwitchLayout: () => void;
}) {
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
          checked={props.toggle}
          onChange={props.onToggle}
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
