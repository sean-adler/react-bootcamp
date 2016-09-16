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


ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);
