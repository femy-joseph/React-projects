import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPosts/RowPost';
import { Action, Originals,Comedy } from './urls/urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title = "Netflix Originals" url={Originals}/>
      <RowPost title="Action" isSmall url={Action} />
      <RowPost title="Comdey" isSmall url={Comedy} />
    </div>
  );
}

export default App;
