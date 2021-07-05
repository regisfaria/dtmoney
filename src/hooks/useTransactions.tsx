import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: string;
  title: string;
  value: number;
  category: string;
  type: string;
  createdAt: string;
};

type CreateTransactionData = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode;
};

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: CreateTransactionData) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(data: CreateTransactionData) {
    const response = await api.post('/transactions', { ...data, createdAt: new Date() });

    const { transaction }  = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}