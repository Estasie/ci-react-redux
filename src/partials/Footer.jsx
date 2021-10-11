import React from 'react'
import { Link }  from "react-router-dom";

export default function Footer(props) {
    const {links, copyright} = props;
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-nav">
                    {links.map(link => {
                        return(
                            <Link to={link.href} className="secondary-text">{link.value}</Link>
                        )
                    })}
                </div>
                <p className="secondary-text">&copy; {copyright}</p>
            </div>
        </footer>
    )
}
