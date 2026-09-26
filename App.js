import React, { useState } from 'react';
import { Splash } from './src/screens/Splash';
import { Login } from './src/screens/Login';
import { Home } from './src/screens/Home';
import { Agendar } from './src/screens/Agendar';
import { DetalhesServidor } from './src/screens/DetalhesServidor';

export default function App() {
  const [tela, setTela] = useState('splash');

  if (tela === 'splash') {
    return <Splash onPress={() => setTela('login')} />;
  }

  if (tela === 'login') {
    return <Login onPress={() => setTela('home')} />;
  }

  if (tela === 'agendar') {
    return <Agendar onBack={() => setTela('home')} />;
  }

  if (tela === 'detalhes') {
    return <DetalhesServidor onBack={() => setTela('home')} />;
  }

  return (
    <Home 
      onLogout={() => setTela('splash')} 
      onAdd={() => setTela('agendar')} 
      onSelectMatch={() => setTela('detalhes')}
    />
  );
}