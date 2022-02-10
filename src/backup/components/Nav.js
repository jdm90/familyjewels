import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar-dark bg-primary mb-5" expand="md">
          <NavbarBrand href="/">FAMILY JEWELS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} className="nav-link" to="/">
                  <i className="fa fa-home fa-lg" /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="nav-link" to="/about">
                  <i className="fa fa-info fa-lg" /> About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="nav-link" to="/inventory">
                  <i className="fa fa-info fa-lg" /> Inventory
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="nav-link" to="/test">
                  <i className="fa fa-info fa-lg" /> Test
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
