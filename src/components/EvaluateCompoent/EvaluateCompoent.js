import React, { Component } from 'react'
import './EvaluateCompoent.css'

export class EvaluateCompoent extends Component {
    render() {
        return (
            <div className="evaluateBox">
                <div className="titleText">大伙的评论</div>
                {/* 遍历留言列表 */}
                {this.props.evaluateList.map((item) => {
                  return (
                    <div className="evaluateItem">
                      <img className="headImg" src={item.imgUrl} />
                      <div className="senderProfile">
                        <div className="nickNameBox">
                          <div className="nickName">{item.nickName}</div>
                          <div className="sendTime">{item.sendTime}</div>
                        </div>
                        <div className="evaluate">{item.evaluate}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
        )
    }
}

export default EvaluateCompoent
