import React, { useState } from 'react';
import { Tab, Tabs }  from 'react-bootstrap';
import Search from './Search.js';
import Map from './Map.js';
import ANPR from './ANPR.js';

export default function NavTab() {
    const [key, setKey] = useState('search');
  return (
    <div>
        <Tabs style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }} fill variant="tabs" defaultActiveKey="profile" transition={false} id="uncontrolled-tab-example">
            <Tab eventKey="search" title="Search">
                <Search />
            </Tab>
            <Tab eventKey="map" title="Map">
                <Map />
            </Tab>
            <Tab eventKey="anpr" title="ANPR">
                <ANPR />
            </Tab>
        </Tabs>
    </div>
      

  );
}
