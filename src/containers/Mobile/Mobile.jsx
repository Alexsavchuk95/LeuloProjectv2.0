import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MobileHeader from '../MobileHeader/MobileHeader';
import MobileFooter from '../MobileFooter/MobileFooter';
import MobileHome from '../../components/MobileHome/MobileHome';
import Science from '../../components/Science/Science';
import Partner from '../Partner/Partner';
import Location from '../Location/Location';
import MobileProducts from '../../components/MobileProducts/MobileProducts';
import MobileContact from '../../components/MobileContact/MobileContact';

const Mobile = () => {
  return (
    <>
      <div>
        <MobileHeader />
        <Switch>
          <Route path="/" exact component={MobileHome} />
          <Route path="/science" component={Science} />
          <Route path="/products" component={MobileProducts} />
          <Route path="/contact-us" component={MobileContact} />
          <Route path="/partner" component={Partner} />
          <Route path="/search" component={Location} />
        </Switch>
      </div>
      <MobileFooter />
    </>
  );
};

export default Mobile;
