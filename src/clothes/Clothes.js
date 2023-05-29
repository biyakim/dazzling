import React from 'react'
import main03 from '../img/main_03.png'
import main02 from '../img/main_02.png'
import Clothes2 from './Clothes.module.css';
import head from '../img/avatar/head.png';
import body from '../img/avatar/body.png'

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
            
        </div>
    )
}
export default Clothes;