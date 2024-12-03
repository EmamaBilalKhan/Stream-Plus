import requests from "./Requests"
import Row from "./Row"
import "./Styles/Home.css"

export default function HomeScreen(){
    return(
        <div className="body">
        <section className="HighlightMovie">
            <nav>
                <a href="#documentaries">Documentaries</a>
                <a href="#comedies">Comedies</a>
                <a href="#horror">Horror</a>
                <a href="#action">Action</a>
            </nav>
            <div className="HighlightMovieDetails">
                <h2>Insiders</h2>
                <p>2021&nbsp;&nbsp;|&nbsp;&nbsp;comedy horror&nbsp;&nbsp;|&nbsp;&nbsp;1 season</p>
                <button onClick={()=>{window.location.href = `/HighlightPlayer`}}>Watch Now</button>
            </div>
        </section>

        <section id="action">
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} ComingSoon={false}/>
        </section>
        
        <section id="comedies">
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} ComingSoon={false} />
        </section>

        <section id="horror">
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} ComingSoon={false} />
        </section>

        <section id="documentaries">
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} ComingSoon={false} />
        </section>

        </div>
    )
}
