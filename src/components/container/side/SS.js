import React from 'react'

const SS = () => {
    return (
        <div className="container">
        <div className="breadcrumbs">
          <ul>
            <li><a href="/" className="nuxt-link-active"><i className="icon-home" /></a></li>
            <li><span>
                Sure Bets
              </span>
            </li>
          </ul>
        </div>
        <div className="meta-actions color-grey-2">
          <ul>
            <li>
              <div className="dropdown bm-dropdown dropdown__list--absolute dropdown__list--bm">
                <button className="dropdown__toggle">
                  <span className="dropdown__toggle-text">Bookmakers:</span> <span className="dropdown__toggle-current"><i className="icon-globe" /></span> <span className="dropdown__toggle-text">Bookmakers</span> 
                  <span className="dropdown__toggle__icon">
                    <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" fill="currentColor" />
                      <path d="M0-.75h24v24H0z" fill="none" />
                    </svg>
                  </span>
                </button>
                <div className="dropdown__content">
                  <span className="bm-dropdown__title">
                    Accepting players from:
                  </span> 
                  <div className="dropdown__search m-0"><input type="text" placeholder="Search country" defaultValue /> <i className="icon-search color-grey-2" /></div>
                  <div className="bm-dropdown__list"><button title="Germany" className="dropdown__list-item t-left t-uppercase"><img src="https://cdn.oddspedia.com/images/categories/germany.svg" alt="Germany" width={16} height={16}  className="dropdown__list-icon" />
                      Germany
                    </button><button title="Brazil" className="dropdown__list-item t-left t-uppercase"><img src="https://cdn.oddspedia.com/images/categories/brazil.svg" alt="Brazil" width={16} height={16}  className="dropdown__list-icon" />
                      Brazil
                    </button><button title="Spain" className="dropdown__list-item t-left t-uppercase"><img src="https://cdn.oddspedia.com/images/categories/spain.svg" alt="Spain" width={16} height={16}  className="dropdown__list-icon" />
                      Spain
                    </button><button title="Italy" className="dropdown__list-item t-left t-uppercase"><img src="https://cdn.oddspedia.com/images/categories/italy.svg" alt="Italy" width={16} height={16}  className="dropdown__list-icon" />
                      Italy
                    </button><button title="Russia" className="dropdown__list-item t-left t-uppercase"><img src="https://cdn.oddspedia.com/images/categories/russia.svg" alt="Russia" width={16} height={16}  className="dropdown__list-icon" />
                      Russia
                    </button><button title="United Kingdom" className="dropdown__list-item t-left t-uppercase"><img src="https://cdn.oddspedia.com/images/categories/united-kingdom.svg" alt="United Kingdom" width={16} height={16}  className="dropdown__list-icon" />
                      UK
                    </button><button title="Turkey" className="dropdown__list-item t-left t-uppercase"><img src="https://cdn.oddspedia.com/images/categories/turkey.svg" alt="Turkey" width={16} height={16}  className="dropdown__list-icon" />
                      Turkey
                    </button><button title="Poland" className="dropdown__list-item t-left t-uppercase"><img src="https://cdn.oddspedia.com/images/categories/poland.svg" alt="Poland" width={16} height={16}  className="dropdown__list-icon" />
                      Poland
                    </button><button title="Austria" className="dropdown__list-item t-left t-uppercase"><img src="https://cdn.oddspedia.com/images/categories/austria.svg" alt="Austria" width={16} height={16}  className="dropdown__list-icon" />
                      Austria
                    </button><button title="Kenya" className="dropdown__list-item t-left t-uppercase"><img src="https://cdn.oddspedia.com/images/categories/kenya.svg" alt="Kenya" width={16} height={16}  className="dropdown__list-icon" />
                      Kenya
                    </button><button title="Philippines" className="dropdown__list-item t-left t-uppercase"><img src="https://cdn.oddspedia.com/images/categories/philippines.svg" alt="Philippines" width={16} height={16}  className="dropdown__list-icon" />
                      Philippines
                    </button><button title="United Arab Emirates" className="dropdown__list-item t-left t-uppercase"><img src="https://cdn.oddspedia.com/images/categories/united-arab-emirates.svg" alt="United Arab Emirates" width={16} height={16}  className="dropdown__list-icon" />
                      UAE
                    </button>
                  </div>
                  <button className="bm-dropdown__select-all t-left active"><i className="dropdown__list-icon icon-globe" /> <span>
                      All bookmakers
                    </span></button>
                </div>
              </div>
            </li>
            {/**/} 
            <li>
              <div className="dropdown">
                <button className="dropdown__toggle">
                  <span className="dropdown__toggle-text">Odds format:</span> <span className="dropdown__toggle-current">EU Odds (1.50)</span> 
                  <span className="dropdown__toggle__icon">
                    <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" fill="currentColor" />
                      <path d="M0-.75h24v24H0z" fill="none" />
                    </svg>
                  </span>
                </button>
                <div className="dropdown__content dropdown__content--full">
                  <div className="dropdown__list-item active">
                    EU Odds (1.50)
                  </div>
                  <div className="dropdown__list-item">
                    UK Odds (1/2)
                  </div>
                  <div className="dropdown__list-item">
                    US Odds (-200)
                  </div>
                </div>
              </div>
            </li>
            <li>
              {/**/}
            </li>
            <li>
              <div className="clock"><i className="icon-time" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default SS
