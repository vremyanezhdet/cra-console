import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import RoadMap from "./components/Roadmap/RoadMap";
import {T_Data} from "./data/data";

function App(props: { data: T_Data }) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar dialogItems={props.data.dialogsInfo.dialogItems}/>
            <div className='app-wrapper-content'>
                <RoadMap data={props.data}/>
            </div>
        </div>
    );
}

export default App;
