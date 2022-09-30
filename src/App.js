import Form from "./components/Form";
import { Container } from "./components/MainContainer/styles";
import Results from "./components/Results";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Form/>
        <Results/>
      </Container>
    </>
  );
}

export default App;
