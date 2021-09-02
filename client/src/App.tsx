import React from 'react';
import Window from './components/Window';
import test from './components/__test__/testImg.png';

function App() {
  return (
    <div>
      <Window image={test}>Here is some text</Window>
      <Window image={test}>Here is some text</Window>
      <Window image={test}>Here is some text</Window>
    </div>
  );
}

export default App;
