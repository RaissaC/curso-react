import Menu from "./Menu"
import Global from "./Global";
import { useState } from "react";


function Home() {

    const [nome, setNome] = useState(Global.nome)
    const [sobrenome, setSobrenome] = useState(Global.sobrenome)
    const [idade, setIdade] = useState(Global.idade)

    const gravarResumo = () => {
        Global.nome = nome
        Global.sobrenome = sobrenome
        Global.idade = idade

    }

    const verResumo = () => {
        alert("OK!")
    }
    return (
        <div>
            <h1>Home</h1>

            Nome:      <input type="text" size="50" value={nome} onChange={(e) => setNome(e.target.value)} /><br></br>
            Sobrenome: <input type="text" size="50" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} /><br></br>
            Idade:      <input type="text" size="50" value={idade} onChange={(e) => setIdade(e.target.value)} /><br></br>


            <button onClick={() => gravarResumo()}>Gravar Resumo</button>
            <button onClick={() => verResumo()}>Ver Resumo</button>
            <br></br>
            <br></br>
            <Menu />
        </div>
    )
}

export default Home