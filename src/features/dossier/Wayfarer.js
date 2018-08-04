/* eslint-disable react/no-unused-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Wayfarer extends Component {
  static propTypes = {
    dossier: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return <div className="dossier-wayfarer">Page Content: dossier/Wayfarer</div>;
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    dossier: state.dossier,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wayfarer);
