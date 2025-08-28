import "../src/styles/App.css";
import Header from "./components/Header.tsx";
import FilterBar from "./components/FilterBar.tsx";

function App() {
  return (
    <>
      <Header text="Campus Club Dashboard" />
      <FilterBar
        toggleText="Show only active members"
      />
    </>
  );
}

export default App;
