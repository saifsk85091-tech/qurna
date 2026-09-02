import React from 'react';
import { DeenProvider } from './context/DeenContext';
import { DeenApp } from './components/DeenApp';

export default function App() {
  return (
    <DeenProvider>
      <DeenApp />
    </DeenProvider>
  );
}

