import spinner from "../../assets/loading.gif"

function Spinner () {
    return (
        <img
            src={spinner}
            alt="Loading..."
            style={{
                margin: "auto",
                display: "block"
            }}
        />
    )
}

export default Spinner