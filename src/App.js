import React from 'react'
import {Switch,Route,Link,Routes} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import {Navbar,Exchanges,Cryptocurrencies,News,CryptoDetails1,HomePage} from './components'
import './App.css'
const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
        <Navbar/>
        </div>
        <div className='main'>
            <Layout>
              <div className='routes'>
                <Switch>
                  <Route exact path='/cryptox1'><HomePage/></Route>
                  {/* <Route exact path='/exchanges'><Exchanges/></Route> */}
                  <Route exact path='/cryptox1/cryptocurrencies'><Cryptocurrencies/></Route>
                  <Route exact path='/cryptox1/crypto/:coinId'><CryptoDetails1/></Route>
                  <Route exact path='/cryptox1/news'><News/></Route>
                </Switch>
              </div>
            </Layout>
        
        <div className="footer" >
        <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
          CryptoX <br/>
          All Rights Reserved
        </Typography.Title>
        <Space>
          <Link to='/cryptox1'>Home</Link>
          <Link to='/cryptox1/cryptocurrencies'>Cryptocurrencies</Link>
          <Link to='/cryptox1/news'>News</Link>
        </Space>
        </div>
        </div>
    </div>
  )
}

export default App
