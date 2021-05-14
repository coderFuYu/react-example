import React, {PureComponent} from 'react';
import Comment from "./comment";
import "./App.css"

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      title: "Hello React",
      desc: '你知道有这么一个团队吗？他们怀揣梦想，艰苦奋斗，作为一群大学生菜鸟，放弃了平时娱乐的时间，选择一起学习，一起成长，将平时学习的笔记，心得总结为文章，目的很简单，希望可以帮助向他们一样的菜鸟们？你想了解更多吗？快搜索微信公众号：小和山的菜鸟们，加入他们吧！',
      comments: [{
        headPortrait: 'https://xhs-rookies.com/img/rookie-icon.png',
        time: new Date(2021, 4, 14, 21, 2, 30),
        nickName: '小菜鸟',
        detail: '这是一个即将推出系列文章的团队，我们一起期待他们的作品吧！'
      }],
      text: ""
    }
  }

  render() {
    const {title, desc, comments, text} = this.state
    return (
        <div className='App'>
          <h2>{title}</h2>
          <div className='desc'>{desc}</div>
          <div className='comments'>
            <p>评论</p>

            {comments.map(item => {
              return <Comment key={item.time.getTime()} {...item}/>
            })}</div>

          <div className='newComment'>
            <textarea value={text} onChange={e => {
              this.setState({text: e.target.value})
            }} placeholder="请输入评论"></textarea>
            <button onClick={() => {
              this.addComment()
            }}>发表评论
            </button>
          </div>
        </div>
    );
  }

  changeText() {

  }

  addComment() {
    let detail = this.state.text
    this.setState({text: ''})
    let newComment = {
      headPortrait: 'https://xhs-rookies.com/img/rookie-icon.png',
      time: new Date(),
      nickName: '小菜鸟',
      detail
    }
    this.setState({
      comments: [newComment, ...this.state.comments]
    })
  }
}

App.propTypes = {};

export default App;
