import React, { useState } from 'react';
import main02 from '../img/main_02.png';
import Clothes2 from './Clothes.module.css';
import head from '../img/avatar/head.png';
import body from '../img/avatar/body.png';
import Clothes01 from '../img/clothes_01.png';
//eyes
import eyes01 from '../img/avatar/eyes/eyes_01.png';
import eyes02 from '../img/avatar/eyes/eyes_02.png';
import eyes03 from '../img/avatar/eyes/eyes_03.png';
import eyes04 from '../img/avatar/eyes/eyes_04.png';
import eyes05 from '../img/avatar/eyes/eyes_05.png';
import eyes06 from '../img/avatar/eyes/eyes_06.png';
import eyes07 from '../img/avatar/eyes/eyes_07.png';
//hair
import hair01 from '../img/avatar/hair/hair_01.png';
import hair02 from '../img/avatar/hair/hair_02.png';
import hair03 from '../img/avatar/hair/hair_03.png';
//eyebrow
import eyebrow01 from '../img/avatar/eyebrow/eyebrow_01.png';
import eyebrow02 from '../img/avatar/eyebrow/eyebrow_02.png';
import eyebrow03 from '../img/avatar/eyebrow/eyebrow_03.png';
import eyebrow04 from '../img/avatar/eyebrow/eyebrow_04.png';
//lips
import lips01 from '../img/avatar/lips/lips_01.png';
import lips02 from '../img/avatar/lips/lips_02.png';
import lips03 from '../img/avatar/lips/lips_03.png';
import lips04 from '../img/avatar/lips/lips_04.png';
import lips05 from '../img/avatar/lips/lips_05.png';
import lips06 from '../img/avatar/lips/lips_06.png';
//top
import top02 from '../img/avatar/clothes/top/top_02.png';
import top03 from '../img/avatar/clothes/top/top_03.png';
//bottom
import bottom01 from '../img/avatar/clothes/bottom/bottom_01.png';
//acc
import acc01 from '../img/avatar/accessories/acc_01.png';
import acc02 from '../img/avatar/accessories/acc_02.png';
import acc03 from '../img/avatar/accessories/acc_03.png';
import acc04 from '../img/avatar/accessories/acc_04.png';

