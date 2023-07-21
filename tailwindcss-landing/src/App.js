import { Header } from "./components/Header";
import { Wrapper } from "./components/wrapper";
import { MainPage } from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Header />
          <MainPage />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
