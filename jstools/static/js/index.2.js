class Greeting extends React.Component {
  render() {
    return (
      <div>{ "O sh*t, waddup" }</div>
    );
  }
}


ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);
