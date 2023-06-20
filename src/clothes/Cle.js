import React from 'react';
import Clothes from './Clothes';

const Cle = () => {
  return (
    <div>
      <h1>완성된 캐릭터 화면</h1>
      <div id='Character'>
        {/* 몸 이미지 */}
        <div className="body">
          <img className={Clothes.body} src={Clothes.bodyImage} alt="Momb Image" />
        </div>
        {/* 머리 이미지 */}
        <div className="head">
          <img className={Clothes.head} src={Clothes.headImage} alt="Head Image" />
        </div>
      </div>
    </div>
  );
};

export default Cle;