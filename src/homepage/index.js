import React, {Component} from 'react';
import {Card, CardTitle} from 'react-materialize';
import './index.css';

class Index extends Component {
    render() {
        return (
            <header>
                <div className = "header">
                    <div className = "title"> Porello! </div>
                </div>
                <div className = "main">
                    <MainBox/>
                </div>
            </header>
            
        );
    
}
}
class MainBox extends Component {
    render() {
        return (
            <Card className = "small"
                header = {<CardTitle image = 'https://cdn1.foap.com/images/2433cc22-5626-4f83-894e-2936c229ddbc/w640.jpg?1444022029'>Welcome To Porello</CardTitle>}>
                Welcome To Porello, interactive to-do manager for organizing your daily life.
            </Card>
        );
    }
}
export default Index;
