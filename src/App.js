import './App.css';
import Nav from './nav'

function App() {
  return (
    <div className="App">
      <Nav current="home"/>
      <div className="homeContent">
        <div className="homeText">
          <div className="h5">So, you want to travel to</div>
          <div className="h1">SPACE</div>
          <div className="body">
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </div>
        </div>
        <div className="homeBtn">
          <button className="h4" id="exploreBtn">EXPLORE</button>
        </div>
      </div>
    </div>
  )
}

export default App;
