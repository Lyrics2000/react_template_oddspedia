import React from 'react'

const TwoWay = ({icon_image,link_home,link_away,country,league,date,home_team,away_team,game_event_name,event_name_home,event_name_away,odds_home,odds_away,src_home,src_away,percentage}) => {
    return (
        <div className="btools-match">
        <div className="btools-match__header">
          <div className="btools-match-sport"><a href="/basketball"><i className={icon_image} /></a></div>
          <div className="btools-match-league"><a href="/basketball/usa">
              {country}
            </a> <a href="/basketball/usa/nba-summer-league">
              {league}
            </a>
          </div>
          <div className="btools-match-time"><span>{date}</span></div>
        </div>
        <div className="btools-match__body">
          <div className="btools-match-teams">
            <p><a href="/basketball/oklahoma-city-thunder-golden-state-warriors-276173">
                {home_team} <br />
                {away_team}
              </a>
            </p>
            <span>
              {game_event_name} {/**/}
            </span>
          </div>
          <div className="d-flex">
            <div className="btools-odd-mini">
              <div className="btools-odd-mini__header"><span>{event_name_home}</span></div>
              <span className="bookmaker-link cursor-pointer">
                <div className="btools-odd-mini__link">
                  <div  className="btools-odd-mini__link-wrapper">
                      
                    <a href = {link_home}>

                    <div className="btools-odd-mini__value"><span>{odds_home}</span></div>
                    <div className="btools-odd-mini__logo"><img src={src_home}  /></div>
                    </a>
                  </div>
                  {/**/}
                </div>
              </span>
            </div>
            <div className="btools-odd-mini">
              <div className="btools-odd-mini__header"><span>{event_name_away}</span></div>
              <span className="bookmaker-link cursor-pointer">
                <div className="btools-odd-mini__link">
                  <div className="btools-odd-mini__link-wrapper">
                    <a href={link_away}>
                    <div className="btools-odd-mini__value"><span>{odds_away}</span></div>
                    <div className="btools-odd-mini__logo"><img src={src_away}  /></div>
                    </a>
                  </div>
                  {/**/}
                </div>
              </span>
            </div>
          </div>
        </div>
        {/**/}{/**/} <a href className="btn-calculate-stakes"><i className="icon-betting-tools" />
          Calculate stakes
        </a> 
        <div className="sure-bet-cta"><span className="sure-bet-cta__inner"><strong>{percentage}</strong> <span><span>GUARANTEED</span> PROFIT</span></span> <a href="#" className="sure-bet-cta__outter">
            Calculate
            <i className="icon-betting-tools" /></a>
        </div>
      </div>
      
    )
}

export default TwoWay
