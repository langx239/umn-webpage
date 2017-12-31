import React from 'react';
import { Button, Menu, MenuItem, Navbar, NavbarGroup, NavbarHeading, Popover, Position } from '@blueprintjs/core';

import logo from '../images/logo.png';

const YearMenu = ({ updateYear, years }) => (
  <Menu>
    <MenuItem onClick={() => updateYear(undefined)} text="All years" />
    {years.map(year => <MenuItem key={year} onClick={() => updateYear(year)} text={`Year ${year}`} />)}
  </Menu>
);

const Nav = ({ updateYear, years }) => (
  <Navbar className="pt-fixed-top">
    <div style={{ margin: '0 auto', maxWidth: 960 }}>
      <NavbarGroup>
        <img src={logo} alt="logo" style={{ height: 20, marginRight: 5 }} />
        <NavbarHeading>
          Chinese PhD Student Information System
          {' '}
          <small>- School of Statistics, University of Minnesota</small>
        </NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align="right">
        <Popover content={<YearMenu updateYear={updateYear} years={years} />} position={Position.BOTTOM}>
          <Button rightIconName="caret-down" text="Year" />
        </Popover>
      </NavbarGroup>
    </div>
  </Navbar>
);

export default Nav;
