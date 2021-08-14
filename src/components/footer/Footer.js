import React from 'react'

const Footer = () => {
    return (
        <div id="footer" className="footer">
        <div className="footer__margin" />
        {/**/} 
        <div className="site-highlights">
          <div className="container">
            <ul>
              <li>
                <i className="icon-star2" /> 
                <div><strong>67</strong> <span>Bookmakers</span></div>
              </li>
              <li>
                <i className="icon-fire" /> 
                <div><strong>2218</strong> <span>Upcoming events</span></div>
              </li>
              <li>
                <i className="icon-cup-star" /> 
                <div><strong>8698</strong> <span>Competitions</span></div>
              </li>
              <li>
                <i className="icon-odds" /> 
                <div><strong>4 560 123</strong> <span>Odds</span></div>
              </li>
              <li>
                <i className="icon-archieve" /> 
                <div><strong>1 444 560 123</strong> <span>Archived odds</span></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__award"><img src="https://cdn.oddspedia.com/images/static/awards/award-desktop.png" alt="SBC Awards 2020 Product Innovation Winner" data-not-lazy width={1900} height={80} src="https://cdn.oddspedia.com/images/static/awards/award-desktop.png" className="d-none d-md-block" /> <img src="https://cdn.oddspedia.com/images/static/awards/award-mobile.png" alt="SBC Awards 2020 Product Innovation Winner" data-not-lazy width={375} height={80} src="https://cdn.oddspedia.com/images/static/awards/award-mobile.png" className="d-md-none" /></div>
        <div className="footer-ad">
          <div className="container">
            <p>This website includes <span className="footer-ad__pill">Advertising</span></p>
          </div>
        </div>
        <div className="container">
          <div className="footer-links">
            <div className="footer-links__left">
              <a href="/" className="logo nuxt-link-active"><img src="https://cdn.oddspedia.com/images/static/brand-logos/logo-dark.svg" alt="Logo" data-not-lazy width={180} height={33} src="https://cdn.oddspedia.com/images/static/brand-logos/logo-dark.svg" /></a> 
              <div className="language-selector mr-auto language-selector--dropdown-top">
                <button className="language-selector__toggle"><span className="language-selector__flag">
                  <img src="https://cdn.oddspedia.com/images/static/flags/flag-en.svg" className="lazyLoad isLoaded" alt="flag-en"  />
                  </span> <span className="language-selector__label">en</span> <i className="icon-down" /></button> 
                <div className="language-selector__dropdown"><a href="/us/surebets" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-us.svg" alt="flag-us"  /></span> <span className="language-selector__label">us</span></a><a href="/de/surebets" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-de.svg" alt="flag-de"  /></span> <span className="language-selector__label">de</span></a><a href="/it/surebets" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-it.svg" alt="flag-it"  /></span> <span className="language-selector__label">it</span></a><a href="/es/surebets" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-es.svg" alt="flag-es"  /></span> <span className="language-selector__label">es</span></a><a href="/br/apostas-certas" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-br.svg" alt="flag-br"  /></span> <span className="language-selector__label">br</span></a><a href="/ru/bukmekerskie-vilki" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-ru.svg" alt="flag-ru"  /></span> <span className="language-selector__label">ru</span></a><a href="/ja/surebets" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-ja.svg" alt="flag-ja"  /></span> <span className="language-selector__label">ja</span></a><a href="/bg/surebets" className="language-selector__item"><span className="language-selector__flag"><img src="https://cdn.oddspedia.com/images/static/flags/flag-bg.svg" alt="flag-bg"  /></span> <span className="language-selector__label">bg</span></a></div>
              </div>
            </div>
            <div className="footer-nav"><a href="https://widgets.oddspedia.com" target="_blank">Widgets for Publishers</a> <a href="#">Contact us</a> <a href="#">Privacy Policy</a> <a href="#">Terms&amp;Conditions</a> <a href="/imprint">
                Imprint
              </a> <a href="/franchise">
                Franchise
              </a>
            </div>
            <div className="footer-social">
              <ul className="socials socials--footer">
                <li><a href="https://www.facebook.com/oddspedia/" target="_blank"><img src="https://cdn.oddspedia.com/images/static/icons/facebook-alt.svg" alt="Facebook Icon" width={45} height={45} data-not-lazy src="https://cdn.oddspedia.com/images/static/icons/facebook-alt.svg" /></a></li>
                <li><a href="https://twitter.com/oddspedia/" target="_blank"><img src="https://cdn.oddspedia.com/images/static/icons/twitter-alt.svg" alt="Twitter Icon" width={45} height={45} data-not-lazy src="https://cdn.oddspedia.com/images/static/icons/twitter-alt.svg" /></a></li>
                <li><a href="https://www.instagram.com/oddspedia/" target="_blank"><img src="https://cdn.oddspedia.com/images/static/icons/instagram.svg" alt="Instagram Icon" data-not-lazy src="https://cdn.oddspedia.com/images/static/icons/instagram.svg" /></a></li>
                <li><a href="https://open.spotify.com/playlist/1LADgIbriy2Nwl2kR5ojyb?si=k8PEACu2RCiHZTo4O1eLyg" target="_blank"><img src="./images/static/icons/spotify.svg" alt="Spotify Icon" width={45} height={45} data-not-lazy src="https://cdn.oddspedia.com/images/static/icons/spotify.svg" /></a></li>
                <li><a href="https://www.youtube.com/channel/UCyBpvcWm933I6dEJi3c2q2Q" target="_blank"><img src="https://cdn.oddspedia.com/images/static/icons/youtube-alt.svg" alt="Youtube Icon" width={45} height={45} data-not-lazy src="https://cdn.oddspedia.com/images/static/icons/youtube-alt.svg" /></a></li>
                <li><a href="https://t.me/oddspedia" target="_blank"><img src="https://cdn.oddspedia.com/images/static/icons/telegram.svg" alt="Telegram Icon" width={45} height={45} data-not-lazy src="https://cdn.oddspedia.com/images/static/icons/telegram.svg" /></a></li>
                <li><a href="https://anchor.fm/oddspedia" target="_blank"><img src="https://cdn.oddspedia.com/images/static/icons/anchor-fm.svg" alt="Anchor.fm Icon" width={45} height={45} data-not-lazy src="https://cdn.oddspedia.com/images/static/icons/anchor-fm.svg" /></a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bar">
            <div className="socials-tv">
              <span className="socials-tv__label">As seen on TV:</span> 
              <ul>
                <li><img src="https://cdn.oddspedia.com/images/tv-channels/bein-white.png"  width={40} height={20} src="./images./images/placeholder.svg" /></li>
                <li><img src="https://cdn.oddspedia.com/images/tv-channels/dazn-white.png" width={20} height={20} src="./images./images/placeholder.svg" /></li>
                <li><img src="https://cdn.oddspedia.com/images/tv-channels/laliga-tv-white.png"  width={98} height={20} src="./images./images/placeholder.svg" /></li>
              </ul>
            </div>
            <div className="footer-regulators d-flex">
              <a href="https://www.gamblingtherapy.org/" target="_blank" rel="nofollow" className="d-flex align-center"><img src="https://cdn.oddspedia.com/images/static/trusting-signs/en/gamblingtherapy.png" alt="Gambling Therapy" width={58} height={20} data-not-lazy src="https://cdn.oddspedia.com/images/static/trusting-signs/en/gamblingtherapy.png" /></a><a href="https://www.gamstop.co.uk/" target="_blank" rel="nofollow" className="d-flex align-center"><img src="https://cdn.oddspedia.com/images/static/trusting-signs/en/gamsstop.png" alt="GamStop" width={58} height={20} data-not-lazy src="https://cdn.oddspedia.com/images/static/trusting-signs/en/gamsstop.png" /></a><a href="https://www.begambleaware.org" target="_blank" rel="nofollow" className="d-flex align-center"><img src="./images/static/trusting-signs/en/18-ga.png" alt="BeGambleAware" width={144} height={20} data-not-lazy src="./images/static/trusting-signs/en/18-ga.png" /></a> {/**/}
            </div>
            
            <div className="copyright">
              <p>© 2021 Oddspedia - All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Footer
