import React, { useState } from 'react';
import main03 from '../img/main_03.png';
import main02 from '../img/main_02.png';
import Clothes2 from './Clothes.module.css';
import head from '../img/avatar/head.png';
import body from '../img/avatar/body.png';
import eyes01 from '../img/avatar/eyes/eyes_01.png';
import Draggable from "react-draggable";
import hair01 from '../img/avatar/hair/hair_01.png';
import eyebrow01 from '../img/avatar/eyebrow/eyebrow_01.png';
import lips01 from '../img/avatar/lips/lips_01.png';

const Clothes = () => {
  const [selectedeyes, setSelectedeyes] = useState(null);
  const [selectedhair, setSelectedhair] = useState(null);
  const [selectedeyebrow, setSelectedeyebrow] = useState(null);
  const [selectedlips, setSelectedlips] = useState(null);

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


  return (
    <div>
        {/* 로고 이미지 */}
      <div className="img">
        <img className={Clothes2.main02} src={main02} />
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
          backgroundColor: 'white',
          width: '1356px',
          height: '800px',
          position: 'absolute',
          marginLeft: '500px',
          marginTop: '60px',
          borderRadius: '50px'
        }}
      >
        {/* 눈 이미지 누르면 바뀌게 하기 */}
        <img
          className={Clothes2.eyes01}
          src={eyes01}
          onClick={() => handleeyesClick('eyes')}
        />
        {/* 머리 이미지 누르면 바뀌게 하기 */}
        <img
          className={Clothes2.hair01}
          src={hair01}
          onClick={() => handlehairClick('hair')}
        />
        {/* 눈썹 이미지 누르면 바뀌게 하기 */}
        <img
          className={Clothes2.eyebrow01}
          src={eyebrow01}
          onClick={() => handleeyebrowClick('eyebrow')}
        />
        {/* 입 이미지 누르면 바뀌게 하기 */}
        <img
          className={Clothes2.lips01}
          src={lips01}
          onClick={() => handlelipsClick('lips')}
        />
      </div>

      {/* 이미지 누르면 head이미제 입혀지고 null이면 없어지게 하기 */}
      {handleeyesClick && (
        <img
          className={Clothes2.head}
          src={selectedeyes === 'eyes' ? eyes01 : null}
        />

      )}
      {handlehairClick && (
        <img
          className={Clothes2.head}
          src={
            selectedhair === 'hair' ? hair01 : null}
        />

      )}
      {handleeyebrowClick && (
        <img
          className={Clothes2.head}
          src={
            selectedeyebrow === 'eyebrow' ? eyebrow01 : null}
        />

      )}
      {handlelipsClick && (
        <img
          className={Clothes2.head}
          src={
            selectedlips === 'lips' ? lips01 : null}
        />

      )}
    </div>
  );
};

export default Clothes;