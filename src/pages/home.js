import NavBar from '../components/NavBar'
import SectionCard from '../components/SectionCard'
import './home.css'


const Home = () => {
    return (
        <section className='container-home'>
            <div className='navBar'>
                    <NavBar
                        link1={{ path: "artigo", text: "Artigo" }}
                        link2={{ path: "", text: "Contato" }} />
            </div>

            <div className='section-card'>
                <SectionCard />
            </div>


        </section >
    )
}

export default Home