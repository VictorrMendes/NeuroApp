import ImageReference from "../ImageReference";
import "./SectionText.css";
import { useNavigate } from "react-router-dom";

const SectionText = () => {

    const navigate = useNavigate();


    return (
        <div className="neuro-container">
            <div className="header">
                <h1>Guia de neurodiversidade e neurodivergência</h1>
                <h2>COMPREENSÃO | ACEITAÇÃO | INCLUSÃO</h2>
            </div>
            
            <div className="content">
                <div className="text">
                    <p className="intro">Olá, seja bem-vindo(a)!</p>
                    <p className="description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Enim laboriosam, provident atque itaque eaque quisquam adipisci est totam unde quia.
                        Delectus enim quia suscipit labore eius corporis voluptates numquam voluptatibus?
                    </p>
                    <p className="call">Venha ver nosso artigo sobre neurodivergência</p>
                    <div className="divider"></div>
                    <button onClick={()=> navigate("/artigo")} className="button">Artigo</button>
                </div>
                
                <ImageReference referencia="/image/menina.jpg"/>
            </div>
        </div>
    )
}

export default SectionText;