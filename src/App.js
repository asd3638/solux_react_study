import './App.css'

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}></UserInfo>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
const comment = {
  date: new Date(),
  text: '리액트 0618 공부 인증',
  author: {
    name: '김지혜',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function App() {
  return (
    <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
    />
  );
}
export default App;
