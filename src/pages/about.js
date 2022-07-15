import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <main>
            <title>About Me</title>
            <h1>About me!</h1>
            <Link to="/">Home</Link>
            <p>Hello there! this is my about page!</p>
        </main>
    )
}

export default AboutPage