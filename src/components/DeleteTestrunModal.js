import React from 'react';
import { Button, Alert , Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DeleteTestrunModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

      return (
      <div>
        <Button outline color="danger" id="deleteTestrun" onClick={this.toggle}>Удалить группу</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Удалить группу</ModalHeader>
          <ModalBody>
            <Alert color="danger">
               Удалив тестовую группу, все тестовые запуски также будут удалены! Вы уверены, что хотите удалить группу?
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Удалить</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Отмена</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteTestrunModal;