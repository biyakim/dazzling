import React from 'react';
import './Main.css';
import main_03 from '../img/main_03.png';
import main_01 from '../img/main_01.png';
import main_02 from '../img/main_02.png';
import main_05 from '../img/main_05.png';
import main_04 from '../img/main_04.png';
import {Link} from 'react-router-dom'



const Main = () => {

    return (
        <div>
        <div className='img'>
            <img className="main3" src={main_03}/>
            <img className="main1" src={main_01}/>
            <img className='main2' src={main_02}/>
            <img className='main5' src={main_05}/>
            <Link to='/Clothes'><img className='main4' src={main_04}/></Link>
        </div>
    </div>
    )
    
}

export default Main;