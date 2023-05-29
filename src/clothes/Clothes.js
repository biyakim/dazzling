import React from 'react'
import main03 from '../img/main_03.png'
import main02 from '../img/main_02.png'
import Clothes2 from './Clothes.module.css';
import head from '../img/avatar/head.png';
import body from '../img/avatar/body.png'
import eyes01 from '../img/avatar/eyes/eyes_01.png';
import Draggable from "react-draggable"; 

const Clothes = () => {
    return (
        <div>
            <div className="img">
                <img className={Clothes2.main03} src={main03}/>
                <img className={Clothes2.main02} src={main02}/>
            </div>
            <div className="body">
            <img className={Clothes2.body} src={body}/>
            </div>
            <div className="head">
                <img className={Clothes2.head} src={head}/>
            </div>
            <div className='clothes' style={{backgroundColor: 'lightgray', width: '400px', height: '600px',position:'absolute', marginLeft : '1080px', marginTop : '60px', borderRadius : '50px'}}>
                <div className='box' style={{backgroundColor : 'white', width : '150px', height : '150px', position : 'absolute', borderRadius : '20px', marginTop : '55px', marginLeft : '50px'}}></div>
                <Draggable>
                <img className={Clothes2.eyes01} src={eyes01} draggable="true"/>
                </Draggable>
            </div>
            
        </div>
    )
}
export default Clothes;