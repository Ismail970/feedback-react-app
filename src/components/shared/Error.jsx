function Error () {
    const styles = {
        color: "red",
        textAlign: 'center',
    }

    return (
        <>
            <h3 style={{
                ...styles,
                marginTop: "1em"
            }}>Sorry, our fault. Something went wrong, please reload the page.</h3>
            <p style={{
                ...styles,
                fontSize: ".8em",
            }}>If this keeps happening then please come back later, probably there is a huge problem on our side.</p>
        </>
    )
}

export default Error