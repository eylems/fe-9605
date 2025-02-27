import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Card } from 'react-bootstrap';
import {useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';


function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const[todoToDelete, setTodoToDelete] = useState(null);

  const handleClose = () => setShowModal(false);
  

  const addTodo= () => {
    event.preventDefault();
    setTodos([...todos, todoInput]);
    console.log(todos);
    setTodoInput ("");
  };

  const Wrapper = styled.div`
    cursor: pointer;
    text-align: center;
    `;

    const deleteTodo = () => {
      setTodos((todos) => todos.filter((todo) => todo !== todoToDelete)
        
      );
      setShowModal(false);
      setTodoToDelete(null);
    };

    const confirmDelete = (todo) => {
      setTodoToDelete(todo)
      setShowModal(true);
    };
  return (
    <>
    <Container className='mt-5'>
    <Card className="p-4 shadow-lg">
    <Form onSubmit={() => {}}>
        <Form.Group className='text-center m-4'>
          <h2 className='text-center mb-4'>Hedef</h2>
          <div className='d-flex justify-content-center'>
          <Form.Control
            type="text"
            placeholder="Bir görev ekle"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            className='w-50 mx-4'
          />
            <Button type="submit" onClick={addTodo}>
            Ekle
            </Button>
          </div>
      </Form.Group>
      <div className='d-flex justify-content-center text-center'>
        <Wrapper>
      {todos.map((todo, index) => (
          <div key={index} onClick={() => confirmDelete(todo)}>{todo}</div>
        ))}
        </Wrapper>
      </div>
    </Form>
    </Card>
    </Container>

      
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Silme İşlemi</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bu görevi silmek istediğinize emin misiniz?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Vazgeç
          </Button>
          <Button variant="danger" onClick={deleteTodo}>
            Evet
          </Button>
        </Modal.Footer>
      </Modal>

    </>
    
  );
}

export default App;
