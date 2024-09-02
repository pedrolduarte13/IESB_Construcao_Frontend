import MeuComponente from "./MeuComponente";
import NumeroMaior from "./NumeroMaior";   
import NumeroAleatorio from "./NumeroAleatorio";
import Cabecalho from "./Cabecalho";
import Familia from "./familia";
import Filho from "./Filho";
import ImagemAleatoria from "./ImagemAleatoria";

export default function Fundamentos() {
    


    return (
        <><>
            {/* Comentários no JSX */}

            <Cabecalho titulo="Fundamentos" descricao="Pagina de fundamentos de react/next" />
            <hr />

            <MeuComponente />
            <hr />

            <NumeroMaior numA={2} numB={10} />
            <NumeroMaior numA={100} numB={8} />
            <NumeroMaior numA={20} numB={32} />
            <NumeroMaior numA={2} numB={11} />
            <NumeroMaior numA={1140} numB={10} />
            <NumeroMaior numA={222} numB={666} />

            <hr />

            <NumeroAleatorio />
            <NumeroAleatorio />
            <NumeroAleatorio />
            <NumeroAleatorio />

            <Familia nomeFamilia="Duarte">
                <filho Filho Nome="Pedro" />
                <filho Filho Nome="Tiago" />
                <filho Filho Nome="João" />
                <filho Filho Nome="Daniel" />
            </Familia><Familia nomeFamilia="Souza">

            </Familia>
            
            <ImagemAleatoria/>
            </>  

</>

    )
}
