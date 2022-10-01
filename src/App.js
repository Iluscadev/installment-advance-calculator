import Form from "./components/Form";
import { Container } from "./components/MainContainer/styles";
import Results from "./components/Results";
import { ResultsProvider } from "./providers/results";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <ResultsProvider>
        <Container>
          <Form />
          <Results />
        </Container>
      </ResultsProvider>
    </>
  );
}

export default App;
