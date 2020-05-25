import React from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import DemonymApp from './demonymapp/demonymApp';

function App() {
  return (
    <main className='App'>
      <HelloWorld></HelloWorld>
      <Bomb></Bomb>
      <RouletteGun bulletinchamber={8}></RouletteGun>
      <DemonymApp />
    </main>
  );
}

export default App;