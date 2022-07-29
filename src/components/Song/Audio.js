import "./SCSS/Audio.scss"

const Audio = () => {
    return (
        <audio controls className="audio-style">
            <source src="https://www.computerhope.com/jargon/m/example.mp3" type="audio/ogg" />
            Your browser does not support the audio element.
        </audio>
    )
}

export default Audio
