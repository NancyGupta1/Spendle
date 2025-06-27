import React, { createContext, useReducer } from 'react'

const initialState = { transactions: [] }
export const TransactionContext = createContext(initialState)

function TransactionReducer(state, action) {
  switch (action.type) {
    case 'ADD_ENTRY':
      return { transactions: [action.payload, ...state.transactions] }
    case 'REMOVE_ENTRY':
      return {
        transactions: state.transactions.filter(tx => tx.id !== action.payload)
      }
    default:
      return state
  }
}

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState)

  const removeEntry = id => dispatch({ type: 'REMOVE_ENTRY', payload: id })
  const addEntry = tx => dispatch({ type: 'ADD_ENTRY', payload: tx })

  return (
    <TransactionContext.Provider
      value={{ transactions: state.transactions, removeEntry, addEntry }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
