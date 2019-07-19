import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTE_PATH } from './constants/router';
import TravelListpage from './components/screen/TravelListPage';
import TravelDetailPage from './components/screen/TravelDetailPage/indet';
import TravelAddPage from './components/screen/TravelAddPage';
import TravelUpdatePage from './components/screen/TravelUpdatePage';

class App extends React.Component{
  render() {
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path={ROUTE_PATH.LIST_PAGE} component={TravelListpage}/>
            <Route exact path={ROUTE_PATH.DETAIL_PAGE} component={TravelDetailPage}/>
            <Route exact path={ROUTE_PATH.ADD_PAGE} component={TravelAddPage}/>
            <Route exact path={ROUTE_PATH.UPDATE_PAGE} component={TravelUpdatePage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
