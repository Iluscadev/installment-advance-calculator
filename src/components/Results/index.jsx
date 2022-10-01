import { useContext, useEffect } from "react";
import { ResContext } from "../../providers/FetchData";
import {
  ResultsContainer,
  ResultsContent,
  ResultsText,
  ResultsTitle,
} from "./styles";

const Results = () => {
  const { resData } = useContext(ResContext);

  return (
    <ResultsContainer>
      <ResultsContent>
        <ResultsTitle>VOCÊ RECEBERÁ:</ResultsTitle>
        <ResultsText id="tomorrow">
          <>Amanhã:</> R$ {resData["1"]}
        </ResultsText>
        <ResultsText id="tomorrow">
          <>Em 15 dias:</> R$ {resData["15"]}
        </ResultsText>
        <ResultsText id="tomorrow">
          <>Em 30 dias:</> R$ {resData["30"]}
        </ResultsText>
        <ResultsText id="tomorrow">
          <>Em 90 dias:</> R$ {resData["90"]}
        </ResultsText>
      </ResultsContent>
    </ResultsContainer>
  );
};

export default Results;
