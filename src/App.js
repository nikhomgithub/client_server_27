import React from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';

import Navbar from './component/navbar/Navbar'

import Home from './page/home/Home'
import ShopWelcome from './page/shop/ShopWelcome'
import UserWelcome from './page/user/UserWelcome'
import BasicData from './page/basicdata/BasicData'
import Partner from './page/partner/Partner'
import Transaction from './page/transaction/Transaction'
import TransactionLog from './page/transaction/TransactionLog'
import Product from './page/product/Product'
import AppNewGroupComponent from './render/renderTree/AppNewGroupComponent';

import AppTree from './render/renderTree/NewGroupComponent';
import mycar from 'mycar'


import {MainContext} from './context/MainContext';

import './App2.css'

function App() {

const {tokenSt,setTokenSt}=React.useContext(MainContext)
const {haveShopToken,haveUserToken}=tokenSt

let temp=window.location.href.split("/")
const home=`${temp[0]}//${temp[2]}/home`

return(
<div className="bgc-lightGray" style={{height:"100vh",width:"100vw"}}>
   <div className="h-5">
      <Navbar/>   
   </div>

   <div className="h-95">
      <Switch>
         <Route path="/home" component={() => window.location.href = home}/>
         <Route exact path="/p27/shop" component={haveShopToken?UserWelcome:ShopWelcome}/>
         <Route exact path="/p27/user" component={haveShopToken?UserWelcome:ShopWelcome}/> 
         <Route exact path="/p27/basicdata" 
            component={haveShopToken?(haveUserToken?BasicData:UserWelcome):ShopWelcome} /> 
         <Route exact path="/p27/partner" 
            component={haveShopToken?(haveUserToken?Partner:UserWelcome):ShopWelcome}/> 
         <Route exact path="/p27/product" 
            component={haveShopToken?(haveUserToken?Product:UserWelcome):ShopWelcome}/> 
         <Route exact path="/p27/transaction" 
            component={haveShopToken?(haveUserToken?Transaction:UserWelcome):ShopWelcome}/> 
         <Route exact path="/p27/transactionlog" 
            component={haveShopToken?(haveUserToken?TransactionLog:UserWelcome):ShopWelcome}/> 
      </Switch>
   </div>

</div>
)

}
export default App;


/*

<Route exact path="/sppage/product" 
            component={AppNewGroupComponent}/> 






import React from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';

import Navbar from './component/navbar/Navbar'

import Home from './page/home/Home'
import ShopWelcome from './page/shop/ShopWelcome'
import UserWelcome from './page/user/UserWelcome'
import BasicData from './page/basicdata/BasicData'
import Partner from './page/partner/Partner'
import Transaction from './page/transaction/Transaction'
import TransactionLog from './page/transaction/TransactionLog'
import Product from './page/product/Product'


import {MainContext} from './context/MainContext';

import './App2.css'

function App() {

const {username,setUsername,
   reloadCheckToken,setReloadCheckToken,
   haveShopToken,setHaveShopToken,
   haveUserToken,setHaveUserToken,
   userName,setUserName,
   basicData,myheader
}=React.useContext(MainContext)

return(
<div className="bgc-lightGray" style={{height:"100vh",width:"100vw"}}>
   <div className="h-5">
         <Navbar/>   
   </div>

   <div className="h-95">
      <Switch>
         <Route path="/home" component={Home}/>
         <Route exact path="/pageshop" component={haveShopToken?UserWelcome:ShopWelcome}/>
         <Route exact path="/pageuser" component={haveShopToken?UserWelcome:ShopWelcome}/> 
         <Route exact path="/pagebasicdata" 
            component={haveShopToken?(haveUserToken?BasicData:UserWelcome):ShopWelcome} /> 
         <Route exact path="/pagepartner" 
            component={haveShopToken?(haveUserToken?Partner:UserWelcome):ShopWelcome}/> 
         <Route exact path="/pageproduct" 
            component={haveShopToken?(haveUserToken?Product:UserWelcome):ShopWelcome}/> 
         <Route exact path="/pagetransaction" 
            component={haveShopToken?(haveUserToken?Transaction:UserWelcome):ShopWelcome}/> 
         <Route exact path="/pagetransactionlog" 
            component={haveShopToken?(haveUserToken?TransactionLog:UserWelcome):ShopWelcome}/> 
         <Route exact path="/" render={() => <Redirect to="/home" />} />   
      </Switch>
   </div>

</div>
)

}
export default App;







*/