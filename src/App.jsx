import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AppTitle from './components/AppTitle';
import AccountSummary from './components/AccountSummary';
import HistoryList from './components/HistoryList';
import AddExpenseForm from './components/AddExpenseForm';
import MonthlyChart from './components/MonthlyChart';
import AppNavbar from './components/AppNavbar';

const App = () => (
  <>
    <AppNavbar />
    <Container fluid className="mt-3 px-4">
      <Row className="mb-3">
        <Col lg={4}><AccountSummary /></Col>
        <Col lg={8}><MonthlyChart /></Col>
      </Row>
      <Row>
        <Col md={6}><HistoryList /></Col>
        <Col md={6}><AddExpenseForm /></Col>
      </Row>
    </Container>

  </>
);

export default App;
