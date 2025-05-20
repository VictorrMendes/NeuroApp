import NavBar from "../components/NavBar";
import TextArtigo from "../components/TextArtigo";
import "./artigo.css";

const Artigo = () => {
    return (
        <div className="artigoGeral">
            <NavBar
                link1={{ path: "", text: "Início" }}
                link2={{ path: "/contatos", text: "Contato" }}
            />

            <TextArtigo />

            <section>
                <div className="section2">
                    <div className="bolls">
                        <div className="imagem1"><img src="/image/menina.jpg" alt="imagem"></img></div>
                        <div className="imagem2"><img src="/image/menina.jpg" alt="imagem"></img></div>
                        <div className="imagem3"><img src="/image/menina.jpg" alt="imagem"></img></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Artigo;