const Clothes = () => {
  const [showElements, setShowElements] = useState(false);
  const [selectedeyes, setSelectedeyes] = useState(null);
  const [selectedhair, setSelectedhair] = useState(null);
  const [selectedeyebrow, setSelectedeyebrow] = useState(null);
  const [selectedlips, setSelectedlips] = useState(null);
  const [selectedacc, setSelectedacc] = useState(null);
  const [selectedacc2, setSelectedacc2] = useState(null);
  const [selectedacc3, setSelectedacc3] = useState(null);
  const [selectedacc4, setSelectedacc4] = useState(null);
  const [selectedtop, setSelectedtop] = useState(null);
  const [selectedbottom, setSelectedbottom] = useState(null);

  //이미지 누르면 이미지 바뀌게 하기
  const handleeyesClick = (clothing) => {setSelectedeyes(clothing); setShowElements(false)};
  const handlehairClick = (clothing) => {setSelectedhair(clothing); setShowElements(false)};
  const handleeyebrowClick = (clothing) => {setSelectedeyebrow(clothing); setShowElements(false)};
  const handlelipsClick = (clothing) => {setSelectedlips(clothing); setShowElements(false)};
  const handletopClick = (clothing) => {setSelectedtop(clothing);setShowElements(true);};
  const handlebottomClick = (clothing) => {setSelectedbottom(clothing);setShowElements(true);};
  const handleaccClick = (clothing) => {setSelectedacc((prevSelectedacc) =>
    prevSelectedacc === clothing ? null : clothing); setShowElements(true);};
  const handleacc2Click = (clothing) => {setSelectedacc2((prevSelectedacc2) =>
    prevSelectedacc2 === clothing ? null : clothing); setShowElements(true);};

  const handleacc3Click = (clothing) => {setSelectedacc3((prevSelectedacc3) =>
    prevSelectedacc3 === clothing ? null : clothing); setShowElements(true);};

  const handleacc4Click = (clothing) => {setSelectedacc4((prevSelectedacc4) =>
      prevSelectedacc4 === clothing ? null : clothing); setShowElements(true);};
  const handleClosetButtonClick = () => {
        setShowElements(true);
  };
    
  const handleClosetButton2Click = () => {
        setShowElements(false);
  };
      

  return (
    <div>
        {/* 로고 이미지 */}
      <div className="img">
        <img className={Clothes2.main02} src={main02} />
      </div>
      <div>
        <img className={Clothes2.Clothes01} src={Clothes01}/>
      </div>
       {/* 몸 이미지 */}
      <div className="body">
        <img className={Clothes2.body} src={body} />
      </div>
       {/* 머리 이미지 */}
      <div className="head">
        <img className={Clothes2.head} src={head} />
      </div>

        {/* 옷장 */}
        <div className={Clothes2.clothes}
        style={{
          backgroundColor: '#7857DB',
          width: '1070px',
          height: '900px',
          position: 'absolute',
          marginLeft: '800px',
          marginTop: '60px',
          borderRadius: '20px',
          border: "5px solid #5301BF"
        }}
      >
        <div
        className={Clothes2.Clothes5}
        style={{
          backgroundColor: 'rgb(226,218,250)',
          width: '1000px',
          height: '800px',
          position: 'relative',
          margin: '60px auto',
          borderRadius: '20px',
          overflow: 'auto',
          border: '5px solid #5301BF',
          display: showElements ? 'none' : 'block'
        }}
        >
          {/*얼굴 버튼 */}
        <button type="button"  onclick="location.href='Clothes2.js' "className={Clothes2.clothes}
        style={{
          width:'160px',
          height:'60px',
          color:'white',
          fontWeight:'bold',
          backgroundColor: 'rgb(188, 167, 249)',
          borderRadius:'10px',
          marginLeft:'310px',
          marginTop: '20px',
          border: '3px solid #5301BF'
        }}>MAKE UP</button>

        {/*옷 버튼 */}
      <button className={Clothes2.clothes}
        style={{
          width:'160px',
          height:'60px',
          color:'white',
          fontWeight:'bold',
          backgroundColor: 'rgb(188, 167, 249)',
          borderRadius:'10px',
          marginLeft:'20px',
          marginTop: '20px',
          marginBottom:'20px',
          border: '3px solid #5301BF',
        }}onClick={handleClosetButtonClick}> CLOSET</button>

          {/*head*/}
            <div className={Clothes2.hback1}></div>
            <div className={Clothes2.hback2}></div>
            <div className={Clothes2.hback3}></div>
            <div className={Clothes2.hback4}></div>
            <div className={Clothes2.hback5}></div>
            <div className={Clothes2.hback6}></div>
            <div className={Clothes2.hback7}></div>
            <div className={Clothes2.hback8}></div>
            <div className={Clothes2.hback9}></div>
            <div className={Clothes2.hback10}></div>

          {/*brow*/}
            <div className={Clothes2.bback1}></div>
            <div className={Clothes2.bback2}></div>
            <div className={Clothes2.bback3}></div>
            <div className={Clothes2.bback4}></div>
            <div className={Clothes2.bback5}></div>

          {/*eye */}
            <div className={Clothes2.eback1}></div>
            <div className={Clothes2.eback2}></div>
            <div className={Clothes2.eback3}></div>
            <div className={Clothes2.eback4}></div>
            <div className={Clothes2.eback5}></div>
            <div className={Clothes2.eback6}></div>
            <div className={Clothes2.eback7}></div>
            <div className={Clothes2.eback8}></div>
            <div className={Clothes2.eback9}></div>
            <div className={Clothes2.eback10}></div>

          {/*lip */}
            <div className={Clothes2.lback1}></div>
            <div className={Clothes2.lback2}></div>
            <div className={Clothes2.lback3}></div>
            <div className={Clothes2.lback4}></div>
            <div className={Clothes2.lback5}></div>
            <div className={Clothes2.lback6}></div>
            <div className={Clothes2.lback7}></div>
            <div className={Clothes2.lback8}></div>
            <div className={Clothes2.lback9}></div>
            <div className={Clothes2.lback10}></div>

          {/*top */}
            <div className={Clothes2.tback1}></div>
            <div className={Clothes2.tback2}></div>
            <div className={Clothes2.tback3}></div>
            <div className={Clothes2.tback4}></div>
            <div className={Clothes2.tback5}></div>
            <div className={Clothes2.tback6}></div>
            <div className={Clothes2.tback7}></div>
            <div className={Clothes2.tback8}></div>
            <div className={Clothes2.tback9}></div>
            <div className={Clothes2.tback10}></div>

        {/* 머리 이미지 누르면 바뀌게 하기 */}
        <img
          className={Clothes2.hair01}
          src={hair01}
          onClick={() => handlehairClick('hair')}
        />
        <img
          className={Clothes2.hair02}
          src={hair02}
          onClick={() => handlehairClick('hair2')}
        />
        <img
          className={Clothes2.hair03}
          src={hair03}
          onClick={() => handlehairClick('hair3')}
        />

        {/* 눈썹 이미지 누르면 바뀌게 하기 */}
        <img
          className={Clothes2.eyebrow01} src={eyebrow01}
          onClick={() => handleeyebrowClick('eyebrow')}
        />
        <img
          className={Clothes2.eyebrow02}
          src={eyebrow02}
          onClick={() => handleeyebrowClick('eyebrow2')}
        />
        {/* 눈썹 이미지 누르면 바뀌게 하기 */}
        <img
          className={Clothes2.eyebrow03}
          src={eyebrow03}
          onClick={() => handleeyebrowClick('eyebrow3')}
        />
        {/* 눈썹 이미지 누르면 바뀌게 하기 */}
        <img
          className={Clothes2.eyebrow04}
          src={eyebrow04}
          onClick={() => handleeyebrowClick('eyebrow4')}
        />
        {/* 눈 이미지 누르면 바뀌게 하기 */}
        <img
          className={Clothes2.eyes01}
          src={eyes01}
          onClick={() => handleeyesClick('eyes')}
        />
        <img
          className={Clothes2.eyes02}
          src={eyes02}
          onClick={() => handleeyesClick('eyes2')}
        />
        <img
          className={Clothes2.eyes03}
          src={eyes03}
          onClick={() => handleeyesClick('eyes3')}
        />
        <img
          className={Clothes2.eyes04}
          src={eyes04}
          onClick={() => handleeyesClick('eyes4')}
        />
        <img
          className={Clothes2.eyes05}
          src={eyes05}
          onClick={() => handleeyesClick('eyes5')}
        />
        <img
          className={Clothes2.eyes06}
          src={eyes06}
          onClick={() => handleeyesClick('eyes6')}
        />
        <img
          className={Clothes2.eyes07}
          src={eyes07}
          onClick={() => handleeyesClick('eyes7')}
        />
        
        {/* 입 이미지 누르면 바뀌게 하기 */}
        <img
          className={Clothes2.lips01}
          src={lips01}
          onClick={() => handlelipsClick('lips')}
        />
         <img
          className={Clothes2.lips02}
          src={lips02}
          onClick={() => handlelipsClick('lips2')}
        />
        <img
          className={Clothes2.lips03}
          src={lips03}
          onClick={() => handlelipsClick('lips3')}
        /> 
        <img
          className={Clothes2.lips04}
          src={lips04}
          onClick={() => handlelipsClick('lips4')}
        />
        <img
          className={Clothes2.lips05}
          src={lips05}
          onClick={() => handlelipsClick('lips5')}
        />
        <img
          className={Clothes2.lips06}
          src={lips06}
          onClick={() => handlelipsClick('lips6')}
        />
        </div>
        <div
        className={Clothes2.Clothes6}
        style={{
          backgroundColor: 'rgb(226,218,250)',
          width: '1000px',
          height: '800px',
          position: 'relative',
          margin: '60px auto',
          borderRadius: '20px',
          overflow: 'auto',
          border: '5px solid #5301BF',
          display: showElements ? 'block' : 'none'
        }}
        >
        <div>
        <button type="button" className={Clothes2.clothes}
        style={{
          width:'160px',
          height:'60px',
          color:'white',
          fontWeight:'bold',
          backgroundColor: 'rgb(188, 167, 249)',
          borderRadius:'10px',
          marginLeft:'310px',
          marginTop: '20px',
          border: '3px solid #5301BF'
        }} onClick={handleClosetButton2Click}>MAKE UP</button>

        {/*옷 버튼 */}
      <button className={Clothes2.clothes}
        style={{
          width:'160px',
          height:'60px',
          color:'white',
          fontWeight:'bold',
          backgroundColor: 'rgb(188, 167, 249)',
          borderRadius:'10px',
          marginLeft:'20px',
          marginTop: '20px',
          marginBottom:'20px',
          border: '3px solid #5301BF',
        }}> CLOSET</button>
        </div>

        {/*bottom */}
        <div className={Clothes2.boback1}></div>
            <div className={Clothes2.boback2}></div>
            <div className={Clothes2.boback3}></div>
            <div className={Clothes2.boback4}></div>
            <div className={Clothes2.boback5}></div>
            <div className={Clothes2.boback6}></div>
            <div className={Clothes2.boback7}></div>
            <div className={Clothes2.boback8}></div>
            <div className={Clothes2.boback9}></div>
            <div className={Clothes2.boback10}></div>
          {/* top */}
            <div className={Clothes2.tback1}></div>
            <div className={Clothes2.tback2}></div>
            <div className={Clothes2.tback3}></div>
            <div className={Clothes2.tback4}></div>
            <div className={Clothes2.tback5}></div>
            <div className={Clothes2.tback6}></div>
            <div className={Clothes2.tback7}></div>
            <div className={Clothes2.tback8}></div>
            <div className={Clothes2.tback9}></div>
            <div className={Clothes2.tback10}></div>


        {/* bottom */}
        <img
          className={Clothes2.bottom01}
          src={bottom01}
          onClick={() => handlebottomClick('bottom')}
        />
        {/* top */}
        <img
          className={Clothes2.top02}
          src={top02}
          onClick={() => handletopClick('top2')}
        />
         <img
          className={Clothes2.top03}
          src={top03}
          onClick={() => handletopClick('top3')}
        />
        {/* 악세서리 */}
        <img
          className={Clothes2.acc01}
          src={acc01}
          onClick={() => handleaccClick('acc')}
        />
        <img
          className={Clothes2.acc02}
          src={acc02}
          onClick={() => handleacc2Click('acc2')}
        />
        <img
          className={Clothes2.acc03}
          src={acc03}
          onClick={() => handleacc3Click('acc3')}
        />
        <img
          className={Clothes2.acc04}
          src={acc04}
          onClick={() => handleacc4Click('acc4')}
        />
        </div>
        </div>
      {/* 이미지 누르면 head이미제 입혀지고 null이면 없어지게 하기 */}
      {handleeyesClick && (
        <img
          className={Clothes2.head}
          src={selectedeyes === 'eyes' ? eyes01 : 
          selectedeyes === 'eyes2' ? eyes02 :
          selectedeyes === 'eyes3' ? eyes03 :
          selectedeyes === 'eyes4' ? eyes04 :
          selectedeyes === 'eyes5' ? eyes05 :
          selectedeyes === 'eyes6' ? eyes06 :
          selectedeyes === 'eyes7' ? eyes07 :
          null}
        />

      )}
      {handlehairClick && (
        <img
          className={Clothes2.head}
          src={
            selectedhair === 'hair' ? hair01 :
            selectedhair === 'hair2' ? hair02 :
            selectedhair === 'hair3' ? hair03 :
            
            null}
        />
      )}

      {handleeyebrowClick && (
        <img
          className={Clothes2.head}
          src={
            selectedeyebrow === 'eyebrow' ? eyebrow01 :
            selectedeyebrow === 'eyebrow2' ? eyebrow02 :
            selectedeyebrow === 'eyebrow3' ? eyebrow03 :
            selectedeyebrow === 'eyebrow4' ? eyebrow04 :
            null}
        />

      )}
      {handlelipsClick && (
        <img
          className={Clothes2.head}
          src={
            selectedlips === 'lips' ? lips01 : 
            selectedlips === 'lips2' ? lips02 :
            selectedlips === 'lips3' ? lips03 :
            selectedlips === 'lips4' ? lips04 :
            selectedlips === 'lips5' ? lips05 :
            selectedlips === 'lips6' ? lips06 :
            null}
        />
      )}

      {handlebottomClick && (
        <img
          className={Clothes2.body}
          src={
            selectedbottom === 'bottom' ? bottom01 : 
            null}
        />

      )}

      {handletopClick && (
        <img
          className={Clothes2.body}
          src={
            selectedtop === 'top2' ? top02 : 
            selectedtop === 'top3' ? top03 :
            null}
        />

      )}

      

      {handleaccClick && (
        <img
          className={Clothes2.body}
          src={
            selectedacc === 'acc' ? acc01 : 
            // selectedacc === 'acc2' ? acc02 :
            // selectedacc === 'acc3' ? acc03 :
            // selectedacc === 'acc4' ? acc04 :
            null}
        />

      )}
      {handleacc2Click && (
        <img
          className={Clothes2.body}
          src={
            selectedacc2 === 'acc2' ? acc02 :
            // selectedacc === 'acc3' ? acc03 :
            // selectedacc === 'acc4' ? acc04 :
            null}
        />

      )}
      {handleacc3Click && (
        <img
          className={Clothes2.body}
          src={
            selectedacc3 === 'acc3' ? acc03 :
            // selectedacc === 'acc4' ? acc04 :
            null}
        />

      )}  
      {handleacc4Click && (
        <img
          className={Clothes2.body}
          src={
            selectedacc4 === 'acc4' ? acc04 :
            null}
        />

      )}            
    </div>
  );
};

export default Clothes;