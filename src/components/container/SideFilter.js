import React from 'react'

const SideFilter = () => {
    return (
        <aside className="sidebar">
        <div className="app-filters">
          <div className="app-filters__header">
            <p><i className="icon-filter" /> <span>Filter by</span></p>
            <div style={{display: 'none'}}><a href><i className="icon-close" />
                Reset filters
              </a>
            </div>
          </div>
          {/**/} 
          <div className="app-filter">
            <a href="#" className="app-filter__head expanded"><span>Sport</span></a> 
            <div className="app-filter__reset" style={{display: 'none'}}><a href><i className="icon-close" />
                Clear
              </a>
            </div>
            <div className="app-filter__body app-filter__body--scrollable" style={{display: ''}}>
              <a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Mixed Martial Arts (9)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>League Of Legends (4)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Volleyball (1)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Basketball (7)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Tennis (1)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Rugby League (2)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Aussie Rules (1)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Rugby Union (1)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Ice Hockey (7)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Overwatch (3)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>CS GO (10)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>American Football (1)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Dota 2 (3)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Baseball (1)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Football (101)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Table Tennis (6)</span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>Boxing (1)</span> <i className="icon-check" /></a> {/**/}
            </div>
          </div>
          <div className="app-filter">
            <a href="#" className="app-filter__head expanded"><span>Betting markets</span></a> 
            <div className="app-filter__reset" style={{display: 'none'}}><a href><i className="icon-close" />
                Clear
              </a>
            </div>
            <div className="app-filter__body" style={{display: ''}}>
              <a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>
                  3-way Outcomes (81)
                </span> <i className="icon-check" /></a><a href="#" className="app-filter__item-checkbox" style={{display: ''}}><span>
                  2-way Outcomes (78)
                </span> <i className="icon-check" /></a> {/**/}
            </div>
          </div>
          {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} {/**/} 
          <div className="app-filter">
            <a href="#" className="app-filter__head expanded"><span>Profit percentage</span></a> 
            <div className="app-filter__reset" style={{display: 'none'}}><a href><i className="icon-close" />
                Clear
              </a>
            </div>
            <div className="app-filter__body" style={{display: ''}}>
              <div value>
                <div className="range-input range-input--labels-top">
                  <div className="range-input__labels">
                    <span>%</span> {/**/} 
                    <span>
                      %{/**/}
                    </span>
                    {/**/}
                  </div>
                  <div />
                </div>
                {/**/}
              </div>
            </div>
          </div>
          <div className="app-filter app-filter--bookmakers">
            <a href="#" className="app-filter__head expanded"><span>Bookmakers</span></a> 
            <div className="app-filter__reset" style={{display: 'none'}}><a href><i className="icon-close" />
                Clear
              </a>
            </div>
            <div className="app-filter__search" style={{display: ''}}><input type="text" name="bookmaker_search" id="bookmaker_search" placeholder="Search bookmakers" defaultValue /> <i className="icon-search" /></div>
            <div className="app-filter__body app-filter__body--scrollable" style={{display: ''}}>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/1xbet.png" alt="1xbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betway.png" alt="betway-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/22bet.png" alt="22bet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betfair.png" alt="betfair-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betvictor.png" alt="betvictor-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/bwin.png" alt="bwin-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betobet.png" alt="betobet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/melbet.png" alt="melbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/vbet.png" alt="vbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/stake-com.png" alt="stake-com-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/marathonbet.png" alt="marathonbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/megapari-sport.png" alt="megapari-sport-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/bet-at-home.png" alt="bet-at-home-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/interwetten.png" alt="interwetten-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/parimatch.png" alt="parimatch-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betsafe.png" alt="betsafe-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/leovegas-sport.png" alt="leovegas-sport-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/jackone.png" alt="jackone-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/comeon.png" alt="comeon-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/bet90.png" alt="bet90-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/casumo-sport.png" alt="casumo-sport-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betmgm.png" alt="betmgm-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/bet365-nj.png" alt="bet365-nj-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/draftkings.png" alt="draftkings-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/the-score.png" alt="the-score-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/borgata.png" alt="borgata-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betrivers.png" alt="betrivers-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/golden-nugget.png" alt="golden-nugget-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betamerica.png" alt="betamerica-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/sugarhouse.png" alt="sugarhouse-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/wynnbet.png" alt="wynnbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/bet9ja.png" alt="bet9ja-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/fanduel.png" alt="fanduel-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/foxbet.png" alt="foxbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/netbet-it.png" alt="netbet-it-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/parx.png" alt="parx-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/888sport.png" alt="888sport-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/pointsbet.png" alt="pointsbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/resorts.png" alt="resorts-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/palmsbet.png" alt="palmsbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/caesars.png" alt="caesars-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/10bet.png" alt="10bet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/novibet.png" alt="novibet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betworld.png" alt="betworld-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/watch-and-wager.png" alt="watch-and-wager-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/lvbet.png" alt="lvbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/eurobet.png" alt="eurobet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/mr-green-sport.png" alt="mr-green-sport-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/ggbet-ru.png" alt="ggbet-ru-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/tonybet.png" alt="tonybet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/sportingbet.png" alt="sportingbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/sisal.png" alt="sisal-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/bet3000.png" alt="bet3000-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/gg-bet.png" alt="gg-bet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/parimatch-ru.png" alt="parimatch-ru-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/marathonbet-ru.png" alt="marathonbet-ru-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/1xstavka.png" alt="1xstavka-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/leon-ru.png" alt="leon-ru-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/mybet.png" alt="mybet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/circus.png" alt="circus-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/ladbrokes.png" alt="ladbrokes-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/coral.png" alt="coral-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/bethard.png" alt="bethard-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/sbobet.png" alt="sbobet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/luckia.png" alt="luckia-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/noxwin.png" alt="noxwin-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/netbet.png" alt="netbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/unibet.png" alt="unibet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/sts.png" alt="sts-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/bet-pt.png" alt="bet-pt-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/nossaaposta.png" alt="nossaaposta-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betano.png" alt="betano-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/dafabet.png" alt="dafabet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/rivalo.png" alt="rivalo-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/codere-sport.png" alt="codere-sport-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/melbet-ru.png" alt="melbet-ru-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/boylesports.png" alt="boylesports-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betclic.png" alt="betclic-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/lsbet.png" alt="lsbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betsson.png" alt="betsson-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/bodog.png" alt="bodog-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/parimatch-uk.png" alt="parimatch-uk-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/bildbet.png" alt="bildbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/bovada.png" alt="bovada-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/energybet.png" alt="energybet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/guts.png" alt="guts-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/intertops.png" alt="intertops-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/jetbull.png" alt="jetbull-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/neo.bet.png" alt="neo.bet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/nordicbet.png" alt="nordicbet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/tipico.png" alt="tipico-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/paddy-power.png" alt="paddy-power-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/planetwin365.png" alt="planetwin365-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/bets10.png" alt="bets10-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betfred.png" alt="betfred-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/snai.png" alt="snai-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/marcaapuestas.png" alt="marcaapuestas-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/placard-pt.png" alt="placard-pt-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/paston.png" alt="paston-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/skybet.png" alt="skybet-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betmotion-sport.png" alt="betmotion-sport-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betboo-sport.png" alt="betboo-sport-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/sportium.png" alt="sportium-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/fonbet-ru.png" alt="fonbet-ru-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/caliente.png" alt="caliente-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betflag.png" alt="betflag-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/betfair-ex.png" alt="betfair-ex-logo"  /></a></div>
              <div style={{display: ''}}><a href="#" className="app-filter__item-bookmaker"><img src="https://cdn.oddspedia.com/images/bookmakers/light-back/120x48/vivagol.png" alt="vivagol-logo"  /></a></div>
            </div>
          </div>
          <div className="app-filters-apply"><a href>Apply</a></div>
        </div>
      </aside>
     
     
    )
}

export default SideFilter
