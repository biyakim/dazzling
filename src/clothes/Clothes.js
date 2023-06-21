import React, { useState, useRef } from 'react';
import {toPng} from 'html-to-image';
import { useHistory } from 'react-router-dom';
import main02 from '../img/main_02.png';
import Clothes2 from './Clothes.module.css';
import head from '../img/avatar/head.png';
import body from '../img/avatar/body.png';
import Clothes01 from '../img/clothes_01.png';
import { saveAs } from 'file-saver';
//eyes
import eyes01 from '../img/avatar/eyes/eyes_01.png';
import eyes02 from '../img/avatar/eyes/eyes_02.png';
import eyes03 from '../img/avatar/eyes/eyes_03.png';
import eyes04 from '../img/avatar/eyes/eyes_04.png';
import eyes05 from '../img/avatar/eyes/eyes_05.png';
import eyes06 from '../img/avatar/eyes/eyes_06.png';
import eyes07 from '../img/avatar/eyes/eyes_07.png';
import eyes08 from '../img/avatar/eyes/eyes_08.png';
import eyes09 from '../img/avatar/eyes/eyes_09.png';
import eyes10 from '../img/avatar/eyes/eyes_10.png';
//hair
import hair01 from '../img/avatar/hair/hair_01.png';
import hair02 from '../img/avatar/hair/hair_02.png';
import hair03 from '../img/avatar/hair/hair_03.png';
import hair04 from '../img/avatar/hair/hair_04.png';
import hair05 from '../img/avatar/hair/hair_05.png';
import hair06 from '../img/avatar/hair/hair_06.png';
import hair07 from '../img/avatar/hair/hair_07.png';
import hair08 from '../img/avatar/hair/hair_08.png';
import hair09 from '../img/avatar/hair/hair_09.png';
import hair10 from '../img/avatar/hair/hair_10.png';
//eyebrow
import eyebrow01 from '../img/avatar/eyebrow/eyebrow_01.png';
import eyebrow02 from '../img/avatar/eyebrow/eyebrow_02.png';
import eyebrow03 from '../img/avatar/eyebrow/eyebrow_03.png';
import eyebrow04 from '../img/avatar/eyebrow/eyebrow_04.png';
import eyebrow05 from '../img/avatar/eyebrow/eyebrow_05.png';
//lips
import lips01 from '../img/avatar/lips/lips_01.png';
import lips02 from '../img/avatar/lips/lips_02.png';
import lips03 from '../img/avatar/lips/lips_03.png';
import lips04 from '../img/avatar/lips/lips_04.png';
import lips05 from '../img/avatar/lips/lips_05.png';
import lips06 from '../img/avatar/lips/lips_06.png';
import lips07 from '../img/avatar/lips/lips_07.png';
import lips08 from '../img/avatar/lips/lips_08.png';
import lips09 from '../img/avatar/lips/lips_09.png';
import lips10 from '../img/avatar/lips/lips_10.png';
//top
import top01 from '../img/avatar/clothes/top/top_01.png';
import top02 from '../img/avatar/clothes/top/top_02.png';
import top03 from '../img/avatar/clothes/top/top_03.png';
import top04 from '../img/avatar/clothes/top/top_04.png';
import top05 from '../img/avatar/clothes/top/top_05.png';
import top06 from '../img/avatar/clothes/top/top_06.png';
import top07 from '../img/avatar/clothes/top/top_07.png';
import top08 from '../img/avatar/clothes/top/top_08.png';
import top09 from '../img/avatar/clothes/top/top_09.png';
import top10 from '../img/avatar/clothes/top/top_10.png';
import top11 from '../img/avatar/clothes/top/top_11.png';
//bottom
import bottom01 from '../img/avatar/clothes/bottom/bottom_01.png';
import bottom02 from '../img/avatar/clothes/bottom/bottom_02.png';
import bottom03 from '../img/avatar/clothes/bottom/bottom_03.png';
import bottom04 from '../img/avatar/clothes/bottom/bottom_04.png';
import bottom05 from '../img/avatar/clothes/bottom/bottom_05.png';
import bottom06 from '../img/avatar/clothes/bottom/bottom_06.png';
import bottom07 from '../img/avatar/clothes/bottom/bottom_07.png';
import bottom08 from '../img/avatar/clothes/bottom/bottom_08.png';
import bottom09 from '../img/avatar/clothes/bottom/bottom_09.png';
import bottom10 from '../img/avatar/clothes/bottom/bottom_10.png';

