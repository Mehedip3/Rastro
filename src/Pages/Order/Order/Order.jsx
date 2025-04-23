import React from 'react';

import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';


const Order = () => {

    const [menu] = useMenu();
    const dessert = menu.filter (item => item.category === 'dessert');
    const pizza = menu.filter (item => item.category === 'pizza');
    const salad = menu.filter (item => item.category === 'salad');
    const soup = menu.filter (item => item.category === 'soup');
    const drinks = menu.filter (item => item.category === 'drinks');

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
           <Cover img={orderCover} title="Order Food"
           ></Cover>

           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
          <Tab>Salad</Tab>
           <Tab>Pizza</Tab>
           <Tab>Soup</Tab>
           <Tab>Disserts</Tab>
           <Tab>Drinks</Tab>
       
          </TabList>
         <TabPanel><OrderTab items={salad} ></OrderTab></TabPanel>
         <TabPanel><OrderTab items={pizza} ></OrderTab></TabPanel>
         <TabPanel><OrderTab items={soup} ></OrderTab></TabPanel>
         <TabPanel><OrderTab items={dessert} ></OrderTab></TabPanel>
         <TabPanel><OrderTab items={drinks} ></OrderTab></TabPanel>
       
        </Tabs>

        </div>
    );
};

export default Order;