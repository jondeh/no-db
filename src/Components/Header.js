import React from 'react'

function Header(props){
    return(
        <div className={props.headerStyle}>
            <div className="logo">
                <div className="logo-ryan"></div>
            </div>
            <div className="header-title">
                <h1>ChordFinder</h1>
            </div>
            <div className="header-right">
                
            </div>
        </div>
    )
}

export default Header;