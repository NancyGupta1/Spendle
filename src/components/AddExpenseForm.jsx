import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Card, Form, Button } from 'react-bootstrap';

const AddExpenseForm = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [tag, setTag] = useState('General');

  const { addEntry } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount || !date) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
      date,
      tag,
    };

    addEntry(newTransaction);

    // Reset form
    setText('');
    setAmount('');
    setDate('');
    setTag('General');
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title className="mb-3">Add Transaction</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter description"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Amount (use negative for expenses)</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. -500"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tag</Form.Label>
            <Form.Select value={tag} onChange={(e) => setTag(e.target.value)}>
              <option value="General">General</option>
              <option value="Groceries">Groceries</option>
              <option value="Travel">Travel</option>
              <option value="Bills">Bills</option>
              <option value="Entertainment">Entertainment</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" variant="success" className="w-100">
            Add Entry
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddExpenseForm;
