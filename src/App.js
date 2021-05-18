import React, { PureComponent } from "react";
import EvaluateCompoent from "./components/EvaluateCompoent/EvaluateCompoent";
import InputCompoent from "./components/InputComponents/InputCompoent";
import "./App.css";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      evaluateList: [
        {
          imgUrl: "https://xhs-rookies.com/img/rookie-icon.png",
          nickName: "菜鸟一号",
          sendTime: "2021.05.14",
          evaluate:
            "这是一个即将推出系列文章的团队，我们一起期待他们的作品吧！",
        },
      ],
      message: "你知道有这么一个团队吗？他们怀揣梦想，艰苦奋斗，作为一群大学生菜鸟，放弃了平时娱乐的时间，选择一起学习，一起成长，将平时学习的笔记，心得总结为文章，目的很简单，希望可以帮助向他们一样的菜鸟们？你想了解更多吗？快搜索微信公众号：小和山的菜鸟们，加入他们吧！",
    };
  }
  render() {
    return (
      <div className="root">
        <div className="title">Hello React</div>
        <p className="content">{this.state.message}</p>
        <EvaluateCompoent evaluateList={this.state.evaluateList} />
        <InputCompoent sendSubmit={(e) => this.sendSubmit(e)} />
      </div>
    );
  }

  sendSubmit(e) {
    let data = {
      imgUrl: "https://xhs-rookies.com/img/rookie-icon.png",
      nickName: "菜鸟一号",
      sendTime: "2021.05.14",
      evaluate: e,
    };
    this.setState({
      evaluateList: [data, ...this.state.evaluateList],
    });
  }
}

export default App;
