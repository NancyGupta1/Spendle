import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

const AccountSummary = () => {
  const { transactions } = useContext(TransactionContext)
  const amounts = transactions.map(tx => tx.amount)
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2)
  const income = amounts.filter(a => a > 0).reduce((acc, val) => acc + val, 0).toFixed(2)
  const expense = (
    amounts.filter(a => a < 0).reduce((acc, val) => acc + val, 0) * -1
  ).toFixed(2)

  return (
    <div className="balance-container">
      <h3>Current Balance</h3>
      <h1>₹{total}</h1>
      <div className="inc-exp-container">
        <div><h4>Income</h4><p className="money plus">₹{income}</p></div>
        <div><h4>Expenses</h4><p className="money minus">₹{expense}</p></div>
      </div>
    </div>
  )
}

export default AccountSummary