//acc
import acc01 from '../img/avatar/accessories/acc_01.png';
import acc02 from '../img/avatar/accessories/acc_02.png';
import acc03 from '../img/avatar/accessories/acc_03.png';
import acc04 from '../img/avatar/accessories/acc_04.png';
import acc05 from '../img/avatar/accessories/acc_05.png';
import acc06 from '../img/avatar/accessories/acc_06.png';
import acc07 from '../img/avatar/accessories/acc_07.png';
import acc08 from '../img/avatar/accessories/acc_08.png';
import acc09 from '../img/avatar/accessories/acc_09.png';
import acc10 from '../img/avatar/accessories/acc_10.png';
import acc11 from '../img/avatar/accessories/acc_11.png';


//lips icon
import lips_01_icon from '../img/avatar/icon/lips/lips_01_icon.png';
import lips_02_icon from '../img/avatar/icon/lips/lips_02_icon.png';
import lips_03_icon from '../img/avatar/icon/lips/lips_03_icon.png';
import lips_04_icon from '../img/avatar/icon/lips/lips_04_icon.png';
import lips_05_icon from '../img/avatar/icon/lips/lips_05_icon.png';
import lips_06_icon from '../img/avatar/icon/lips/lips_06_icon.png';
import lips_07_icon from '../img/avatar/icon/lips/lips_07_icon.png';
import lips_08_icon from '../img/avatar/icon/lips/lips_08_icon.png';
import lips_09_icon from '../img/avatar/icon/lips/lips_09_icon.png';
import lips_10_icon from '../img/avatar/icon/lips/lips_10_icon.png';

//eyes icon
import eyes_01_icon from '../img/avatar/icon/eyes/eyes_01_icon.png';
import eyes_02_icon from '../img/avatar/icon/eyes/eyes_02_icon.png';
import eyes_03_icon from '../img/avatar/icon/eyes/eyes_03_icon.png';
import eyes_04_icon from '../img/avatar/icon/eyes/eyes_04_icon.png';
import eyes_05_icon from '../img/avatar/icon/eyes/eyes_05_icon.png';
import eyes_06_icon from '../img/avatar/icon/eyes/eyes_06_icon.png';
import eyes_07_icon from '../img/avatar/icon/eyes/eyes_07_icon.png';
import eyes_08_icon from '../img/avatar/icon/eyes/eyes_08_icon.png';
import eyes_09_icon from '../img/avatar/icon/eyes/eyes_09_icon.png';
import eyes_10_icon from '../img/avatar/icon/eyes/eyes_10_icon.png';


//eyebrow icon
import eyebrow_01_icon from '../img/avatar/icon/eyebrow/eyebrow_01_icon.png';
import eyebrow_02_icon from '../img/avatar/icon/eyebrow/eyebrow_02_icon.png';
import eyebrow_03_icon from '../img/avatar/icon/eyebrow/eyebrow_03_icon.png';
import eyebrow_04_icon from '../img/avatar/icon/eyebrow/eyebrow_04_icon.png';
import eyebrow_05_icon from '../img/avatar/icon/eyebrow/eyebrow_05_icon.png';

//top icon
import top_01_icon from '../img/avatar/icon/clothes/top/top_01_icon.png';
import top_02_icon from '../img/avatar/icon/clothes/top/top_02_icon.png';
import top_03_icon from '../img/avatar/icon/clothes/top/top_03_icon.png';
import top_04_icon from '../img/avatar/icon/clothes/top/top_04_icon.png';
import top_05_icon from '../img/avatar/icon/clothes/top/top_05_icon.png';
import top_06_icon from '../img/avatar/icon/clothes/top/top_06_icon.png';
import top_07_icon from '../img/avatar/icon/clothes/top/top_07_icon.png';
import top_08_icon from '../img/avatar/icon/clothes/top/top_08_icon.png';
import top_09_icon from '../img/avatar/icon/clothes/top/top_09_icon.png';
import top_10_icon from '../img/avatar/icon/clothes/top/top_10_icon.png';
import top_11_icon from '../img/avatar/icon/clothes/top/top_11_icon.png';

