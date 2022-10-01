import Form from "./components/Form";
import { Container } from "./components/MainContainer/styles";
import Results from "./components/Results";
import { ResProvider } from "./providers/FetchData";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <ResProvider>
        <Container>
          <Form />
          <Results />
        </Container>
      </ResProvider>
    </>
  );
}

export default App;
