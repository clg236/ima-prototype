import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Navbar from "../components/nav";

const Wrapper = styled.section`
    background: papayawhip;
`;

const Layout = ({ pageTitle, children}) => {
    return(
        <Wrapper>
            <title>{pageTitle}</title>
            <Navbar />
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/program">Program</Link></li>
                <li><Link to="/people">People</Link></li>
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/events">Events</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </Wrapper>
    )
}

export default Layout