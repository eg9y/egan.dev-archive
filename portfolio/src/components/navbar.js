import { Link } from "gatsby"
import React, { Component } from 'react'
import '../styles/styles.scss'
import ScrollView from './scroll_view'

export default class NavBar extends Component {
    state = {
        activeMenu: false,
    };
    toggleMenu = () => {
        this.setState({
            activeMenu: !this.state.activeMenu,
        });
    };

    render() {
        const { location } = this.props;
        return (
            <nav className="navbar is-fixed-top is-spaced is-warning" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <h1 className="is-size-3">
                        <Link to="/" className="has-text-black">
                            Egan Bisma
                        </Link>
                    </h1>
                    <a
                        onClick={this.toggleMenu}
                        className={`navbar-burger burger  ${this.state.activeMenu ? 'is-active' : ''}`}
                        aria-label="menu" aria-expanded="false">
                        <span ></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div className={`navbar-menu navbar-end ${this.state.activeMenu ? 'is-active' : ''}`} >

                    <div className="navbar-item">
                        {location.pathname == "/" && <ScrollView />}
                        <p className="navbar-item has-text-weight-semibold">
                            <Link to={'/current_status'} className="has-text-grey-darker">Status</Link>
                        </p>
                        <p className="navbar-item has-text-weight-semibold">
                            <Link to={'/blogs'} className="has-text-grey-darker">Blog</Link>
                        </p>
                    </div>
                </div>
            </nav>
        )
    }
}
