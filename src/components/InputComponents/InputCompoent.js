import React, { Component } from "react";
import "./InputComponent.css";

export default class InputCompoent extends Component {
  constructor() {
    super();
    this.state = {
      inputMess: "",
    };
  }
  render() {
    return (
      <div className="sendEvaluate">
        <img
          className="headImg"
          src="https://xhs-rookies.com/img/rookie-icon.png"
          alt=""
        />
        <div className="inputBox">
          <textarea
            className="inputText"
            placeholder="请输入评论..."
            value={this.state.inputMess}
            onChange={(e) => this.getEvaluate(e)}
          />
          <div className="sendSubmit" onClick={() => this.sendSubmit()}>
            发表
          </div>
        </div>
      </div>
    );
  }
  // 获取输入内容
  getEvaluate(e) {
    this.setState({
      inputMess: e.target.value,
    });
  }
  // 点击执行提交
  sendSubmit() {
    this.props.sendSubmit(this.state.inputMess);
    // 清空输入框内容
    this.setState({
      inputMess: "",
    });
  }
}
