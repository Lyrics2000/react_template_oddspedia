import React from 'react'
import ThreeWay from './ThreeWay'
import TwoWay from './TwoWay'

const MainDv = () => {
    return (
        <div className="btools-matches">
        {/**/} 
      
       <TwoWay icon_image ="icon-table-tennis" link_away ="https://ww.facebook.com" link_home ="https://www.facebook.com" percentage = "30.0%" src_away="https://cdn.oddspedia.com/images/bookmakers/light-back/80x32/bet365-nj.png" src_home = "https://cdn.oddspedia.com/images/bookmakers/light-back/80x32/intertops.png" odds_home = "2.99" odds_away="7.098" event_name_home="1" event_name_away="2" game_event_name = "Home/Away" country = "USA" league ="kENYA" date="20th Aug 21, 21:30"  home_team="Tasker" away_team="Arsenal"/>
        
       <ThreeWay percentage="78.65%" link_3="https://cdn.oddspedia.com/images/bookmakers/light-back/80x32/betano.png" odds3="8.56" event_name_3="2" link_2="https://cdn.oddspedia.com/images/bookmakers/light-back/80x32/rivalo.png" odds2="9.8" event_name_2="X" link_1="https://cdn.oddspedia.com/images/bookmakers/light-back/80x32/lvbet.png" odds1 = "3.99" event_name_1="1" event_name = "1x2" away_team="Liverpool" home_team = "Arsenal" date="20th Aug 21, 21:30" icon_image="icon-football" country = "Kenya" league="premeir league"/>
      
  
       
        <div className="btools-pagination"><a href>Show more</a></div>
        {/**/}
      </div>
    
    )
}

export default MainDv
