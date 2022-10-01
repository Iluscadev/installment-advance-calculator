import Form from "./components/Form";
import { Container, MainContainer } from "./components/MainContainer/styles";
import Results from "./components/Results";
import { ResultsProvider } from "./providers/results";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <ResultsProvider>
        <MainContainer>
          <Container>
            <Form />
            <Results />
          </Container>
        </MainContainer>
      </ResultsProvider>
    </>
  );
}

export default App;
