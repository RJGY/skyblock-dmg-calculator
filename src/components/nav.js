import React from "react"

const Nav = ({activeArticle}) => {
    return (
        <div>
            <li>
                <ul>
                <Link
                    to={`/`}
                    getProps={props => setActive(props, 2)}
                > 
                    Home 
                </Link>
                </ul>
                <ul>
                    <Link
                        to={`/manual/`}
                        getProps={props => setActive(props, 2)}
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