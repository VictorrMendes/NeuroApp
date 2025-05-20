import ImageReference from "../ImageReference"
import "./TextArtigo.css"

const TextArtigo = ()=>{
    return(
                    <section className="text-artigo">
                <div className="container-artigo">
                    <div className="full-width-text">
                        <h1 className="titulo-intro">Guia Neurociência!</h1>

                        <p className="description-artigo">
                            A neurociência é um campo em constante evolução, 
                            revelando segredos sobre como o cérebro humano se adapta, 
                            aprende e se regenera. Um dos conceitos mais intrigantes é a plasticidade neural – 
                            a capacidade do cérebro de reorganizar suas conexões em resposta a experiências, aprendizados e 
                            até mesmo lesões.
                        </p>

                        <p className="description-artigo">
                            Estudos recentes mostram que, ao contrário do que se acreditava no passado, 
                            o cérebro adulto não é um órgão estático. Neurônios podem formar novas sinapses, 
                            fortalecer ou enfraquecer conexões existentes e até mesmo gerar novos neurônios em certas regiões, 
                            como o hipocampo, área crucial para a memória.
                        </p>
                    </div>

                    <div className="half-width-content">
                        <div className="text-artigo">
                            <div className="texto-completo">
                                <p className="description-artigo">
                                    Mas como isso acontece? Tudo começa com a sinalização química e elétrica entre 
                                    células nervosas. Quando aprendemos algo novo, como tocar um instrumento ou falar 
                                    outro idioma, padrões específicos de ativação neuronal são reforçados, tornando a 
                                    comunicação mais eficiente. Esse fenômeno, conhecido como potenciação de longo prazo (LTP), 
                                    é a base fisiológica da memória.
                                </p>

                                <p className="description-artigo">
                                    Além disso, a neurociência tem explorado como fatores externos, como sono, 
                                    exercício e alimentação, influenciam a saúde cerebral. A privação de sono, 
                                    por exemplo, prejudica a consolidação de memórias, enquanto atividades físicas aumentam 
                                    a produção de BDNF (fator neurotrófico derivado do cérebro), uma proteína que promove 
                                    o crescimento neuronal.
                                </p>

                                <p className="description-artigo">
                                    No futuro, avanços nessa área podem revolucionar tratamentos para doenças neurodegenerativas, 
                                    como Alzheimer e Parkinson, além de melhorar técnicas de educação e reabilitação cognitiva. 
                                    O cérebro continua sendo uma das fronteiras mais desafiadoras e fascinantes da ciência.
                                </p>
                            </div>
                        </div>

                        <ImageReference referencia="/image/menina.jpg"/>
                    </div>
                </div>
            </section>
    )
}

export default TextArtigo