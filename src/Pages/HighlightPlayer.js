import ReactPlayer from "react-player";
import "./Styles/HighlightPlayer.css"
export default function HighlightPlayer(){
return(
    <div className="HighlightPlayer">
        <ReactPlayer url="https://youtu.be/iwoARovwD7w?si=tHDvzOkyfg9XuUue" controls={true}
            width="80%"
            height="80%"
        />
    </div>
)
}