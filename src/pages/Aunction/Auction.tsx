import React from 'react';
import { Layout } from 'components/sharedLayout';
import { RelatedProductsComponent, UserDetailsComponent } from './components/Index';


export const Auction = ()=> {
  return (
    <Layout>
<UserDetailsComponent/>
<RelatedProductsComponent/>
    </Layout>
  );
};
