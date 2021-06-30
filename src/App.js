import React, { useState } from "react";
import Comment from "./comment";
import checkRole from "./checkRole";
import "./App.css";

function App(props) {
  const [title] = useState("Hello React");
  const [desc] = useState(
    "你知道有这么一个团队吗？他们怀揣梦想，艰苦奋斗，作为一群大学生菜鸟，放弃了平时娱乐的时间，选择一起学习，一起成长，将平时学习的笔记，心得总结为文章，目的很简单，希望可以帮助向他们一样的菜鸟们？你想了解更多吗？快搜索微信公众号：小和山的菜鸟们，加入他们吧！"
  );
  const [comments, setComments] = useState([
    {
      headPortrait: "https://xhs-rookies.com/img/rookie-icon.png",
      time: new Date(2021, 4, 14, 21, 2, 30),
      nickName: "小菜鸟",
      detail: "这是一个即将推出系列文章的团队，我们一起期待他们的作品吧！",
      liked: true,
      likeNum: 23,
    },
  ]);
  const [text, setText] = useState("");

  return (
    <div className="App">
      <span className="logout" onClick={handleLogout}>
        退出登录
      </span>
      <h2>{title}</h2>
      <div className="desc">{desc}</div>
      <div style={{ width: "100%" }}>
        <p className="commentsTitle">评论</p>
        {comments.map((item, index) => {
          return (
            <Comment
              key={item.time.getTime()}
              changeLike={() =>changeLike(index)}
              {...item}
            />
          );
        })}
      </div>

      <div className="newComment">
        <div style={{ display: "flex" }}>
          <img
            src="https://xhs-rookies.com/img/rookie-icon.png"
            className=""
            alt=""
          />
          <textarea
            value={text}
            onChange={changeText}
            placeholder="请输入评论"
          />
        </div>

        <div className="submit" onClick={addComment}>
          发表
        </div>
      </div>
    </div>
  );
  // 退出登录
  function handleLogout() {
    window.localStorage.islogin = "0";
    props.history.replace("/login");
  }
  // 改变text
  function changeText(e) {
    console.log(e.target.value);
    setText(e.target.value);
  }

  function changeLike(index) {
    console.log(index);
    let newArray = [...comments];
    let newItem = { ...newArray[index] };
    if (newItem.liked) {
      newItem.liked = false;
      newItem.likeNum -= 1;
    } else {
      newItem.liked = true;
      newItem.likeNum += 1;
    }
    newArray[index] = newItem;
    setComments(newArray);
  }

  function addComment() {
    if (!text) {
      alert("请输入留言内容");
      return;
    }
    let detail = text;
    setText("");
    let newComment = {
      headPortrait: "https://xhs-rookies.com/img/rookie-icon.png",
      time: new Date(),
      nickName: "小菜鸟",
      detail,
      liked: false,
      likeNum: 0,
    };
    setComments([newComment, ...comments]);
  }
}

// class App extends PureComponent {
//   constructor() {
//     super();
//     this.state = {
//       title: "Hello React",
//       desc: '你知道有这么一个团队吗？他们怀揣梦想，艰苦奋斗，作为一群大学生菜鸟，放弃了平时娱乐的时间，选择一起学习，一起成长，将平时学习的笔记，心得总结为文章，目的很简单，希望可以帮助向他们一样的菜鸟们？你想了解更多吗？快搜索微信公众号：小和山的菜鸟们，加入他们吧！',
//       comments: [{
//         headPortrait: 'https://xhs-rookies.com/img/rookie-icon.png',
//         time: new Date(2021, 4, 14, 21, 2, 30),
//         nickName: '小菜鸟',
//         detail: '这是一个即将推出系列文章的团队，我们一起期待他们的作品吧！',
//         liked: true,
//         likeNum: 23,
//       }],
//       text: ""
//     }
//   }

//   render() {
//     const {title, desc, comments, text} = this.state
//     return (
//         <div className='App'>
//           <span className="logout" onClick={() => {
//             this.handleLogout()
//           }}>退出登录</span>
//           <h2>{title}</h2>
//           <div className='desc'>{desc}</div>
//           <div style={{width: '100%'}}>
//             <p className='commentsTitle'>评论</p>
//             {comments.map((item, index) => {
//               return <Comment key={item.time.getTime()} changeLike={() => {
//                 this.changeLike(index)
//               }} {...item}/>
//             })}</div>

//           <div className='newComment'>
//             <div style={{display: 'flex',}}>
//               <img src="https://xhs-rookies.com/img/rookie-icon.png" className="" alt=""/>
//               <textarea value={text} onChange={e => this.changeText(e)} placeholder="请输入评论"/>
//             </div>

//             <div className="submit" onClick={() => {
//               this.addComment()
//             }}>发表
//             </div>
//           </div>
//         </div>
//     );
//   }

//   handleLogout() {
//     window.localStorage.islogin = '0'
//     this.props.history.replace("/login")
//   }

//   changeText(e) {
//     this.setState({text: e.target.value})
//   }

//   changeLike(index) {
//     let newArray = [...this.state.comments]
//     let newItem = {...newArray[index]}
//     if (newItem.liked) {
//       newItem.liked = false
//       newItem.likeNum -= 1
//     } else {
//       newItem.liked = true
//       newItem.likeNum += 1
//     }
//     newArray[index] = newItem
//     this.setState({
//       comments: newArray
//     })
//   }

//   addComment() {
//     if (!this.state.text) {
//       alert("请输入留言内容")
//       return;
//     }
//     let detail = this.state.text
//     this.setState({text: ''})
//     let newComment = {
//       headPortrait: 'https://xhs-rookies.com/img/rookie-icon.png',
//       time: new Date(),
//       nickName: '小菜鸟',
//       detail,
//       liked: false,
//       likeNum: 0
//     }
//     this.setState({
//       comments: [newComment, ...this.state.comments]
//     })
//   }
// }

App.propTypes = {};

export default checkRole(App);
