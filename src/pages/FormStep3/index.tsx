import { useEffect, ChangeEvent } from "react";
import { useHistory, Link } from "react-router-dom";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import * as C from "./styles";

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, [dispatch, state.name, history]);

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      alert("Cadastro finalizado com sucesso!");
    } else {
      alert("Preencha os dados!");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };
  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos te achar.</p>
        <hr />

        <label>
          Qual seu e-mail?
          <input type="url" value={state.email} onChange={handleEmailChange} />
        </label>

        <label>
          Qual seu GitHub?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar cadastro!</button>
      </C.Container>
    </Theme>
  );
};
