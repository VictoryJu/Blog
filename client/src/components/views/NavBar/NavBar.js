import React, { useState } from 'react';
import '../../../../src/App.css';
import { withRouter } from 'react-router-dom';

function NavBar() {

    //state는 value변경 함수를 써야한다.
    let [title, stitle] = useState(["개발일지", "개발일지", "개발일지"]);
    let [like, slike] = useState(0);

    //array나 object 자료형을 복사할땐 deep copy를 한다.
    function updatetitle() {
        // [...array] 서로 독립적인 값을 가지는 복사
        //state의 값을 변경해야할떄는 꼭 값을 복사해서 하자.
        let newTitle = [...title];
        newTitle[0] = "일기장";
        stitle(newTitle)
    }

    return (
        <div className="NavBar">

            <div className="black-nav">
                <div>개발 Blog</div>
            </div>

            <button onClick={updatetitle}> 버튼 </button>

            <div className="list">
                <h3> {title[0]} <span onClick={() => { slike(like + 1) }}>👍</span> {like} </h3>
                <p> 1월 6일 </p>
                <hr />
            </div>

            <div className="list">
                <h3> {title[1]} </h3>
                <p> 1월 6일 </p>
                <hr />
            </div>

            <div className="list">
                <h3> {title[2]} </h3>
                <p> 1월 6일 </p>
                <hr />
            </div>

            <Modal />
        </div>
    );
}

//Component 만드는법
// 1. 함수 만들고 이름짓고
// 2. 축약을 원하는 html 작성
// 3. 원하는 곳에서 <함수명/>
// 항상 이름은 대문자로 시작
// return 안에 있는 태그는 하나로 묶어야함
function Modal() {
    return (
        // <> </> 로 의미없는 div태그를 대신할수있음
        <>
            <div className="modal">
                <h2>제목</h2>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        </>
    )
}


export default withRouter(NavBar)
