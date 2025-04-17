
import { default as TabSVG } from "./TabSVG.svg";

function App() {
  return (
    <div className="box">
      <div className="bg">
        
        <div className="topnav">
          <a className="active" href="#home">Home</a>

          <img src={TabSVG} alt="TabSVG" style={{ height: "inherit", width: 104.5}}/>

          <svg width="104.5" height="inherit" viewBox="0 0 187 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38 47C38 59.5 33.5 85 0 85.5V0H186.5V85.5C161 85.5 149 66.5 149 46.5C149 36 138 13 112 13H74C50.5 13 38 34.5 38 47Z" fill="white"/>
            <text x="28%" y="75%" fill="black" stroke="black" font-size="35">News</text>
          </svg>
          <svg width="104.5" height="inherit" viewBox="0 0 187 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38 47C38 59.5 33.5 85 0 85.5V0H186.5V85.5C161 85.5 149 66.5 149 46.5C149 36 138 13 112 13H74C50.5 13 38 34.5 38 47Z" fill="white"/>
            <text x="28%" y="75%" fill="black" stroke="black" font-size="35">News</text>
          </svg>


          <a href="#news" style={{float:"right"}}>News</a>
          <a href="#contact" style={{float:"right"}}>Contact</a>
          <a href="#about" style={{float:"right"}}>About</a>
        </div>

        <div className="center">
        <img src={"logo.png"} alt="Logo" />;
        </div>
      </div>
    </div>
  );
}

export default App;
