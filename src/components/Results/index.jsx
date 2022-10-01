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
        <ResultsTitle>VOCÊ RECEBERA:</ResultsTitle>
        <ResultsText id="tomorrow">
          Amanhã:{" "}
          {resData["1"].toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ResultsText>
        <ResultsText id="tomorrow">
          Em 15 dias:{" "}
          {resData["15"].toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ResultsText>
        <ResultsText id="tomorrow">
          Em 30 dias:{" "}
          {resData["30"].toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ResultsText>
        <ResultsText id="tomorrow">
          Em 90 dias:{" "}
          {resData["90"].toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ResultsText>
      </ResultsContent>
    </ResultsContainer>
  );
};

export default Results;
