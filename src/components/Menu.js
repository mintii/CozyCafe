import { useState } from 'react';
import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import MenuCategory from './MenuCategory';

const Menu = () => {
  const [key, setKey] = useState('morning');

  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k)} id="menu-tab" className="menu_tab mb-4">
      <Tab eventKey="morning" title="Morning">
        <MenuCategory type="morning"/>
      </Tab>
      <Tab eventKey="snack" title="Snack">
        <MenuCategory type="snack"/>
      </Tab>
      <Tab eventKey="house_speciality" title="House Speciality">
        <MenuCategory type="house_speciality"/>
      </Tab>
    </Tabs>
  )
}

export default Menu
