class Greeting extends React.Component {
  render() {
    return (
      <span>{ "O sh*t, waddup" }</span>
    );
  }
}


class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <div>{"I am an excuse to use two components!"}</div>
        <Greeting />
      </div>
    );
  }
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
