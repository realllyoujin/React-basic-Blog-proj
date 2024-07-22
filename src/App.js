
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [topicName, topicChange] = useState(['인천 맛집 추천', '부평 냉면 맛집', '강남 놀거리 추천']);
  let [like, likeCount] = useState(0);

  //function topicChanger(){
  //  var newArray = [...topicName]; //
  //  newArray[0] = '속초 맛집 추천';
  //  topicChange( newArray );
  //}

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog📱</div>
      </div>
      <div className='list'>
        <h3> { topicName[0] } <span onClick={ ()=>{ likeCount(like+1) } }>👍🏻</span> {like} </h3>
        <p>발행일 : 7월 22일</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { topicName[1] } </h3>
        <p>발행일 : 7월 12일</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { topicName[2] } </h3>
        <p>발행일 : 7월 6일</p>
        <hr/>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal(){
  return(

    <div className='modal'>
        <h2>제목</h2>
        <p>닐짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
