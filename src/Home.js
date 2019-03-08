import React, { Component } from 'react';
import './App.css';
import './home.css';
import Header from './header';
import Footer from './footer';

export default class Home extends Component{
    render(){
        return(
        <div className="text-judul">
            <div>
                <Header/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
        )
    }
    }