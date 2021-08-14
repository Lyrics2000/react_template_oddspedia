import React from 'react'
import Article from './Article'
import MainDv from './maindiv/MainDv'
import RightSide from './RightSide'
import SideFilter from './SideFilter'
import SubHeaderInner from './SubHeaderInner'

const Container = () => {
    return (
        <div className="container">
            <SideFilter />
                
                    <div className="content-wrapper">
                      <div className="content">
                        <main className="content-inner">
                          <div className="btools">
                            <div className="btools-header">
                              <div className="d-flex justify-space-between">
                                <h1><img alt="Sure Bets Icon" src="https://cdn.oddspedia.com/images/static/icons/money.svg" width={20} height={20}  /> <span>Sure Bets</span></h1>
                                <span className="popover popover--center">
                                  <span className="popover__trigger">
                                    <div className="media-package-badge d-flex align-center t-center"><small className="media-package-badge__label d-none d-sm-block">
                                        Presented by
                                      </small> <span className="media-package-badge__btn cursor-pointer d-flex align-center" style={{backgroundColor: '#012f5e'}}><img src="https://cdn.oddspedia.com/images/bookmakers/dark-back/120x48/1xbet.png" alt="1xBet" width={58} height={20} data-not-lazy src="https://cdn.oddspedia.com/images/bookmakers/dark-back/120x48/1xbet.png" /> <span className="media-package-badge__btn__icon u-circle flex-center" style={{backgroundColor: '#16a0ff', color: '#012f5e'}}><i className="icon-gift" /></span></span>
                                    </div>
                                  </span>
                                  <div className="popover__body" style={{display: 'none'}}>
                                    <button className="popover__close"><i className="icon-close" /></button> 
                                    <div className="top-ten-info t-center">
                                      <div className="top-ten-info__header" style={{backgroundColor: '#012f5e'}}><button className="top-ten-info__header__close d-md-none"><i className="icon-close" /></button> <img src="https://cdn.oddspedia.com/images/bookmakers/dark-back/120x48/1xbet.png" alt="1xBet" width={60} height={24} data-not-lazy src="https://cdn.oddspedia.com/images/bookmakers/dark-back/120x48/1xbet.png" className="m-auto" /></div>
                                      <div className="media-package-info">
                                        <p className="media-package-info__heading">
                                          100% Bonus on the first deposit up to  €100!
                                        </p>
                                        <div className="media-package-info__box">
                                          {/**/} {/**/} <span className="go-link cursor-pointer btn btn--primary p-0 cursor-pointer" style={{color: '#FFFFFF', backgroundColor: '#16a0ff', borderColor: '#16a0ff'}}>
                                            Register
                                          </span>
                                        </div>
                                        {/**/}
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                            <SubHeaderInner />
                            
                            </div>
                            


                          <MainDv />
                           
                          
                          <Article />
                          </div>
                        </main>
                       <RightSide />
                      
                      </div>
                      <div data-full-width-responsive="false" className="gpt-ad-bottom-bar is-desktop">
                        <div className="gpt-ad-bottom-bar__inner">
                          <div className="gpt-ad-bottom-bar-wrapper">
                            <div id="gpt-ad-bottom-bar" style={{width: '728px', height: '90px'}} />
                            <span className="gpt-ad-bottom-bar__text">
                              Advertising
                            </span>
                          </div>
                          <a href className="gpt-ad-bottom-bar__close" />
                        </div>
                      </div>
                    </div>
                  </div>
                
    )
}

export default Container
