// eslint-disable-next-line react/prop-types
function Titulo({cor, nome, paragrafo}) {
    return (
        <div>
            <h1 style={{ color: cor }}>Olá eu sou {nome ? nome : "Fulano"}</h1>
            {paragrafo ?
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa a labore eos, et deleniti, adipisci asperiores facere cum quaerat sit numquam voluptatem similique deserunt assumenda ipsa, reprehenderit autem nulla?</p>
                :
                <p></p>
            }
        </div>
    )
}

export default Titulo