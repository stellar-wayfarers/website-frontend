import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import * as commonActions from '../common/redux/actions';
import BackgroundImage from '../../images/backgrounds/levski/clement-dieu-1.jpg';
import WayfarerCard from './WayfarerCard';
import WayfarerType from './types/wayfarer';

export class DefaultPage extends Component {
  static propTypes = {
    // dossier: PropTypes.object.isRequired,
    // actions: PropTypes.object.isRequired,
    commonActions: PropTypes.object.isRequired,
    wayfarers: PropTypes.arrayOf(WayfarerType).isRequired,
    specs: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.commonActions.changeBackground(BackgroundImage);
  }

  render() {
    const { wayfarers, specs } = this.props;

    return (
      <div className="dossier-default-page">
        <div className="dossier-wayfarers">
          {wayfarers.map(wayfarer => (
            <WayfarerCard key={wayfarer.name} wayfarer={wayfarer} specs={specs} />
          ))}
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    wayfarers: state.dossier.wayfarers,
    specs: state.common.specs,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
    commonActions: bindActionCreators({ ...commonActions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultPage);
