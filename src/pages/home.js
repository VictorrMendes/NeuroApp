import NavBar from '../components/NavBar'
import SectionText from '../components/SectionText'
import './home.css'


const Home = () => {
    return (
        <section className='complete'>
            <div className='container-home'>
                <div className='text'>
                    <NavBar
                        link1={{ path: "artigo", text: "Artigo" }}
                        link2={{ path: "", text: "Contato" }} />
                    <SectionText />
                </div>
            </div>
        </section >
    )
}

export default Home