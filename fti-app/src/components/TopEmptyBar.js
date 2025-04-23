import TopBar from '../TopBar.png';

function TopEmptyBar() {
  return<a>
    <a style={{height:"89px"}}>
              <svg width="81" height="89" viewBox="0 0 81 89" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0V88.5001C35.5001 88.5001 38 58.0001 38 50.5001C38 15.0001 81 16 81 16V0H0Z" fill="white"/>
    </svg>
    </a>
    
    <img src = {TopBar} style={{flex:"1", height:"89px", backgroundColor:"transparent"}}/>
    
    <a style={{height:"89px"}}>
    <svg width="81" height="89" viewBox="0 0 81 89" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M81 0V88.5001C45.4999 88.5001 43 58.0001 43 50.5001C43 15.0001 0 16 0 16V0H81Z" fill="white"/>
    </svg>
    </a></a>
}

export default TopEmptyBar;