import requests from "./Requests"
import Row from "./Row"
import "./Styles/ComingSoon.css"

export default function ComingSoonScreen(){
    return(
        <div className="body">
        <section>
            <Row title="Coming Soon" fetchUrl={requests.fetchUpComing} ComingSoon={true}/>
        </section>
        </div>
    )
}