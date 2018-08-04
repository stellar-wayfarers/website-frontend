import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import * as actions from './redux/actions';
import * as commonActions from '../common/redux/actions';
import BackgroundImage from '../../images/backgrounds/wallpapers/wallpaper_star_citizen_47_1920x1080.jpg';
import About from '../common/data/about';

export class DefaultPage extends Component {
  static propTypes = {
    // landing: PropTypes.object.isRequired,
    // actions: PropTypes.object.isRequired,
    commonActions: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.commonActions.changeBackground(BackgroundImage);
  }

  render() {
    return (
      <div className="landing-default-page">
        <div className="landing-intro-text">
          <ReactMarkdown source={About} />
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    landing: state.landing,
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
