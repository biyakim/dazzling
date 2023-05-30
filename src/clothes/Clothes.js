import React, { useState } from 'react'
import main03 from '../img/main_03.png'
import main02 from '../img/main_02.png'
import Clothes2 from './Clothes.module.css';
import head from '../img/avatar/head.png';
import body from '../img/avatar/body.png'
import eyes01 from '../img/avatar/eyes/eyes_01.png';
import Draggable from "react-draggable"; 
import hair01 from '../img/avatar/hair/hair_01.png';
import eyebrow01 from '../img/avatar/eyebrow/eyebrow_01.png';
import lips01 from '../img/avatar/lips/lips_01.png';

const Clothes = () => {


    return (
        <div>
            <div className="img">
                <img className={Clothes2.main02} src={main02}/>
            </div>
            <div className="body">
            <img className={Clothes2.body} src={body}/>
            </div>
            <div className="head">
                <img className={Clothes2.head} src={head}/>
            </div>
            <div className='clothes' style={{backgroundColor: 'white', width: '970px', height: '600px',position:'absolute', marginLeft : '500px', marginTop : '60px', borderRadius : '50px'}}>
                <Draggable>
                <img className={Clothes2.eyes01} src={eyes01}/>
                </Draggable>
                <Draggable>
                <img className={Clothes2.hair01} src={hair01}/>
                </Draggable>
                <Draggable>
                <img className={Clothes2.eyebrow01} src={eyebrow01}/>
                </Draggable>
                <Draggable>
                <img className={Clothes2.lips01} src={lips01}/>
                </Draggable>
                
                
            </div>
            
        </div>
    )
}
export default Clothes;