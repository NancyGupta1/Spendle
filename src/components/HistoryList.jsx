import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Card } from 'react-bootstrap';

const HistoryList = () => {
  const { transactions, removeEntry } = useContext(TransactionContext);

  return (
    <Card className="shadow-sm mt-4">
      <Card.Body>
        <h3 className="text-center mb-4">Transaction History</h3>
        <ul className="list-group">
          {transactions.map(tx => (
            <li
              key={tx.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <span className="badge bg-secondary me-2">{tx.tag}</span>
                <strong>{tx.text}</strong>
                <br />
                <small className="text-muted">{tx.date}</small>
              </div>
              <div className={tx.amount < 0 ? 'text-danger' : 'text-success'}>
                ₹{Math.abs(tx.amount)}
                <button
                  className="btn btn-sm btn-outline-danger ms-2"
                  onClick={() => removeEntry(tx.id)}
                >
                  x
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default HistoryList;
