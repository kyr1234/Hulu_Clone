import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Subnavbar from './Components/navbar/navbar.js';
import Results from './Components/Results/Results.js';

function App() {

const [selectedoption,setselectedoption]=useState();





  return (
    <div className="App">


<Header/>
<Subnavbar setselectedoption={setselectedoption}/>
<Results selectedoption={selectedoption}/>

    </div>
  );
}

export default App;
