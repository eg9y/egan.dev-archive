import React from 'react'

import NavBar from '../components/navbar'
import Contstraint from '../components/constraint'
import Projects from '../components/projects'
import About from '../components/about'
import Home from '../components/home'
import Layout from '../components/layout'

import axios from 'axios'

const client_id = '218f882d162e4a60932ae5224c702076';
const client_secret = '9e7b9e638b1c41f9ac7ce4475ab70786';
function getSpotify() {
    axios.get(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=https%3A%2F%2Flocalhost:80802Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}


export default function index(props) {
    getSpotify()
    return (
        <Layout location={props.location}>
            <Contstraint>
                <Home />
            </Contstraint>
            <Contstraint>
                <Projects />
            </Contstraint>
            <Contstraint>
                <About />
            </Contstraint>
        </Layout>
    )
}
