import './App.css';
// import 'semantic-ui-css/semantic.min.css'
import ImageContainer from './ImageContainer';
import StateSelection from './StateSelection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageContainer />
        <p>
          What state am I from?
        </p>
        <StateSelection />
        {/* <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form> */}
      </header>
    </div>
  );
}

export default App;
