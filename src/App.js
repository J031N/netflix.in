
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/Row-Post/RowPost";
import {originals,action,horror,comedy,roamnce,docu,trending,actionm} from "./urls"
function App() {
  return (
    <div>

      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netfix Originals'/>
      <RowPost url={trending} title='Trending' isSmall={true}/>

      <RowPost url={action} title='Action' isSmall={true}/>
      <RowPost url={horror} title='HorrorMovies' isSmall={true}/>
      <RowPost url={comedy} title='ComedyMovies' isSmall={true}/>
      <RowPost url={roamnce} title='RomanceMovies' isSmall={true}/>
      <RowPost url={actionm} title='ActionMovies' isSmall={true}/>
      <RowPost url={docu} title='Documentaries' isSmall={true}/>


    </div>
    
  );
}

export default App;
