import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import FighterList from './pages/fighter-list';
import './style.scss'


function App() {
  return (
            <HashRouter>
                <div>
                    <Header />
                    {/* Le système de gestion des routes de notre application */}
                    <Routes>
                        <Route path="/" element={<FighterList/>}/>
                        {/* <PrivateRouteAll exact path="/fighters/:id" component={FightersDetail}/>
                        <PrivateRouteManager exact path="/fighters/edit/:id" component={fighterEdit}/>
                        <PrivateRouteManager exact path="/fighter/add" component={FighterAdd}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/" component={Login}/>
                        <Route component={PageNotFound}/> */}
                    </Routes>
                </div>
            </HashRouter>
  );
}

export default App;
