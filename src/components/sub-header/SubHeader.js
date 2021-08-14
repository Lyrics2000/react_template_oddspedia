import React from 'react'

function SubHeader() {
    return (
        <div className="sub-header">
                  <div className="container">
                    <ul className="sub-header__items">
                      <li className="sub-header__item sub-header__item--show sub-header__item--highlights"><a href="/" className="sub-header__link"><span tabIndex={-1} className="sub-header__icon"><i className="icon-home" /></span></a></li>
                      <li className="sub-header__item sub-header__item--show sub-header__item--live"><a href="/" className="sub-header__link"><span className="sub-header__icon"><i className="icon-timer" /></span> <span className="sub-header__text">
                            Live
                          </span></a> <span className="sub-header__notification">
                          21
                        </span>
                      </li>
                      <li className="sub-header__item">
                        <a href="/football" title="Football" className="sub-header__link"><span className="sub-header__icon"><i className="icon-football" /></span> <span className="sub-header__text">Football</span></a> <span className="sub-header__notification">
                          1094
                        </span> {/**/}
                      </li>
                      <li className="sub-header__item">
                        <a href="/rugby-union" title="Rugby Union" className="sub-header__link"><span className="sub-header__icon"><i className="icon-rugby-union" /></span> <span className="sub-header__text">Rugby Union</span></a> <span className="sub-header__notification">
                          13
                        </span> {/**/}
                      </li>
                      <li className="sub-header__item">
                        <a href="/tennis" title="Tennis" className="sub-header__link"><span className="sub-header__icon"><i className="icon-tennis" /></span> <span className="sub-header__text">Tennis</span></a> <span className="sub-header__notification">
                          32
                        </span> {/**/}
                      </li>
                      <li className="sub-header__item">
                        <a href="/basketball" title="Basketball" className="sub-header__link"><span className="sub-header__icon"><i className="icon-basketball" /></span> <span className="sub-header__text">Basketball</span></a> <span className="sub-header__notification">
                          72
                        </span> {/**/}
                      </li>
                      <li className="sub-header__item">
                        <a href="/ice-hockey" title="Ice Hockey" className="sub-header__link"><span className="sub-header__icon"><i className="icon-ice-hockey" /></span> <span className="sub-header__text">Ice Hockey</span></a> <span className="sub-header__notification">
                          18
                        </span> {/**/}
                      </li>
                      <li className="sub-header__item">
                        <a href="/esports" title="eSports" className="sub-header__link"><span className="sub-header__icon"><i className="icon-esports" /></span> <span className="sub-header__text">eSports</span></a> {/**/} <span className="sub-header__notification">
                          51
                        </span>
                      </li>
                      <li className="sub-header__item">
                        <a href="/volleyball" title="Volleyball" className="sub-header__link"><span className="sub-header__icon"><i className="icon-volleyball" /></span> <span className="sub-header__text">Volleyball</span></a> <span className="sub-header__notification">
                          34
                        </span> {/**/}
                      </li>
                      <li className="sub-header__item">
                        <a href="/handball" title="Handball" className="sub-header__link"><span className="sub-header__icon"><i className="icon-handball" /></span> <span className="sub-header__text">Handball</span></a> <span className="sub-header__notification">
                          13
                        </span> {/**/}
                      </li>
                      <li className="sub-header__item sub-header__item--toggle sub-header__item--show" style={{display: ''}}>
                        <button className="sub-header__link sub-header__toggle">
                          {/**/} <span className="sub-header__text">
                            More
                          </span> <i className="icon-down sub-header__arrow" />
                        </button>
                        <div className="sub-header__dropdown">
                          <ul>
                            <li className="sub-header__item">
                              <a href="/american-football" title="American Football" className="sub-header__link"><span className="sub-header__icon"><i className="icon-american-football" /></span> <span className="sub-header__text">American Football</span></a> <span className="sub-header__notification">
                                6
                              </span> {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/aussie-rules" title="Aussie Rules" className="sub-header__link"><span className="sub-header__icon"><i className="icon-aussie-rules" /></span> <span className="sub-header__text">Aussie Rules</span></a> <span className="sub-header__notification">
                                5
                              </span> {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/badminton" title="Badminton" className="sub-header__link"><span className="sub-header__icon"><i className="icon-badminton" /></span> <span className="sub-header__text">Badminton</span></a> <span className="sub-header__notification">
                                2
                              </span> {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/bandy" title="Bandy" className="sub-header__link"><span className="sub-header__icon"><i className="icon-bandy" /></span> <span className="sub-header__text">Bandy</span></a> {/**/} {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/baseball" title="Baseball" className="sub-header__link"><span className="sub-header__icon"><i className="icon-baseball" /></span> <span className="sub-header__text">Baseball</span></a> <span className="sub-header__notification">
                                44
                              </span> {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/beach-soccer" title="Beach Soccer" className="sub-header__link"><span className="sub-header__icon"><i className="icon-beach-soccer" /></span> <span className="sub-header__text">Beach Soccer</span></a> {/**/} {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/beach-volleyball" title="Beach Volleyball" className="sub-header__link"><span className="sub-header__icon"><i className="icon-beach-volleyball" /></span> <span className="sub-header__text">Beach Volleyball</span></a> {/**/} {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/bowls" title="Bowls" className="sub-header__link"><span className="sub-header__icon"><i className="icon-bowls" /></span> <span className="sub-header__text">Bowls</span></a> {/**/} {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/boxing" title="Boxing" className="sub-header__link"><span className="sub-header__icon"><i className="icon-boxing" /></span> <span className="sub-header__text">Boxing</span></a> <span className="sub-header__notification">
                                7
                              </span> {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/chess" title="Chess" className="sub-header__link"><span className="sub-header__icon"><i className="icon-chess" /></span> <span className="sub-header__text">Chess</span></a> {/**/} {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/cricket" title="Cricket" className="sub-header__link"><span className="sub-header__icon"><i className="icon-cricket" /></span> <span className="sub-header__text">Cricket</span></a> <span className="sub-header__notification">
                                8
                              </span> {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/curling" title="Curling" className="sub-header__link"><span className="sub-header__icon"><i className="icon-curling" /></span> <span className="sub-header__text">Curling</span></a> {/**/} {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/darts" title="Darts" className="sub-header__link"><span className="sub-header__icon"><i className="icon-darts" /></span> <span className="sub-header__text">Darts</span></a> <span className="sub-header__notification">
                                10
                              </span> {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/field-hockey" title="Field Hockey" className="sub-header__link"><span className="sub-header__icon"><i className="icon-field-hockey" /></span> <span className="sub-header__text">Field Hockey</span></a> {/**/} {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/floorball" title="Floorball" className="sub-header__link"><span className="sub-header__icon"><i className="icon-floorball" /></span> <span className="sub-header__text">Floorball</span></a> <span className="sub-header__notification">
                                2
                              </span> {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/futsal" title="Futsal" className="sub-header__link"><span className="sub-header__icon"><i className="icon-futsal" /></span> <span className="sub-header__text">Futsal</span></a> <span className="sub-header__notification">
                                1
                              </span> {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/mixed-martial-arts" title="Mixed Martial Arts" className="sub-header__link"><span className="sub-header__icon"><i className="icon-mixed-martial-arts" /></span> <span className="sub-header__text">Mixed Martial Arts</span></a> <span className="sub-header__notification">
                                35
                              </span> {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/pesapallo" title="Pesapallo" className="sub-header__link"><span className="sub-header__icon"><i className="icon-pesapallo" /></span> <span className="sub-header__text">Pesapallo</span></a> <span className="sub-header__notification">
                                10
                              </span> {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/rugby-league" title="Rugby League" className="sub-header__link"><span className="sub-header__icon"><i className="icon-rugby-league" /></span> <span className="sub-header__text">Rugby League</span></a> <span className="sub-header__notification">
                                15
                              </span> {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/snooker" title="Snooker" className="sub-header__link"><span className="sub-header__icon"><i className="icon-snooker" /></span> <span className="sub-header__text">Snooker</span></a> {/**/} {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/squash" title="Squash" className="sub-header__link"><span className="sub-header__icon"><i className="icon-squash" /></span> <span className="sub-header__text">Squash</span></a> {/**/} {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/table-tennis" title="Table Tennis" className="sub-header__link"><span className="sub-header__icon"><i className="icon-table-tennis" /></span> <span className="sub-header__text">Table Tennis</span></a> <span className="sub-header__notification">
                                337
                              </span> {/**/}
                            </li>
                            <li className="sub-header__item">
                              <a href="/water-polo" title="Water Polo" className="sub-header__link"><span className="sub-header__icon"><i className="icon-water-polo" /></span> <span className="sub-header__text">Water Polo</span></a> {/**/} {/**/}
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                
    )
}

export default SubHeader
