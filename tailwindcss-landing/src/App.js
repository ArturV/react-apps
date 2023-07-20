import { Header } from "./components/Header";
import { Wrapper } from "./components/wrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Header />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
