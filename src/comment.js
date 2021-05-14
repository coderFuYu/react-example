import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import "./comment.css"

class Comment extends PureComponent {
  render() {
    const {nickName, time, headPortrait, detail} = this.props
    return (
        <div className='comment'>
          <div className='info'>
            <img src={headPortrait} alt=""/>
            <div>
              <p className='nickname'>{nickName}</p>
              <p className='time'>{this.getTime(time)}</p>
            </div>
          </div>
          <div className='detail'>{detail}</div>
        </div>
    );
  }

  getTime(time) {
    const year = time.getFullYear()
    const month = time.getMonth()+1
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
}

export default Comment;

