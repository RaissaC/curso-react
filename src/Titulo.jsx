import Netflix from "/src/img/netflix.jpg"

function Titulo() {

    let nome = "Raíssa Cesar";

    return (
        <div>
            <h1>Olá eu sou a {nome}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa a labore eos, et deleniti, adipisci asperiores facere cum quaerat sit numquam voluptatem similique deserunt assumenda ipsa, reprehenderit autem nulla?</p>
            <img width={500} src={Netflix} />
        </div>
    )
}

export default Titulo