//acc icon
import acc_01_icon from '../img/avatar/icon/acc/acc_01_icon.png';
import acc_02_icon from '../img/avatar/icon/acc/acc_02_icon.png';
import acc_03_icon from '../img/avatar/icon/acc/acc_03_icon.png';
import acc_04_icon from '../img/avatar/icon/acc/acc_04_icon.png';
import acc_05_icon from '../img/avatar/icon/acc/acc_05_icon.png';
import acc_06_icon from '../img/avatar/icon/acc/acc_06_icon.png';
import acc_07_icon from '../img/avatar/icon/acc/acc_07_icon.png';
import acc_08_icon from '../img/avatar/icon/acc/acc_08_icon.png';
import acc_09_icon from '../img/avatar/icon/acc/acc_09_icon.png';
import acc_10_icon from '../img/avatar/icon/acc/acc_10_icon.png';
import acc_11_icon from '../img/avatar/icon/acc/acc_11_icon.png';

//bottom icon
import bottom_01_icon from '../img/avatar/icon/clothes/bottom/bottom_01_icon.png';
import bottom_02_icon from '../img/avatar/icon/clothes/bottom/bottom_02_icon.png';
import bottom_03_icon from '../img/avatar/icon/clothes/bottom/bottom_03_icon.png';
import bottom_04_icon from '../img/avatar/icon/clothes/bottom/bottom_04_icon.png';
import bottom_05_icon from '../img/avatar/icon/clothes/bottom/bottom_05_icon.png';
import bottom_06_icon from '../img/avatar/icon/clothes/bottom/bottom_06_icon.png';
import bottom_07_icon from '../img/avatar/icon/clothes/bottom/bottom_07_icon.png';
import bottom_08_icon from '../img/avatar/icon/clothes/bottom/bottom_08_icon.png';
import bottom_09_icon from '../img/avatar/icon/clothes/bottom/bottom_09_icon.png';
import bottom_10_icon from '../img/avatar/icon/clothes/bottom/bottom_10_icon.png';

//shoes
import shoes01 from '../img/avatar/clothes/shoes/shoes_01.png';
import shoes02 from '../img/avatar/clothes/shoes/shoes_02.png';
import shoes03 from '../img/avatar/clothes/shoes/shoes_03.png';
import shoes04 from '../img/avatar/clothes/shoes/shoes_04.png';
import shoes05 from '../img/avatar/clothes/shoes/shoes_05.png';

//shoes icon
import shoes01_icon from '../img/avatar/icon/clothes/shoes/shoes_01_icon.png';
import shoes02_icon from '../img/avatar/icon/clothes/shoes/shoes_02_icon.png';
import shoes03_icon from '../img/avatar/icon/clothes/shoes/shoes_03_icon.png';
import shoes04_icon from '../img/avatar/icon/clothes/shoes/shoes_04_icon.png';
import shoes05_icon from '../img/avatar/icon/clothes/shoes/shoes_05_icon.png';


