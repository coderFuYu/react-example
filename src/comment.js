import React  from 'react';
import "./comment.css"

function Comment(props){
    const {nickName, time, headPortrait, detail, liked, likeNum, changeLike} = props
    return (
        <div className='comment'>
          <div className='info'>
            <img src={headPortrait} alt="头像"/>
            <div>
              <p className='nickname'>{nickName}</p>
              <p className='time'>{getTime(time)}</p>
            </div>
          </div>
          <div className='detail' style={{marginBottom: '10px'}}>{detail}</div>
          <div className="toolBox">
            <span className={'likeBox ' + (liked ? 'like' : 'unlike')} onClick={changeLike}>
              <span className="icon"> </span>
              <span>{(!!likeNum) && likeNum}</span>
            </span>
            <span className="share icon"> </span>
          </div>
        </div>
    );

  function getTime(time) {
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const day = time.getDate()
    const hour = String(time.getHours()).padStart(2, '0')
    const minute = String(time.getMinutes()).padStart(2, '0')
    const second = String(time.getSeconds()).padStart(2, '0')
    return `${year}.${month}.${day}  ${hour}:${minute}:${second}`
  }
}



export default Comment;

