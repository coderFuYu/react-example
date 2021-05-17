import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import "./comment.css"

class Comment extends PureComponent {
  render() {
    const {nickName, time, headPortrait, detail, liked, likeNum, changeLike} = this.props
    return (
        <div className='comment'>
          <div className='info'>
            <img src={headPortrait} alt="头像"/>
            <div>
              <p className='nickname'>{nickName}</p>
              <p className='time'>{this.getTime(time)}</p>
            </div>
          </div>
          <div className='detail' style={{marginBottom: '10px'}}>{detail}</div>
          <div className="toolBox">
            <span className={'likeBox ' + (liked ? 'like' : 'unlike')} onClick={()=>changeLike()}>
              <span className="icon"> </span>
              <span>{(!!likeNum) && likeNum}</span>
            </span>
            <span className="share icon"> </span>
          </div>
        </div>
    );
  }

  getTime(time) {
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const day = time.getDate()
    const hour = String(time.getHours()).padStart(2, '0')
    const minute = String(time.getMinutes()).padStart(2, '0')
    const second = String(time.getSeconds()).padStart(2, '0')
    return `${year}.${month}.${day}  ${hour}:${minute}:${second}`
  }
}

Comment.propTypes = {
  nickName: PropTypes.string.isRequired,
  time: PropTypes.object.isRequired,
  headPortrait: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likeNum: PropTypes.number.isRequired,
  changeLike: PropTypes.func.isRequired
}

export default Comment;

