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

const Form = () => {
  const schema = yup.object().shape({
    amount: yup
      .number("Valor não permitido")
      .required("Campo obrigatório")
      .min(1, "Necessário número positivo"),
    installments: yup
      .number("Valor não permitido")
      .required("Campo obrigatório")
      .min(1, "Mínimo de 1 parcela")
      .max(12, "Máximo de 12 parcelas"),
    mdr: yup
      .number("Valor não permitido")
      .required("Campo obrigatório")
      .min(1, "Necessário número positivo"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = () => {
    console.log("oi");
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
