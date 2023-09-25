import Global from "./Global";
function Menu() {
    return (
        <div>
            <p>{"Nome: " + Global.nome}</p>
            <p>{"Sobrenome: " + Global.sobrenome}</p>
            <p>{"Idade: " + Global.idade}</p>
            
            <a href="/">Home</a><br />
            <a href="/sobre">Sobre</a><br />
        </div>
    )
}

export default Menu;