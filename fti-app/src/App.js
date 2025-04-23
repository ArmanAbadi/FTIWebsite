import TopBar from './TopBar.png';

function App() {
  return (
    <div className="box">
      <div id="bg" className="bg">
        
        <div className="topnav">

          <div style={{display:"inline-block", backgroundColor:"white", padding: "0px 10px", cursor: "pointer"}} onClick={() => MainBackground()}>
            <div style={{display:"flex", backgroundColor:"white", height:"89px", textAlign: "center", justifyContent:"center", alignItems:"center"}}>
                <img src={"logoSmall.png"} alt="Logo"/>
            </div>
          </div>
          
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
          </a>


          <a id="LifeOffering" style={{display:"none", float:"right", height:"89px"}} onClick={() => LifeOffering()}>
            <svg width="355" height="89" viewBox="0 0 355 89" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 49.5C38 62 33.5 88.5 0 88.5V0H74H177.5H280.5H355V88.5C329.5 88.5 317.5 69.5 317.5 49.5C317.5 39 306.5 16 280.5 16C254.5 16 97.5 15.5 74 15.5C50.5 15.5 38 37 38 49.5Z" fill="white"/>
              <text x="28%" y="75%" fill="black" font-size="35">Life Offering</text>
            </svg>
          </a>
          
          <a id="LifeOfferingUnselected" style={{float:"right", height:"89px"}} onClick={() => LifeOffering()}>
            <svg width="355" height="89" viewBox="0 0 355 89" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="355" height="89" fill="white"/>
              <text x="28%" y="75%" fill="black" font-size="35">Life Offering</text>
            </svg>
          </a>

          <a id="Corporate" style={{display:"none",float:"right", height:"89px"}}>
            <svg width="355" height="89" viewBox="0 0 355 89" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 49.5C38 62 33.5 88.5 0 88.5V0H74H177.5H280.5H355V88.5C329.5 88.5 317.5 69.5 317.5 49.5C317.5 39 306.5 16 280.5 16C254.5 16 97.5 15.5 74 15.5C50.5 15.5 38 37 38 49.5Z" fill="white"/>
              <text x="28%" y="75%" fill="black" font-size="35">Corporate</text>
            </svg>
          </a>
          <a id="CorporateUnselected" style={{float:"right", height:"89px"}} onClick={() => Corporate()}>
            <svg width="355" height="89" viewBox="0 0 355 89" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="355" height="89" fill="white"/>
              <text x="28%" y="75%" fill="black" font-size="35">Corporate</text>
            </svg>
          </a>

          <a id="News" style={{display:"none",float:"right", height:"89px"}}>
          <svg width="219" height="89" viewBox="0 0 219 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38 50.2825C38 62.8531 33.5 88.4972 0 89V0H74H144.5H219V89C193.5 89 181.5 69.8927 181.5 49.7797C181.5 39.2203 170.5 16.0904 144.5 16.0904H74C50.5 16.0904 38 37.7119 38 50.2825Z" fill="white"/>
              <text x="30%" y="75%" fill="black" font-size="35">News</text>
            </svg>
          </a>
          <a id="NewsUnselected" style={{float:"right", height:"89px"}} onClick={() => News()}>
          <svg width="219" height="89" viewBox="0 0 219 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H219V89H0V0Z" fill="white"/>
              <text x="30%" y="75%" fill="black" font-size="35">News</text>
            </svg>
          </a>

          <a id="StockQuote" style={{display:"none", float:"right", height:"89px"}}>
            <svg width="318" height="89" viewBox="0 0 318 89" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 49.5C38 62 33.5 88.5 0 88.5V0H74H177.5H280.5H317.5V49.5C317.5 39 306.5 16 280.5 16C254.5 16 97.5 15.5 74 15.5C50.5 15.5 38 37 38 49.5Z" fill="white"/>
              <text x="28%" y="75%" fill="black" font-size="35">Stock Quote</text>
            </svg>
          </a>
          <a id="StockQuoteUnselected" style={{float:"right", height:"89px"}} onClick={() => StockQuote()}>
          <svg width="318" height="89" viewBox="0 0 318 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="318" height="89" fill="white"/>
              <text x="28%" y="75%" fill="black" font-size="35">Stock Quote</text>
            </svg>
          </a>
        </div>

        <div id="content">

          <div id="centerLogo" className="center">
            <img src={"logo.png"} alt="Logo" />;
          </div>
          
          <div id="CorporateContent" className="CorporateContent" style={{display:"none"}}>
            <div>
              <div className="Title">Management</div>
              <br/>
              <div className="Name">Stephen Brown</div>
              <div className="Description">President/CEO</div>
              <br/>
              <div className="Name">Steven Nguyen</div>
              <div className="Description">CFO</div><br/><br/>
            </div>

            <div>
              <div className="Title">Directors</div>
              <br/>
              <div className="Name">Stephen Brown</div>
              <div className="Description">Chairman/Director</div>
              <br/>
              <div className="Name">William Hullah</div>
              <div className="Description">Director</div>
              <br/>
              <div className="Name">Brian Hoffman</div>
              <div className="Description">Director</div>
              <br/>
              <div className="Name">Arthur Brown</div>
              <div className="Description">Director</div>
              <br/>
              <div className="Name">Douglas Magallon</div>
              <div className="Description">Director</div>
            </div>

            <div class="container">
                <div class="containerBox">
                      <div class="box-row">
                          <div class="box-cell box1">
                              <div className="Title">Lawyers</div>
                              <br/>
                              <div className="Name">McMillan LLP</div>
                              <br/>
                              <div className="Description">
                                Royal Centre, 1055 W Georgia St #1500, <br/>
                                Vancouver, British Columbia, <br/>
                                V6E 4N7, Canada </div>
                            </div>

                          <div class="box-cell box2">
                              <div className="Title">Transfer Agent</div>
                              <br/>
                              <div className="Name">
                                Computershare Trust <br/>
                                Company of Canada
                              </div>
                              <br/>
                              <div className="Description">
                                100 University Ave., 8th Floor, <br/>
                                Toronto, Ontario, M5J 2N1, Canada
                                </div>
                            </div>

                          <div class="box-cell box3">
                              <div className="Title">Auditor</div>
                              <br/>
                              <div className="Name">
                                NVS Professional <br/>
                                Corporation
                              </div>
                              <br/>
                              <div className="Description">
                                100 Allstate Parkway, Suite 303, <br/>
                                Markham, Ontario, L3R 6H3, Canada
                                 </div>
                            </div>
                        </div>
                  </div>
            </div>
          
          </div>

          <div id="NewsContent" className="CorporateContent" style={{display:"none"}}>
            <div>
                <div className="Title">Press Releases</div>
                <br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67f9210e1fda207cf2db105a/1744380175112/THIS+NEWS+RELEASE+IS+NOT+FOR+DISTRIBUTION+TO+U.pdf" className="NewsName">
                  FTI FOODTECH ANNOUNCES NON-BROKERED PRIVATE
                    <br/>PLACEMENT OF SHARES
                  </a>
                  <br/>
                  <div className="Description">April 11th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67f06d82502ec6621858e86f/1743809922821/FTI+Foodtech+International+-+News+Release+Withdrawing+February+Placement++%28April+4+2025%29.pdf" className="NewsName">
                  FTI FOODTECH WITHDRAWS FEBRUARY PLACEMENT
                  </a>
                  <br/>
                  <div className="Description">April 4th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67f0206abd5fe61be95372b1/1743790187189/FTI_PR_Apr+4+2025.pdf" className="NewsName">
                  FTI FOODTECH ANNOUNCES NON-BROKERED PRIVATE
                  <br/>PLACEMENT OF SHARES
                  </a>
                  <br/>
                  <div className="Description">April 4th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef1f4ed0c6b6cfb15a189/1743712756580/FTI_PR_March+20+2025.pdf" className="NewsName">
                  FTI Foodtech International Acquires the Brand PURE DEFENDER
                  </a>
                  <br/>
                  <div className="Description">March 20th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef1e9b4382476022b9c7c/1743712745923/FTI_PR_March+3+2025.pdf" className="NewsName">
                  FTI Foodtech International Adds a New Chief Financial Officer
                  </a>
                  <br/>
                  <div className="Description">March 3th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef1dd7d5f600d81295448/1743712734165/FTI_PR_Feb+28+2025.pdf" className="NewsName">
                  FTI Foodtech International Acquires the Brand 
                  <br/>NAYELLE Skincare
                  </a>
                  <br/>
                  <div className="Description">Feb 28th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef1ce015456611d73f34e/1743712718709/FTI_PR_Feb+27+2025.pdf" className="NewsName">
                  FTI Foodtech International Inc. has developed a Crypto 
                  <br/>Currency called “SMASHFACE”
                  </a>
                  <br/>
                  <div className="Description">Feb 27th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef1c250f7a360a96d4e40/1743712706531/FTI_PR_Feb+26+2025.pdf" className="NewsName">
                  FTI FOODTECH ANNOUNCES SHARES FOR DEBT TRANSACTION.
                  </a>
                  <br/>
                  <div className="Description">Feb 26th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef1b21003507d1d88c92d/1743712690864/FTI_PR_Feb+11+2025.pdf" className="NewsName">
                  FTI Foodtech International Inc. has closed its previously
                  <br/>disclosed non-brokered private placement.
                  </a>
                  <br/>
                  <div className="Description">Feb 11th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef196e031bc19f4ecfeca/1743712662456/FTI_PR_Feb+5+2025.pdf" className="NewsName">
                  FTI Foodtech International Inc. has developed and is
                  <br/>scheduling the launch of its online retail-bartering platform
                  </a>
                  <br/>
                  <div className="Description">Feb 5th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef186d32be17af82cd3ee/1743712647050/FT_PR_Feb+3+2025.pdf" className="NewsName">
                  FTI HIRES VENTURE LIQUIDITY PROVIDERS AS MARKET-MAKER.
                  </a>
                  <br/>
                  <div className="Description">Feb 3th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef172635a0f73f3286d92/1743712627306/FTI_PR_Jan+29+2025.pdf" className="NewsName">
                  FTI Foodtech International Partners with Genesis
                  <br/> Cosmeceuticals to launch/market and Distribute a
                  <br/> Groundbreaking Peptide G Formula
                  </a>
                  <br/>
                  <div className="Description">Jan 29th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef16249a5d12d9ae7538b/1743712610522/FTI_PR_Jan+27+2025.pdf" className="NewsName">
                  FTI FOODTECH INTERNATIONAL TO LAUNCH FACEFACTOR.AI
                  </a>
                  <br/>
                  <div className="Description">Jan 27th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eef14c635a0f73f3285e68/1743712588962/FTI_PR_Jan+15+2025.pdf" className="NewsName">
                  FTI FOODTECH INTERNATIONAL INC. INTRODUCES NEW
                  <br/>CHAIRMAN
                  </a>
                  <br/>
                  <div className="Description">Jan 15th, 2025</div>
                </div><br/><br/>

                <div>
                  <a href="https://static1.squarespace.com/static/67ed877682298565186da10f/t/67eeee1ff0b38f3a5c43878e/1743711775958/FTI_PR_Nov+27+2024.pdf" className="NewsName">
                    FTI Foodtech International Inc. Announces
                    <br/>Agreement with Portofino Cosmetic Inc.
                  </a>
                  <br/>
                  <div className="Description">Nov 27th, 2024</div>
                </div><br/><br/>

              </div>
          </div>

        </div>
        
      </div>
    </div>
  );
}

