import React from 'react';
import { Button, Menu, MenuItem, Navbar, NavbarGroup, NavbarHeading, Popover, Position } from '@blueprintjs/core';

import './Nav.css';

const YearMenu = ({ updateYear, years }) => (
  <Menu>
    <MenuItem onClick={() => updateYear(undefined)} text="All years" />
    {years.map(year => <MenuItem key={year} onClick={() => updateYear(year)} text={`Year ${year}`} />)}
  </Menu>
);

const Nav = ({ updateYear, years }) => (
  <Navbar className="pt-fixed-top navbar">
    <div style={{ margin: '0 auto', maxWidth: 960 }}>
      <NavbarGroup>
        <NavbarHeading className="navbar-heading">
          Chinese PhD Student Information System
          {' '}
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