const Clothes = () => {
  const [showElements, setShowElements] = useState(false);

  const [selectedeyes, setSelectedeyes] = useState(null);

  const [selectedhair, setSelectedhair] = useState(null);

  const [selectedeyebrow, setSelectedeyebrow] = useState(null);

  const [selectedlips, setSelectedlips] = useState(null);

  const router = useHistory();

  const [selectedacc, setSelectedacc] = useState(null);
  const [selectedacc2, setSelectedacc2] = useState(null);
  const [selectedacc3, setSelectedacc3] = useState(null);
  const [selectedacc4, setSelectedacc4] = useState(null);
  const [selectedacc5, setSelectedacc5] = useState(null);
  const [selectedacc6, setSelectedacc6] = useState(null);
  const [selectedacc7, setSelectedacc7] = useState(null);
  const [selectedacc8, setSelectedacc8] = useState(null);
  const [selectedacc9, setSelectedacc9] = useState(null);
  const [selectedacc10, setSelectedacc10] = useState(null);

  const [selectedtop, setSelectedtop] = useState(null);

  const [selectedshoes, setSelectedshoes] = useState(null);

  const [selectedbottom, setSelectedbottom] = useState(null);

  //이미지 누르면 이미지 바뀌게 하기
  const handleeyesClick = (clothing) => { setSelectedeyes(clothing); setShowElements(false) };
  const handlehairClick = (clothing) => { setSelectedhair(clothing); setShowElements(false) };
  const handleeyebrowClick = (clothing) => { setSelectedeyebrow(clothing); setShowElements(false) };
  const handlelipsClick = (clothing) => { setSelectedlips(clothing); setShowElements(false) };
  const handletopClick = (clothing) => { setSelectedtop(clothing); setShowElements(true); };
  const handlebottomClick = (clothing) => { setSelectedbottom(clothing); setShowElements(true); };
  const handleshoesClick = (clothing) => { setSelectedshoes(clothing); setShowElements(true); };
  const [savedImage, setSavedImage] = useState(null);

  const handleaccClick = (clothing) => {setSelectedacc((prevSelectedacc) =>
      prevSelectedacc === clothing ? null : clothing); 
      setShowElements(true);
  };
  const handleacc2Click = (clothing) => {setSelectedacc2((prevSelectedacc2) =>
      prevSelectedacc2 === clothing ? null : clothing); 
      setShowElements(true);
  };
  const handleacc3Click = (clothing) => {setSelectedacc3((prevSelectedacc3) =>
      prevSelectedacc3 === clothing ? null : clothing); 
      setShowElements(true);
  };
  const handleacc4Click = (clothing) => {setSelectedacc4((prevSelectedacc4) =>
      prevSelectedacc4 === clothing ? null : clothing); 
      setShowElements(true);
  };
  const handleacc5Click = (clothing) => {setSelectedacc5((prevSelectedacc5) =>
      prevSelectedacc5 === clothing ? null : clothing); 
      setShowElements(true);
  };
  const handleacc6Click = (clothing) => {setSelectedacc6((prevSelectedacc6) =>
      prevSelectedacc6 === clothing ? null : clothing); 
      setShowElements(true);
  };
  const handleacc7Click = (clothing) => {setSelectedacc7((prevSelectedacc7) =>
      prevSelectedacc7 === clothing ? null : clothing); 
      setShowElements(true);
  };
  const handleacc8Click = (clothing) => {setSelectedacc8((prevSelectedacc8) =>
    prevSelectedacc8 === clothing ? null : clothing);
       setShowElements(true);
  };
  const handleacc9Click = (clothing) => {setSelectedacc9((prevSelectedacc9) =>
      prevSelectedacc9 === clothing ? null : clothing); 
      setShowElements(true);
  };
  const handleacc10Click = (clothing) => {setSelectedacc10((prevSelectedacc10) =>
      prevSelectedacc10 === clothing ? null : clothing); 
      setShowElements(true);
  };
  
  {/*버튼*/}
  const handleClosetButtonClick = () => {setShowElements(true);};

  const handleClosetButton2Click = () => {setShowElements(false);};

  const imageRef = useRef(null);

  const btn = () => {
    router.push('/');
  }
  


  return (
    <div ref={imageRef}>
      {/* 로고 이미지 */}
      <div className="img">
        <img className={Clothes2.main02} src={main02} />
      </div>
      <div>
        <img className={Clothes2.Clothes01} src={Clothes01} />
      </div>
      <button className={Clothes2.btn} onClick={btn}>처음으로 가기</button>
      <button className={Clothes2.cle} onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox', '_blank', 'width=600, height=600')}>완성</button>



      
      <div id='Character'>
        {/* 몸 이미지 */}
        <div className="body">
          <img className={Clothes2.body} src={body} />
        </div>
        {/* 머리 이미지 */}
        <div className="head">
          <img className={Clothes2.head} src={head} />
        </div>

      </div>
      

      {/* 옷장 */}
      <div className={Clothes2.clothes}
        style={{
          backgroundColor: '#7857DB',
          width: '1030px',
          height: '900px',
          position: 'absolute',
          marginLeft: '800px',
          marginTop: '80px',
          borderRadius: '20px',
          border: "5px solid #5301BF"
        }}
      >
        <div
          className={Clothes2.Clothes5}
          style={{
            backgroundColor: 'rgb(226,218,250)',
            width: '1000px',
            height: '820px',
            position: 'relative',
            marginTop:'10px',
            marginLeft:'10px',
            borderRadius: '20px',
            overflow: 'auto',
            border: '5px solid #5301BF',
            display: showElements ? 'none' : 'block'
          }}
        >
          {/*얼굴 버튼 */}
          <button id='face'
            style={{
              width: '160px',
              height: '60px',
              color: 'white',
              fontWeight: 'bold',
              backgroundColor: 'rgb(188, 167, 249)',
              borderRadius: '10px',
              marginLeft: '310px',
              marginTop: '20px',
              border: '3px solid #5301BF',
              fontSize:'20px'
            }}>MAKE UP</button>

          {/*옷 버튼 */}
          <button
            style={{
              width: '160px',
              height: '60px',
              color: 'white',
              fontWeight: 'bold',
              backgroundColor: 'rgb(188, 167, 249)',
              borderRadius: '10px',
              marginLeft: '20px',
              marginTop: '20px',
              marginBottom: '20px',
              border: '3px solid #5301BF',
              fontSize:'20px'
            }} onClick={handleClosetButtonClick}> CLOSET</button>

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
          <div className={Clothes2.bback6}></div>
          <div className={Clothes2.bback7}></div>
          <div className={Clothes2.bback8}></div>
          <div className={Clothes2.bback9}></div>
          <div className={Clothes2.bback10}></div>

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
          <div className={Clothes2.lback11}></div>

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
          <img
            className={Clothes2.hair04}
            src={hair04}
            onClick={() => handlehairClick('hair4')}
          />
          <img
            className={Clothes2.hair05}
            src={hair05}
            onClick={() => handlehairClick('hair5')}
          />
          <img
            className={Clothes2.hair06}
            src={hair06}
            onClick={() => handlehairClick('hair6')}
          />
          <img
            className={Clothes2.hair07}
            src={hair07}
            onClick={() => handlehairClick('hair7')}
          />
          <img
            className={Clothes2.hair08}
            src={hair08}
            onClick={() => handlehairClick('hair8')}
          />
          <img
            className={Clothes2.hair09}
            src={hair09}
            onClick={() => handlehairClick('hair9')}
          />
           <img
            className={Clothes2.hair10}
            src={hair10}
            onClick={() => handlehairClick('hair10')}
          />
          {/* 눈썹 이미지 누르면 바뀌게 하기 */}
          <img
            className={Clothes2.eyebrow01} 
            src={eyebrow_01_icon}
            onClick={() => handleeyebrowClick('eyebrow')}
          />
          <img
            className={Clothes2.eyebrow02}
            src={eyebrow_02_icon}
            onClick={() => handleeyebrowClick('eyebrow2')}
          />
          <img
            className={Clothes2.eyebrow03}
            src={eyebrow_03_icon}
            onClick={() => handleeyebrowClick('eyebrow3')}
          />
          <img
            className={Clothes2.eyebrow04}
            src={eyebrow_04_icon}
            onClick={() => handleeyebrowClick('eyebrow4')}
          />
          <img
            className={Clothes2.eyebrow05}
            src={eyebrow_05_icon}
            onClick={() => handleeyebrowClick('eyebrow5')}
          />
          {/* 눈 이미지 누르면 바뀌게 하기 */}
          <img
            className={Clothes2.eyes01}
            src={eyes_01_icon}
            onClick={() => handleeyesClick('eyes')}
          />
          <img
            className={Clothes2.eyes02}
            src={eyes_02_icon}
            onClick={() => handleeyesClick('eyes2')}
          />
          <img
            className={Clothes2.eyes03}
            src={eyes_03_icon}
            onClick={() => handleeyesClick('eyes3')}
          />
          <img
            className={Clothes2.eyes04}
            src={eyes_04_icon}
            onClick={() => handleeyesClick('eyes4')}
          />
          <img
            className={Clothes2.eyes05}
            src={eyes_05_icon}
            onClick={() => handleeyesClick('eyes5')}
          />
          <img
            className={Clothes2.eyes06}
            src={eyes_06_icon}
            onClick={() => handleeyesClick('eyes6')}
          />
          <img
            className={Clothes2.eyes07}
            src={eyes_07_icon}
            onClick={() => handleeyesClick('eyes7')}
          />
          <img
            className={Clothes2.eyes08}
            src={eyes_08_icon}
            onClick={() => handleeyesClick('eyes8')}
          />
          <img
            className={Clothes2.eyes09}
            src={eyes_09_icon}
            onClick={() => handleeyesClick('eyes9')}
          />
          <img
            className={Clothes2.eyes10}
            src={eyes_10_icon}
            onClick={() => handleeyesClick('eyes10')}
          />
          {/* 입 이미지 누르면 바뀌게 하기 */}
          <img
            className={Clothes2.lips01}
            src={lips_01_icon}
            onClick={() => handlelipsClick('lips')}
          />
          <img
            className={Clothes2.lips02}
            src={lips_02_icon}
            onClick={() => handlelipsClick('lips2')}
          />
          <img
            className={Clothes2.lips03}
            src={lips_03_icon}
            onClick={() => handlelipsClick('lips3')}
          />
          <img
            className={Clothes2.lips04}
            src={lips_04_icon}
            onClick={() => handlelipsClick('lips4')}
          />
          <img
            className={Clothes2.lips05}
            src={lips_05_icon}
            onClick={() => handlelipsClick('lips5')}
          />
          <img
            className={Clothes2.lips06}
            src={lips_06_icon}
            onClick={() => handlelipsClick('lips6')}
          />
          <img
            className={Clothes2.lips07}
            src={lips_07_icon}
            onClick={() => handlelipsClick('lips7')}
          />
          <img
            className={Clothes2.lips08}
            src={lips_08_icon}
            onClick={() => handlelipsClick('lips8')}
          />
          <img
            className={Clothes2.lips09}
            src={lips_09_icon}
            onClick={() => handlelipsClick('lips9')}
          />
          <img
            className={Clothes2.lips10}
            src={lips_10_icon}
            onClick={() => handlelipsClick('lips10')}
          />
        </div>
        <div
          className={Clothes2.Clothes6}
          style={{
            backgroundColor: 'rgb(226,218,250)',
            width: '1000px',
            height: '820px',
            position: 'relative',
            margin: '60px auto',
            marginTop:'10px',
            borderRadius: '20px',
            overflow: 'auto',
            border: '5px solid #5301BF',
            display: showElements ? 'block' : 'none'
          }}
        >
          
          <div>
            <button type="button" className={Clothes2.clothes}
              style={{
                width: '160px',
                height: '60px',
                color: 'white',
                fontWeight: 'bold',
                backgroundColor: 'rgb(188, 167, 249)',
                borderRadius: '10px',
                marginLeft: '310px',
                marginTop: '20px',
                border: '3px solid #5301BF',
                fontSize:'20px'
              }} onClick={handleClosetButton2Click}>MAKE UP</button>

            {/*옷 버튼 */}
            <button className={Clothes2.clothes}
              style={{
                width: '160px',
                height: '60px',
                color: 'white',
                fontWeight: 'bold',
                backgroundColor: 'rgb(188, 167, 249)',
                borderRadius: '10px',
                marginLeft: '20px',
                marginTop: '20px',
                marginBottom: '20px',
                border: '3px solid #5301BF',
                fontSize:'20px'
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

          {/*accessories */}
          <div className={Clothes2.aback1}></div>
          <div className={Clothes2.aback2}></div>
          <div className={Clothes2.aback3}></div>
          <div className={Clothes2.aback4}></div>
          <div className={Clothes2.aback5}></div>
          <div className={Clothes2.aback6}></div>
          <div className={Clothes2.aback7}></div>
          <div className={Clothes2.aback8}></div>
          <div className={Clothes2.aback9}></div>
          <div className={Clothes2.aback10}></div>

          {/*shoes */}
          <div className={Clothes2.sback1}></div>
          <div className={Clothes2.sback2}></div>
          <div className={Clothes2.sback3}></div>
          <div className={Clothes2.sback4}></div>
          <div className={Clothes2.sback5}></div>
          <div className={Clothes2.sback11}></div>
        

          {/*신발*/}
          <img
            className={Clothes2.shoes01}
            src={shoes01_icon}
            onClick={() => handleshoesClick('shoes')}
          />
           <img
            className={Clothes2.shoes02}
            src={shoes02_icon}
            onClick={() => handleshoesClick('shoes2')}
          />
           <img
            className={Clothes2.shoes03}
            src={shoes03_icon}
            onClick={() => handleshoesClick('shoes3')}
          />
           <img
            className={Clothes2.shoes04}
            src={shoes04_icon}
            onClick={() => handleshoesClick('shoes4')}
          />
           <img
            className={Clothes2.shoes05}
            src={shoes05_icon}
            onClick={() => handleshoesClick('shoes5')}
          />

          {/* bottom */}
          <img
            className={Clothes2.bottom01}
            src={bottom_01_icon}
            onClick={() => handlebottomClick('bottom')}
          />
          <img
            className={Clothes2.bottom02}
            src={bottom_02_icon}
            onClick={() => handlebottomClick('bottom2')}
          />
          <img
            className={Clothes2.bottom03}
            src={bottom_03_icon}
            onClick={() => handlebottomClick('bottom3')}
          />
          <img
            className={Clothes2.bottom04}
            src={bottom_04_icon}
            onClick={() => handlebottomClick('bottom4')}
          />
          <img
            className={Clothes2.bottom05}
            src={bottom_05_icon}
            onClick={() => handlebottomClick('bottom5')}
          />
          <img
            className={Clothes2.bottom06}
            src={bottom_06_icon}
            onClick={() => handlebottomClick('bottom6')}
          />
          <img
            className={Clothes2.bottom07}
            src={bottom_07_icon}
            onClick={() => handlebottomClick('bottom7')}
          />
          <img
            className={Clothes2.bottom08}
            src={bottom_08_icon}
            onClick={() => handlebottomClick('bottom8')}
          />
          <img
            className={Clothes2.bottom09}
            src={bottom_09_icon}
            onClick={() => handlebottomClick('bottom9')}
          />
          <img
            className={Clothes2.bottom10}
            src={bottom_10_icon}
            onClick={() => handlebottomClick('bottom10')}
          />

          {/* top */}
          <img
            className={Clothes2.top01}
            src={top_01_icon}
            onClick={() => handletopClick('top')}
          />
          <img
            className={Clothes2.top02}
            src={top_02_icon}
            onClick={() => handletopClick('top2')}
          />
          <img
            className={Clothes2.top03}
            src={top_03_icon}
            onClick={() => handletopClick('top3')}
          />
          <img
            className={Clothes2.top04}
            src={top_04_icon}
            onClick={() => handletopClick('top4')}
          />
          <img
            className={Clothes2.top05}
            src={top_05_icon}
            onClick={() => handletopClick('top5')}
          />
          <img
            className={Clothes2.top11}
            src={top_11_icon}
            onClick={() => handletopClick('top11')}
          />
          <img
            className={Clothes2.top07}
            src={top_07_icon}
            onClick={() => handletopClick('top7')}
          />
          <img
            className={Clothes2.top08}
            src={top_08_icon}
            onClick={() => handletopClick('top8')}
          />
           <img
            className={Clothes2.top09}
            src={top_09_icon}
            onClick={() => handletopClick('top9')}
          />
          <img
            className={Clothes2.top10}
            src={top_10_icon}
            onClick={() => handletopClick('top10')}
          />
          {/* 악세서리 */}
          <img
            className={Clothes2.acc01}
            src={acc_01_icon}
            onClick={() => handleaccClick('acc')}
          />
          <img
            className={Clothes2.acc02}
            src={acc_02_icon}
            onClick={() => handleacc2Click('acc2')}
          />
          <img
            className={Clothes2.acc03}
            src={acc_03_icon}
            onClick={() => handleacc3Click('acc3')}
          />
          <img
            className={Clothes2.acc04}
            src={acc_04_icon}
            onClick={() => handleacc4Click('acc4')}
          />
          <img
            className={Clothes2.acc05}
            src={acc_05_icon}
            onClick={() => handleacc5Click('acc5')}
          />
          <img
            className={Clothes2.acc06}
            src={acc_06_icon}
            onClick={() => handleacc6Click('acc6')}
          />
           <img
            className={Clothes2.acc11}
            src={acc_11_icon}
            onClick={() => handleacc7Click('acc11')}
          />
           <img
            className={Clothes2.acc08}
            src={acc_08_icon}
            onClick={() => handleacc8Click('acc8')}
          />
          <img
            className={Clothes2.acc09}
            src={acc_09_icon}
            onClick={() => handleacc9Click('acc9')}
          />
          <img
            className={Clothes2.acc10}
            src={acc_10_icon}
            onClick={() => handleacc10Click('acc10')}
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
            selectedeyes === 'eyes8' ? eyes08 :
            selectedeyes === 'eyes9' ? eyes09 :
            selectedeyes === 'eyes10' ? eyes10 :
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
            selectedhair === 'hair4' ? hair04 :
            selectedhair === 'hair5' ? hair05 :
            selectedhair === 'hair6' ? hair06 :
            selectedhair === 'hair7' ? hair07 :
            selectedhair === 'hair8' ? hair08 :
            selectedhair === 'hair9' ? hair09 :
            selectedhair === 'hair10' ? hair10 :
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
            selectedeyebrow === 'eyebrow5' ? eyebrow05 :
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
            selectedlips === 'lips7' ? lips07 :
            selectedlips === 'lips8' ? lips08 :
            selectedlips === 'lips9' ? lips09 :
            selectedlips === 'lips10' ? lips10 :
          null}
        />
      )}

{handleshoesClick && (
        <img
          className={Clothes2.head}
          src={
            selectedshoes === 'shoes' ? shoes01 :
            selectedshoes === 'shoes2' ? shoes02 :
            selectedshoes === 'shoes3' ? shoes03 :
            selectedshoes === 'shoes4' ? shoes04 :
            selectedshoes === 'shoes5' ? shoes05 :
            null}
        />
      )}

      {handlebottomClick && (
        <img
          className={Clothes2.body}
          src={
            selectedbottom === 'bottom' ? bottom01 :
            selectedbottom === 'bottom2' ? bottom02 :
            selectedbottom === 'bottom3' ? bottom03 :
            selectedbottom === 'bottom4' ? bottom04 :
            selectedbottom === 'bottom5' ? bottom05 :
            selectedbottom === 'bottom6' ? bottom06 :
            selectedbottom === 'bottom7' ? bottom07 :
            selectedbottom === 'bottom8' ? bottom08 :
            selectedbottom === 'bottom9' ? bottom09 :
            selectedbottom === 'bottom10' ? bottom10 :
          null}
        />
      )}

      {handletopClick && (
        <img
          className={Clothes2.body}
          src={
            selectedtop === 'top' ? top01 :
            selectedtop === 'top2' ? top02 :
            selectedtop === 'top3' ? top03 :
            selectedtop === 'top4' ? top04 :
            selectedtop === 'top5' ? top05 :
            selectedtop === 'top11' ? top11 :
            selectedtop === 'top7' ? top07 :
            selectedtop === 'top8' ? top08 :
            selectedtop === 'top9' ? top09 :
            selectedtop === 'top10' ? top10 :
            null}
        />
      )}

      {handleaccClick && (
        <img className={Clothes2.body} src={selectedacc === 'acc' ? acc01 :null}/>
      )}
      {handleacc2Click && (
        <img className={Clothes2.body} src={selectedacc2 === 'acc2' ? acc02 :null}/>
      )}
      {handleacc3Click && (
        <img className={Clothes2.body} src={selectedacc3 === 'acc3' ? acc03 :null}/>
      )}
      {handleacc4Click && (
        <img className={Clothes2.body} src={selectedacc4 === 'acc4' ? acc04 :null}/>
      )}
      {handleacc5Click && (
        <img className={Clothes2.body} src={selectedacc5 === 'acc5' ? acc05 :null}/>
      )}
      {handleacc6Click && (
        <img className={Clothes2.body} src={selectedacc6 === 'acc6' ? acc06 :null}/>
      )}
      {handleacc7Click && (
        <img className={Clothes2.body} src={selectedacc7 === 'acc11' ? acc11 :null}/>
      )}
      {handleacc8Click && (
        <img className={Clothes2.body} src={selectedacc8 === 'acc8' ? acc08 :null}/>
      )}
      {handleacc9Click && (
        <img className={Clothes2.body} src={selectedacc9 === 'acc9' ? acc09 :null}/>
      )}
      {handleacc10Click && (
        <img className={Clothes2.body} src={selectedacc10 === 'acc10' ? acc10 :null}/>
      )}
      
    </div>
  );
};

export default Clothes;