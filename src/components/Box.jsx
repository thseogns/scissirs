import React from 'react'

const Box = (props) => {
    //승,패 유저와 컴퓨터가 반대로
    let result ;
    if(props.title == 'Computer' && props.result !=='tie' && props.result !==''){
        //컴퓨터, 비기지 않았고, 결과값이 비어있지 않을 때 
        result = props.result == 'win' ? 'lose' : 'win';
        //내 승리여부가 승리일 경우 result는 '패배...', 아닐 경우 '승리!'
    } 
    else { //위 경우가 아니면 props값 그대로 작성
        result = props.result;
    } 

    // let rrr;
    // if (props.title =='Computer' && props.result !== 'tie' && props.result !==''){
    //     rrr = props.result == 'win' ? 'lose' : 'win';
    // }
    // else {
    //     rrr = props.result;
    // }
    console.log('result?',result);

    return (
        <div className={`box ${result}`}>
            <h1>{props.title} Card</h1>
            <img src={props.item && props.item.img} className='item-img'/>
            <h2>{result}</h2>
        </div>
    )
}

export default Box