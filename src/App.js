import "./App.css";
import Header from "./components/Layout/Header/Header";
import Left from "./components/Layout/Left/Left";
import Content from "./components/Layout/Content/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Left />
      <Content />
    </div>
  );
}

export default App;
