const App = () => {
  return (
    <div className="main">
      <div className="main__header">
        <h1>React App</h1>

        <br />

        <Main />
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <p style={{ fontSize: 17 }}>
        Start Editing <code>./js/Main.js</code> to Start
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
