import React, { useState } from 'react';
import '../../../../src/App.css';
import { withRouter } from 'react-router-dom';

function NavBar() {

    //state는 value변경 함수를 써야한다.
    let [title, stitle] = useState(["개발일지","개발일지","개발일지"]);
    let [like,slike] = useState(0);
    
    //array나 object 자료형을 복사할땐 deep copy를 한다.
    function updatetitle(){
        // [...array] 서로 독립적인 값을 가지는 복사
        let newTitle = [...title];
        newTitle[0] = "일기장";
        stitle(newTitle)
    }

    return (
        <div className="NavBar">

            <div className="black-nav">
                <div>개발 Blog</div>
            </div>

            <button onClick={ updatetitle }> 버튼 </button>

            <div className="list">
                <h3> {title[0]} <span onClick={ ()=>{slike(like+1)} }>👍</span> {like} </h3>
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

        </div>
    );
}

export default withRouter(NavBar)
