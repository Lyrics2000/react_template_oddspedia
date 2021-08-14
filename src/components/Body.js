import React from 'react'
import './Body.css'
import Footer from './footer/Footer'
import Header from './header/Header'
import SubHeader from './sub-header/SubHeader'
import Container from './container/Container'
import SS from './container/side/SS'

const Body = () => {
    return (
        <div>
    
        <div data-server-rendered="true" id="__nuxt">
          
          <div id="__layout">
            <div className="wrapper is-desktop page-sure-bets page-surebets___en">
              <div className="wrapper__inner">
               <Header />
                
                <div className="main">
                  <div className="breadcrumb-bar">
                  <SS />
                  </div>
                 <Container />
                </div>
              </div>
             <Footer />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Body
