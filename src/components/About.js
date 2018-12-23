import React, { Component } from 'react';
import MainNavbar from './Navbar';
import { Jumbotron, Button } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <div>
                <MainNavbar />
                <div className="container">
                    <Jumbotron>
                        <h1 className="display-3">Test reporter</h1>
                        <p className="lead">Программное средство, позволяющее генерировать информативные отчеты по результам выполнения ваших тестов.</p>
                        <hr className="my-2" />
                        <p>Удобный и интуитивный интерфейс поможет создать вам первую тестовую группу и получить нужную информацию в считанные секунды.</p>
                        <p className="lead">
                        <a class="btn btn-primary" href="/" role="button">Начать работу с Test reporter.</a>
                        </p>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}

export default About;