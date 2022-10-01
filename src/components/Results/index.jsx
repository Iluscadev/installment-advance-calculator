import { useContext } from "react";
import { ResultContext } from "../../providers/results";
import {
  ResultsContainer,
  ResultsContent,
  ResultsText,
  ResultsTitle,
} from "./styles";

const Results = () => {
  const { results } = useContext(ResultContext);

  return (
    <ResultsContainer>
      <ResultsContent>
        <ResultsTitle>VOCÊ RECEBERA:</ResultsTitle>
        <ResultsText id="tomorrow">
          Amanhã:{" "}
          {results["1"].toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ResultsText>
        <ResultsText id="tomorrow">
          Em 15 dias:{" "}
          {results["15"].toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ResultsText>
        <ResultsText id="tomorrow">
          Em 30 dias:{" "}
          {results["30"].toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ResultsText>
        <ResultsText id="tomorrow">
          Em 90 dias:{" "}
          {results["90"].toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ResultsText>
      </ResultsContent>
    </ResultsContainer>
  );
};

export default Results;
