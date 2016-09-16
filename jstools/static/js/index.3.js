class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h2>{ "Howdy!" }</h2>
        <div>{ "O sh*t, waddup" }</div>
      </div>
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
