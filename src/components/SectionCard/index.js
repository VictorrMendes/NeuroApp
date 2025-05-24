import "./SectionCard.css";

const SectionCard = () => {
    return (
        <section className="section-content">
            <div className="title">
                <h1>Neurociência Aplicada ao Trabalho em Equipe</h1>
                <h2>DESEMPENHO | COLABORAÇÃO | BEM-ESTAR ORGANIZACIONAL</h2>
            </div>


            <div className="content">
                <p className="description-artigo">
                    A neurociência, um campo de estudo multidisciplinar dedicado ao sistema nervoso e seus complexos processos,
                    tem revelado insights cada vez mais valiosos para a compreensão e otimização do comportamento
                    humano em diversos contextos, incluindo o ambiente organizacional. Nas últimas décadas, avanços
                    significativos em pesquisas neurocientíficas têm elucidado mecanismos fundamentais subjacentes
                    à aprendizagem, tomada de decisão, regulação emocional e interação social –
                    todos elementos cruciais para o desenvolvimento de equipes de trabalho eficazes e produtivas.
                </p>

                <p className="description-artigo">
                    Este artigo apresenta os resultados de um projeto aplicado na empresa Palácio dos Leilões, uma organização de transportes
                    com 300 colaboradores localizada em Juatuba/MG.
                    O estudo teve como objetivo investigar como a aplicação de princípios neurocientíficos pode impactar positivamente:
                </p>
                <div className="lista">
                    <ul >
                        <li>A melhoria da comunicação e colaboração entre equipes;</li>
                        <li>O aumento da eficiência e produtividade organizacional;</li>
                        <li>O desenvolvimento de lideranças mais eficazes e empáticas;</li>
                        <li>A gestão mais estratégica e harmoniosa de conflitos interpessoais.</li>
                    </ul>

                    <img src="/Assets/corporativo.png" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default SectionCard;