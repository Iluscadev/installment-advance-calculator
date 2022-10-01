import {
  ButtonSubmit,
  Error,
  FormContainer,
  FormContent,
  Input,
  Label,
  Title,
} from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ResContext } from "../../providers/FetchData";
import api from "../../services/api";

const Form = () => {
  const schema = yup.object().shape({
    amount: yup
      .number()
      .typeError("Informe um número válido")
      .required("Informe um valor")
      .min(1000, "Apenas valores de 1000 até 9999999")
      .max(9999999, "Apenas valores de 1000 até 9999999"),
    installments: yup
      .number()
      .typeError("Informe um número válido")
      .required("Informe o número de parcelas")
      .min(1, "Mínimo de 1 parcela")
      .max(12, "Máximo de 12 parcelas"),
    mdr: yup
      .number()
      .typeError("Informe um número válido")
      .required("Informe o MDR")
      .min(0, "Necessário número positivo").max(100, "Máximo de 100%"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { resData, setResData } = useContext(ResContext);

  const fetchData = async (obj) => {
    api
      .post("", obj)
      .then((response) => setResData(response.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmit = async (data) => {
    fetchData(data);
  };

  return (
    <FormContainer>
      <FormContent onSubmit={handleSubmit(onSubmit)}>
        <Title>Simule sua antecipação*</Title>
        <Label>
          Informe o valor da venda
          <Input {...register("amount")}></Input>
          {<Error>{errors.amount?.message}</Error>}
        </Label>
        <Label>
          Em quantas parcelas*
          <Input {...register("installments")}></Input>
          {<Error>{errors.installments?.message}</Error>}
        </Label>
        <Label>
          Informe o percentual de MDR*
          <Input {...register("mdr")}></Input>
          {<Error>{errors.mdr?.message}</Error>}
        </Label>
        <ButtonSubmit>CALCULAR</ButtonSubmit>
      </FormContent>
    </FormContainer>
  );
};

export default Form;
