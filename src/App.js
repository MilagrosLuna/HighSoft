import "./App.css";
import React from 'react';
import Container from "./components/Container";
import BalanceProvider from "./components/main-modules/BalanceProvider";
function App() {
  return (
    <BalanceProvider>
      <Container>
      
      </Container>
    </BalanceProvider>
  );
}

export default App;
