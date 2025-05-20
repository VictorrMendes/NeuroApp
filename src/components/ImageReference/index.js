import "./ImageReference.css"

const ImageReference = (props) => {
    return (
        <div className="image">
            <img src={props.referencia} alt={props.referencia} />
        </div>
    )
}

export default ImageReference