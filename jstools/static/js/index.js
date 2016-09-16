class RootComponent extends React.Component {
  render() {
    return (
      <div>{ "O sh*t, waddup" }</div>
    );
  }
}


ReactDOM.render(
  <RootComponent />,
  document.getElementById('root')
);
