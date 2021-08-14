import React from 'react'

const Header = () => {
    return (
        <header id="header-desktop" className="header">
        {/**/} 
        <div className="container">
          <div className="header__wrap">
            <div className="header__inner">
              <a href="/" className="logo"><img src="https://cdn.oddspedia.com/images/static/brand-logos/logo-dark.svg" width={220} height={40} alt="Oddspedia Logo" data-not-lazy src="https://cdn.oddspedia.com/images/static/brand-logos/logo-dark.svg" /></a> 
              <div className="language-selector mr-auto">
                <button className="language-selector__toggle"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-en.svg" alt="flag-en"  /></span> <span className="language-selector__label">en</span> <i className="icon-down" /></button> 
                <div className="language-selector__dropdown"><a href="/us/surebets" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-us.svg" alt="flag-us"  /></span> <span className="language-selector__label">us</span></a><a href="/de/surebets" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-de.svg" alt="flag-de"  /></span> <span className="language-selector__label">de</span></a><a href="/it/surebets" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-it.svg" alt="flag-it"  /></span> <span className="language-selector__label">it</span></a><a href="/es/surebets" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-es.svg" alt="flag-es"  /></span> <span className="language-selector__label">es</span></a><a href="/br/apostas-certas" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-br.svg" alt="flag-br"  /></span> <span className="language-selector__label">br</span></a><a href="/ru/bukmekerskie-vilki" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-ru.svg" alt="flag-ru"  /></span> <span className="language-selector__label">ru</span></a><a href="/ja/surebets" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-ja.svg" alt="flag-ja"  /></span> <span className="language-selector__label">ja</span></a><a href="/bg/surebets" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-bg.svg" alt="flag-bg"  /></span> <span className="language-selector__label">bg</span></a></div>
              </div>
            </div>
            <div className="header__inner">
              <nav className="navigation">
                <ul>
                  <li>
                    <a href="/" title="Scores" className="navigation__link nuxt-link-active">
                      <div className="navigation__link-inner"><span className="navigation__icon"><i className="icon-football" /></span> <span className="navigation__text">Scores</span></div>
                    </a>
                  </li>
                  <li>
                    <a href="/news" title="News" className="navigation__link">
                      <div className="navigation__link-inner"><span className="navigation__icon"><i className="icon-news" /></span> <span className="navigation__text">News</span></div>
                    </a>
                  </li>
                  <li>
                    <a href="/odds" title="Odds" className="navigation__link">
                      <div className="navigation__link-inner"><span className="navigation__icon"><i className="icon-odds" /></span> <span className="navigation__text">Odds</span></div>
                    </a>
                  </li>
                  <li>
                    <span className="navigation__link">
                      <div className="navigation__link-inner"><span className="navigation__icon"><i className="icon-bookie" /></span> <span className="navigation__text">Bookies</span> <i className="icon-down navigation__arrow" /></div>
                    </span>
                    <ul className="nav-dropdown nav-dropdown--bookies">
                      <li className="nav-dropdown__item">
                        <div className="nav-bookmakers-list">
                          <div className="search-default search-default--gray search-default--rounded">
                            <form action className="search-default__inner">
                              <div className="search-default__icon"><span className="icon-search" /></div>
                              <input type="search" placeholder="Search bookmakers" defaultValue className="search-default__input" /> {/**/}
                            </form>
                          </div>
                          {/**/}
                        </div>
                      </li>
                      <li className="nav-dropdown__item"><a href="/bookmakers" title="Top Bookmakers" className="nav-dropdown__link"><span className="nav-dropdown__icon"><i className="icon-topbookie" /></span> <span className="nav-dropdown__text">Top Bookmakers</span></a></li>
                      <li className="nav-dropdown__item"><a href="/bookmakers/betting-offers" title="Betting Bonuses" className="nav-dropdown__link"><span className="nav-dropdown__icon"><i className="icon-bettingbonus" /></span> <span className="nav-dropdown__text">Betting Bonuses</span></a></li>
                      <li className="nav-dropdown__item"><a href="/bookmakers#new" title="New Bookmakers" className="nav-dropdown__link"><span className="nav-dropdown__icon"><i className="icon-newbookie" /></span> <span className="nav-dropdown__text">New Bookmakers</span></a></li>
                      <li className="nav-dropdown__item"><a href="/bookmakers/payment-methods" title="Payment Methods" className="nav-dropdown__link"><span className="nav-dropdown__icon"><i className="icon-paymentmethoods" /></span> <span className="nav-dropdown__text">Payment Methods</span></a></li>
                      <li className="nav-dropdown__item"><a href="/bookmakers#black-list" title="Blacklisted" className="nav-dropdown__link"><span className="nav-dropdown__icon"><i className="icon-blacklisted" /></span> <span className="nav-dropdown__text">Blacklisted</span></a></li>
                      {/**/} {/**/}
                    </ul>
                  </li>
                  <li>
                    <span className="navigation__link nuxt-link-exact-active">
                      <div className="navigation__link-inner"><span className="navigation__icon"><i className="icon-betting-tools" /></span> <span className="navigation__text">Betting tools</span> <i className="icon-down navigation__arrow" /></div>
                    </span>
                    <ul className="nav-dropdown">
                      <li className="nav-dropdown__item"><a href="/surebets" aria-current="page" title="Sure Bets" className="nav-dropdown__link nuxt-link-exact-active nuxt-link-active"><span className="nav-dropdown__icon"><img src="https://cdn.oddspedia.com/images/static/icons/money.svg" width={20} height={20} alt="Sure Bets Icon"  /></span> <span className="nav-dropdown__text">Sure Bets</span> <i className="icon-right nav-dropdown__arrow" /></a></li>
                      <li className="nav-dropdown__item"><a href="/dropping-odds" title="Dropping Odds" className="nav-dropdown__link"><span className="nav-dropdown__icon"><img src="https://cdn.oddspedia.com/images/static/icons/alarm.svg" width={20} height={20} alt="Dropping Odds Icon"  /></span> <span className="nav-dropdown__text">Dropping Odds</span> <i className="icon-right nav-dropdown__arrow" /></a></li>
                      <li className="nav-dropdown__item"><a href="/valuebets" title="Value bets" className="nav-dropdown__link"><span className="nav-dropdown__icon"><img src="https://cdn.oddspedia.com/images/static/icons/diamond.svg" width={20} height={16} alt="Value Bets Icon"  /></span> <span className="nav-dropdown__text">Value bets</span> <i className="icon-right nav-dropdown__arrow" /></a></li>
                      <li className="nav-dropdown__item"><a href="/blockedodds" title="Blocked odds" className="nav-dropdown__link"><span className="nav-dropdown__icon"><img src="https://cdn.oddspedia.com/images/static/icons/blocked.svg" width={20} height={20} alt="Blocked Odds Icon"  /></span> <span className="nav-dropdown__text">Blocked odds</span> <i className="icon-right nav-dropdown__arrow" /></a></li>
                      <li className="nav-dropdown__item"><a href="/blocked-matches" title="Blocked matches" className="nav-dropdown__link"><span className="nav-dropdown__icon"><img src="https://cdn.oddspedia.com/images/static/icons/close-full.svg" width={20} height={20} alt="Blocked Matches Icon"  /></span> <span className="nav-dropdown__text">Blocked matches</span> <i className="icon-right nav-dropdown__arrow" /></a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      
      
    )
}

export default Header
