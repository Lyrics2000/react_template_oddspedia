import React from 'react'

function RightSide() {
    return (
        <aside className="aside">
        <div style={{display: ''}}>
          <div className="aside-btools">
            {/**/} 
            <p>Other betting tools</p>
            {/**/} <a href="/dropping-odds" className="aside-btools__link"><img alt="Dropping Odds Icon" src="https://cdn.oddspedia.com/images/static/icons/alarm.svg" width={20} height={20}  /> <span>Dropping Odds</span> <i className="icon-right" /></a> <a href="/valuebets" className="aside-btools__link"><img alt="Value Bets Icon" src="https://cdn.oddspedia.com/images/static/icons/diamond.svg" width={20} height={16}  /> <span>Value bets</span> <i className="icon-right" /></a> <a href="/blockedodds" className="aside-btools__link"><img alt="Blocked Odds Icon" src="https://cdn.oddspedia.com/images/static/icons/blocked.svg" width={20} height={20}  /> <span>Blocked odds</span> <i className="icon-right" /></a> <a href="/blocked-matches" className="aside-btools__link"><img alt="Blocked Odds Icon" src="https://cdn.oddspedia.com/images/static/icons/close-full.svg" width={20} height={20}  /> <span>Blocked matches</span> <i className="icon-right" /></a> 
            <div className="coverage-banner">
              <div className="coverage-banner__head">
                <div className="coverage-banner__logo"><img src="https://cdn.oddspedia.com/images/static/brand-logos/logo-light.svg" width={170} height={19} alt="Oddspedia Logo" data-not-lazy src="https://cdn.oddspedia.com/images/static/brand-logos/logo-light.svg" /></div>
                <div className="coverage-banner__slogan">It’s all about sports</div>
              </div>
              <div className="coverage-banner__body">
                <div className="coverage-banner__tabs">
                  <div className="coverage-banner__tabs__nav">
                    <ul>
                      <li><button type="button" className="active"><span><span className="icon-timer" /></span> <img src="https://cdn.oddspedia.com/images/static/gif/livescore.gif" alt="Livescore Icon" width={20} data-not-lazy src="https://cdn.oddspedia.com/images/static/gif/livescore.gif" /></button></li>
                      <li><button type="button"><span><span className="icon-football" /></span> <img src="https://cdn.oddspedia.com/images/static/gif/coverage.gif" alt="Sports Icon" width={26} data-not-lazy src="https://cdn.oddspedia.com/images/static/gif/coverage.gif" /></button></li>
                      <li><button type="button"><span><span className="icon-news" /></span> <img src="https://cdn.oddspedia.com/images/static/gif/news.gif" alt="News Icon" width={26} data-not-lazy src="https://cdn.oddspedia.com/images/static/gif/news.gif" /></button></li>
                      <li><button type="button"><span><span className="icon-odds" /></span> <img src="https://cdn.oddspedia.com/images/static/gif/odds.gif" alt="Odds Icon" width={26} data-not-lazy src="https://cdn.oddspedia.com/images/static/gif/odds.gif" /></button></li>
                      <li><button type="button"><span><span className="icon-betting-tools" /></span> <img src="https://cdn.oddspedia.com/images/static/gif/betting-tools.gif" alt="Betting Tools Icon" width={26} data-not-lazy src="https://cdn.oddspedia.com/images/static/gif/betting-tools.gif" /></button></li>
                      <li><button type="button"><span><span className="icon-bookie" /></span> <img src="https://cdn.oddspedia.com/images/static/gif/bookies.gif" alt="Sports Icon" width={22} data-not-lazy src="https://cdn.oddspedia.com/images/static/gif/bookies.gif" /></button></li>
                    </ul>
                  </div>
                  <div className="coverage-banner__tabs__body">
                    <div className="coverage-banner__tabs__body__inner">
                      <div className="coverage-banner__tabs__tab active">
                        <div className="coverage-banner__text">
                          <div className="coverage-banner__text__title">Fast live scores</div>
                          <div className="coverage-banner__text__entry">
                            <p>Follow the action - live results, odds, stats and a lot more updated instantly!</p>
                          </div>
                        </div>
                      </div>
                      <div className="coverage-banner__tabs__tab">
                        <div className="coverage-banner__text">
                          <div className="coverage-banner__text__title">Huge sport coverage</div>
                          <div className="coverage-banner__text__entry">
                            <p>30+ Sports in one place - we even have Bowls!</p>
                          </div>
                        </div>
                      </div>
                      <div className="coverage-banner__tabs__tab">
                        <div className="coverage-banner__text">
                          <div className="coverage-banner__text__title">Latest sport news</div>
                          <div className="coverage-banner__text__entry">
                            <p>Don’t miss out on anything - get all the breaking sports news in one place.</p>
                          </div>
                        </div>
                      </div>
                      <div className="coverage-banner__tabs__tab">
                        <div className="coverage-banner__text">
                          <div className="coverage-banner__text__title">Highest betting odds</div>
                          <div className="coverage-banner__text__entry">
                            <p>Find the best odds for your bet - compare odds across 68 Bookmakers worldwide!</p>
                          </div>
                        </div>
                      </div>
                      <div className="coverage-banner__tabs__tab">
                        <div className="coverage-banner__text">
                          <div className="coverage-banner__text__title">Powerful betting tools</div>
                          <div className="coverage-banner__text__entry">
                            <p>Enhance your betting - make an easy profit with our tools in no time!</p>
                          </div>
                        </div>
                      </div>
                      <div className="coverage-banner__tabs__tab">
                        <div className="coverage-banner__text">
                          <div className="coverage-banner__text__title">Bookmakers Rating</div>
                          <div className="coverage-banner__text__entry">
                            <p>Bet with the best - we compare and review every detail across 70+ bookmakers.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**/}
      </aside>
    
    )
}

export default RightSide
