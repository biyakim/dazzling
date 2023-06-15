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
  const [selectedeyes, setSelectedeyes] = useState(null);
  const [selectedhair, setSelectedhair] = useState(null);
  const [selectedeyebrow, setSelectedeyebrow] = useState(null);
  const [selectedlips, setSelectedlips] = useState(null);
  const [selectedacc, setSelectedacc] = useState(null);
  const [selectedtop, setSelectedtop] = useState(null);
  const [selectedbottom, setSelectedbottom] = useState(null);

  //이미지 누르면 이미지 바뀌게 하기
  const handleeyesClick = (clothing) => {
    setSelectedeyes(clothing);
  };
  const handlehairClick = (clothing) => {
    setSelectedhair(clothing);
  };
  const handleeyebrowClick = (clothing) => {
    setSelectedeyebrow(clothing);
  };
  const handlelipsClick = (clothing) => {
    setSelectedlips(clothing);
  };
  const handletopClick = (clothing) => {
    setSelectedtop(clothing);
  };
  const handlebottomClick = (clothing) => {
    setSelectedbottom(clothing);
  };
  const handleaccClick = (clothing) => {
    setSelectedacc(clothing);
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
      <div
        className={Clothes2.clothes}
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
          backgroundColor: '#ffffff',
          width: '1000px',
          height: '800px',
          position: 'relative',
          margin: '60px auto',
          borderRadius: '20px',
          overflow: 'auto',
          border: '5px solid #5301BF'
        }}
        >
          <div className={Clothes2.back}></div>
          <div className={Clothes2.back2}></div>
          <div className={Clothes2.back3}></div>
          <div className={Clothes2.back4}></div>
          <div className={Clothes2.back5}></div>
          <div className={Clothes2.back6}></div>
          <div className={Clothes2.back7}></div>
          <div className={Clothes2.back8}></div>
          <div className={Clothes2.back9}></div>


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
          className={Clothes2.eyebrow01}
          src={eyebrow01}
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
          onClick={() => handleeyesClick('eye3')}
        />
        <img
          className={Clothes2.eyes04}
          src={eyes04}
          onClick={() => handleeyesClick('eyes4')}
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
          onClick={() => handleaccClick('acc2')}
        />
        <img
          className={Clothes2.acc03}
          src={acc03}
          onClick={() => handleaccClick('acc3')}
        />
        <img
          className={Clothes2.acc04}
          src={acc04}
          onClick={() => handleaccClick('acc4')}
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
            selectedacc === 'acc2' ? acc02 :
            selectedacc === 'acc3' ? acc03 :
            selectedacc === 'acc4' ? acc04 :
            null}
        />

      )}   
    </div>
  );
};

export default Clothes;