import BotTabRight from '../BotTabRight.png';
import BotTabCenter from '../BotTabCenter.png';
import Arrow from '../Arrow.png';

function BotTabShortest(props){
        return <div style={props.styles} id={props.id} className="BotBarShortest">
        <img style={{width:props.text.length*15+150, height:"200px"}} src={BotTabCenter}></img>
        <img style={{height:"200px"}}src={BotTabRight}></img>
        <div style={{position:"absolute", width:"100%", top:"30%", textAlign:"left", fontSize:"24px", fontWeight:"600"}}>
            {props.text}<br/><br/>
            <button style={{position:"relative",justifyContent:"center",textAlign:"left", width:"275px", height:"40px", borderRadius:"25px", backgroundColor:"white", fontSize:"25px", top:"0%", paddingLeft: "25px"}} onClick={props.customClickEvent}>
              Press Releases
              <img src={Arrow} style={{position:"absolute", marginLeft:"10px", width:"25px", top:"15%"}}></img>
            </button>
        </div>
      </div>
}

export default BotTabShortest;