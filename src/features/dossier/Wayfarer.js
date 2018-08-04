/* eslint-disable react/no-unused-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import find from 'lodash/find';
import lowerFirst from 'lodash/lowerFirst';
import memoizeOne from 'memoize-one';

import * as actions from './redux/actions';
import * as commonActions from '../common/redux/actions';
import WayfarerType from './types/wayfarer';
import chislitelnie from '../../functions/chislitelnie';
import BackgroundImage from '../../images/backgrounds/levski/clement-dieu-1.jpg';

export class Wayfarer extends Component {
  static propTypes = {
    wayfarer: WayfarerType,
    actions: PropTypes.object.isRequired,
    match: PropTypes.shape({
      isExact: PropTypes.bool,
      params: PropTypes.shape(),
      path: PropTypes.string,
      url: PropTypes.string,
    }).isRequired,
    commonActions: PropTypes.object.isRequired,
  };

  static defaultProps = {
    wayfarer: undefined,
  };

  componentWillMount() {
    this.props.commonActions.changeBackground(BackgroundImage);
  }

  getAvatarStyles = memoizeOne(avatar => ({
    backgroundImage: `url(${avatar})`,
  }));

  render() {
    const { name, age, character, avatar } = this.props.wayfarer;
    const storyFull = this.props.wayfarer.story.replace('<cut/>', '');
    const avatarStyle = this.getAvatarStyles(avatar);

    return (
      <div className="dossier-wayfarer">
        <div className="dossier-wayfarer__avatar" style={avatarStyle} />
        <h1 className="dossier-wayfarer__name">{name}</h1>
        <div className="dossier-wayfarer__age">
          {chislitelnie(age, [ 'год', 'года', 'лет' ])}, {lowerFirst(character)}
        </div>
        <div className="dossier-wayfarer__story">
          <ReactMarkdown source={storyFull} />
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state, props) {
  return {
    wayfarer: find(state.dossier.wayfarers, { id: props.match.params.id }),
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
)(Wayfarer);