//<div style={{flex:"1", height:"89px", backgroundColor:"transparent"}}></div>

export default App;

function LifeOffering(){
  // DeselectAll();

  // DisplayBlock("LifeOffering");
  // DisplayNone("LifeOfferingUnselected");

  window.open("https://static1.squarespace.com/static/67ed877682298565186da10f/t/67f01fdb2674ed73dbf1e076/1743790044340/FTI+Foodtech+International+-+Form+45-106F19+LIFE+Offering+Document+%28Listed+Issuer+Financing+Document%29+-+Common+Shares+%28April+4+2025%29.pdf");
}

function Corporate(){
  DeselectAll();

  DisplayBlock("Corporate");
  DisplayNone("CorporateUnselected");
  DisplayBlock("CorporateContent");
}

function StockQuote(){
  // DeselectAll();
  
  // DisplayBlock("StockQuote");
  // DisplayNone("StockQuoteUnselected");

  window.open("https://money.tmx.com/en/quote/FTI");

}

function News(){
  DeselectAll();

  DisplayBlock("News");
  DisplayNone("NewsUnselected");
  DisplayBlock("NewsContent");
}

function DeselectAll(){
  TabSelected();

  DisplayBlock("LifeOfferingUnselected");
  DisplayBlock("CorporateUnselected");
  DisplayBlock("StockQuoteUnselected");
  DisplayBlock("NewsUnselected");

  DisplayNone("LifeOffering");
  DisplayNone("Corporate");
  DisplayNone("StockQuote");
  DisplayNone("News");

  DisplayNone("centerLogo");
  DisplayNone("CorporateContent");
  DisplayNone("NewsContent");
}

function DisplayBlock(element){
  var T = document.getElementById(element);
  T.style.display = "block";
}
function DisplayNone(element){
  var T = document.getElementById(element);
  T.style.display = "none";
}

function TabSelected(){
  var bg = document.getElementById("bg");
  bg.style.backgroundImage = "url('backgroundPale.png')";
}

function MainBackground(){
  DeselectAll();
  var bg = document.getElementById("bg");
  bg.style.backgroundImage = "url('background.png')";
  DisplayBlock("centerLogo");
}