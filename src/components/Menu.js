import { useState } from 'react';
import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import MenuCategory from './MenuCategory';

const Menu = () => {
  const [key, setKey] = useState('breakfast');

  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k)} id="menu-tab" className="menu_tab mb-4">
      <Tab eventKey="breakfast" title="Breakfast">
        <MenuCategory type="breakfast"/>
      </Tab>
      <Tab eventKey="lunch" title="Lunch">
        <MenuCategory type="lunch"/>
      </Tab>
      <Tab eventKey="dinner" title="Dinner">
        <MenuCategory type="dinner"/>
      </Tab>
    </Tabs>
  )
}

export default Menu
