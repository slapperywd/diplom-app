import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div class="row">
                        <div class="col-6 offset-md-3">
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input valid placeholder="e.g ivanov@gmail.com" />
                                    <FormFeedback valid>Введеный email валидный</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Пароль</Label>
                                    <Input invalid type="password" />
                                    <FormFeedback>Неверный пароль!</FormFeedback>
                                </FormGroup>
                                <a class="btn btn-primary" href="/" role="button">Вход</a>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;