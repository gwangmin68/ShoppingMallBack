import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Provider} from "mobx-react";

import SignUp from './User/SignUp';
import Login from './User/Login';
import Home  from './Home';

import Stores from './Stores/index'
import './App.scss';

const App = () => (
    <Provider stores={Stores}>
        <BrowserRouter>
            <header className="ShoppingMall-header">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/signup'>회원가입</Link></li>
                    <li><Link to='/login'>로그인</Link></li>
                </ul>
            </header>

            <section className='body'>
                <Route path='/' exact component={Home}/>
                <Route path='/signup' exact component={SignUp}/>
                <Route path='/login' exact component={Login}/>
            </section>
        </BrowserRouter>
    </Provider>
);

export default App;

// function App() {
//   return (
//     <div className="App">
      {/*<header className="ShoppingMall-header">*/}
      {/*    <div className="header-quick">*/}
      {/*        HEADER*/}
      {/*    </div>*/}
      {/*</header>*/}
//         <footer>
//             <div className="footer-top">
//                 <div>HOME</div>
//                 <div>이용약관</div>
//                 <div>회원정보관리</div>
//                 <div>이용안내</div>
//                 <div>고객센터</div>
//             </div>
//             <div></div>
//         </footer>
//     </div>
//   );
// }
