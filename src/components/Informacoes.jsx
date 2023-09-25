import Menu from "./Menu";
import Global from "./Global";


function Informacoes() {
    return (
        <div>
            <h1>Informações </h1>

            <p>{"Nome: " + Global.nome}</p>
            <p>{"Sobrenome: " + Global.sobrenome}</p>
            <p>{"Idade: " + Global.idade}</p>
            < Menu />
        </div>
    )
}


export default Informacoes;