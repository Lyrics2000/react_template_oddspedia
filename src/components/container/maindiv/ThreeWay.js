import React from 'react'

const ThreeWay = ({percentage,link_3,odds3,event_name_3,link_2,odds2,event_name_2,link_1,country,league,icon_image,date,home_team,away_team,event_name,event_name_1,odds1}) => {
    return (
        <div className="btools-match">
        <div className="btools-match__header">
          <div className="btools-match-sport"><a href="/football"><i className={icon_image} /></a></div>
          <div className="btools-match-league"><a href="/football/romania">
              {country}
            </a> <a href="/football/romania/liga-1">
              {league}
            </a>
          </div>
          <div className="btools-match-time"><span>{date}</span></div>
        </div>
        <div className="btools-match__body">
          <div className="btools-match-teams">
            <p><a href="/football/dinamo-bucuresti-farul-constanta-807160">
                {home_team} <br />
                {away_team}
              </a>
            </p>
            <span>
              {event_name} {/**/}
            </span>
          </div>
          <div className="d-flex">
            <div className="btools-odd-mini">
              <div className="btools-odd-mini__header"><span>{event_name_1}</span></div>
              <span className="bookmaker-link cursor-pointer">
                <div className="btools-odd-mini__link">
                  <div className="btools-odd-mini__link-wrapper">
                    <div className="btools-odd-mini__value"><span>{odds1}</span></div>
                    <div className="btools-odd-mini__logo"><img src={link_1}  /></div>
                  </div>
                  {/* <div className="btools-odd-mini__show-all"><a href="#">+ 1 More</a></div> */}
                </div>
              </span>
            </div>
            <div className="btools-odd-mini">
              <div className="btools-odd-mini__header"><span>{event_name_2}</span></div>
              <span className="bookmaker-link cursor-pointer">
                <div className="btools-odd-mini__link">
                  <div className="btools-odd-mini__link-wrapper">
                    <div className="btools-odd-mini__value"><span>{odds2}</span></div>
                    <div className="btools-odd-mini__logo"><img src={link_2}  /></div>
                  </div>
                  {/**/}
                </div>
              </span>
            </div>
            <div className="btools-odd-mini">
              <div className="btools-odd-mini__header"><span>{event_name_3}</span></div>
              <span className="bookmaker-link cursor-pointer">
                <div className="btools-odd-mini__link">
                  <div className="btools-odd-mini__link-wrapper">
                    <div className="btools-odd-mini__value"><span>{odds3}</span></div>
                    <div className="btools-odd-mini__logo"><img src={link_3}  /></div>
                  </div>
                  {/**/}
                </div>
              </span>
            </div>
          </div>
        </div>
        {/**/}{/**/}{/**/} <a href className="btn-calculate-stakes"><i className="icon-betting-tools" />
          Calculate stakes
        </a> 
        <div className="sure-bet-cta"><span className="sure-bet-cta__inner"><strong>{percentage}</strong> <span><span>GUARANTEED</span> PROFIT</span></span> <a href="#" className="sure-bet-cta__outter">
            Calculate
            <i className="icon-betting-tools" /></a>
        </div>
      </div>
      
      
    )
}

export default ThreeWay
