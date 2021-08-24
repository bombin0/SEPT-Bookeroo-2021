import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="header-container">
                <a className="navbar-brand" href="/">
                    BOOKEROO
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
                
            </div>
        </nav>
        </div>
        )
    }
}
export default Header;