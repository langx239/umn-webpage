import React from 'react'
import {
  Button,
  Menu,
  MenuItem,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Popover,
  Position
} from '@blueprintjs/core'

const YearMenu = ({ updateYear, years }) => (
  <Menu>
    <MenuItem onClick={() => updateYear(undefined)} text="All years" />
    {years.map(year => <MenuItem key={year} onClick={() => updateYear(year)} text={`Year ${year}`} />)}
  </Menu>
)

const Nav = ({ updateDataSource, updateYear, years }) => {
  const isSmallScreen = window.innerWidth < 600

  return (
    <Navbar className="pt-fixed-top pt-dark">
      <div style={{ margin: '0 auto', maxWidth: 1080 }}>
        <NavbarGroup>
          <NavbarHeading>PhD Students {isSmallScreen ? 'Info' : 'Infomation'} System</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align="right">
          <Button
            text={isSmallScreen ? 'Current' : 'Current Students'}
            onClick={() => updateDataSource('current')}
            className="pt-minimal"
          />
          <Button text="Alumni" onClick={() => updateDataSource('graduate')} className="pt-minimal" />
          {!isSmallScreen && <NavbarDivider />}
          {!isSmallScreen && (
            <Popover content={<YearMenu updateYear={updateYear} years={years} />} position={Position.BOTTOM}>
              <Button rightIconName="caret-down" text="Year" />
            </Popover>
          )}
        </NavbarGroup>
      </div>
    </Navbar>
  )
}

export default Nav
