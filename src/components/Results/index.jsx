import {
  ResultsContainer,
  ResultsContent,
  ResultsText,
  ResultsTitle,
} from "./styles";

const Results = () => {
  const value = 0;

  return (
    <ResultsContainer>
      <ResultsContent>
        <ResultsTitle>VOCÊ RECEBERÁ:</ResultsTitle>
        <ResultsText id="tomorrow">
          <>Amanhã:</> R$ {value}
        </ResultsText>
        <ResultsText id="tomorrow">
          <>Em 15 dias:</> R$ {value}
        </ResultsText>
        <ResultsText id="tomorrow">
          <>Em 30 dias:</> R$ {value}
        </ResultsText>
        <ResultsText id="tomorrow">
          <>Em 90 dias:</> R$ {value}
        </ResultsText>
      </ResultsContent>
    </ResultsContainer>
  );
};

export default Results;
