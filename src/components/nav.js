import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Nav = ({activeArticle}) => {
    return (
        <div>
            <li>
                <ul>
                <Link
                    to={`/`}
                > 
                    Home 
                </Link>
                </ul>
                <ul>
                    <Link
                        to={`/manual/`}
                    > 
                        Manual Calculator 
                    </Link>
                    
                </ul>
            </li>
        </div>
    )
}

Nav.propTypes = {
    activeArticle: PropTypes.string,
}

Nav.defaultProps = {
    activeArticle: null,
}

export default Nav