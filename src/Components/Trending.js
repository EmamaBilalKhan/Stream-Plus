import requests from "./Requests"
import Row from "./Row"
import "./Styles/Trending.css"

export default function TrendingScreen(){
    return(
        <div className="body">
        <h1>Trending Movies</h1>
        <section>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} ComingSoon={false}/>
        </section>
        <section>
            <Row title="Popular" fetchUrl={requests.fetchPopular} ComingSoon={false}/>
        </section>
        </div>
    )
}