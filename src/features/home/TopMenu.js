import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class TopMenu extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="home-top-menu">
        <NavLink to="/" activeClassName="active" className="home-top-menu__item" exact>
          Звёздные Странники
        </NavLink>
        <NavLink to="/dossier" activeClassName="active" className="home-top-menu__item">
          Досье
        </NavLink>
        <NavLink to="/universe" activeClassName="active" className="home-top-menu__item">
          Вселенная
        </NavLink>
        <NavLink to="/specialties" activeClassName="active" className="home-top-menu__item">
          Специальности
        </NavLink>
      </div>
    );
  }
}
