import NavBar from "../components/NavBar";

import "./artigo.css";

const Artigo = () => {
    return (
        <div className="artigoGeral">
            <NavBar
                link1={{ path: "", text: "Início" }}
                link2={{ path: "/contatos", text: "Contato" }}
            />
        </div>
    );
};

export default Artigo;
