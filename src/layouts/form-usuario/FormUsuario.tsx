import Input from "../../components/input/Input";
import TitleInputForm from "../../components/title-input-form/TitleInputForm";

const FormUsuario = () => (
    <>
        <h2>Form Componentizado</h2>

        <TitleInputForm>
            Informe seu nome
        </TitleInputForm>
        <Input />

        <TitleInputForm>
            Informe seu endereço
        </TitleInputForm>
        <Input />
    </>
);

export default FormUsuario;