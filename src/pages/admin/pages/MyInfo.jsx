import React from 'react';
import {useOutletContext} from "react-router-dom";
import {RiUser5Line} from "react-icons/ri";

export default function MyInfo() {
    const isActive = useOutletContext();

    return (
        <div className={`adminMain px-5 ${isActive}`}>

            <div id='adminHeader' className={"mt-5"}>
                <h1><RiUser5Line /> 나의 정보</h1>
                <hr />
            </div>

            <div id='adminContents'>
                <p>이곳에서 post요청을 실험합니다.</p>
                <p>데이터가 url + 쿼리스트링에 담겨 잘 전달되면 성공, 그렇지 않으면 실패입니다.</p>
            </div>

        </div>
    );
}