import React from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddTestrunModal extends React.Component {
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
        <Button outline color="success" onClick={this.toggle}>Добавить тест запуск</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Добавление тестового запуска</ModalHeader>
          <ModalBody>
            Введите имя для добавления.
            <Input type="search"  placeholder="" />
            Укажите путь к тестам.
            <Input type="search"  placeholder="" /><Button color="info">Выбрать ...</Button>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Добавить</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Отмена</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddTestrunModal;