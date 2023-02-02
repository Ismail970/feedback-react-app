import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage () {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>First react project</p>

                <Link to="/">Back home</Link>
            </div>
        </Card>
    )
}

export default AboutPage