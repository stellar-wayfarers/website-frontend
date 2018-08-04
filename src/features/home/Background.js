import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

import prefix from '../../functions/imgs-prefix';

class Background extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      ...this.getBackgroundStyle(props.image),
      backgroundArtWrapperStyle: this.getBackgroundArtWrapperStyle(),
    };
  }

  componentWillReceiveProps(nextProps) {
    const currentImg = this.props.image;
    const newImg = nextProps.image;

    if (currentImg !== newImg) {
      this.setState({
        backgroundArtWrapperStyle: this.getBackgroundArtWrapperStyle(true),
      });

      setTimeout(() => {
        this.setState({
          ...this.getBackgroundStyle(newImg),
          backgroundArtWrapperStyle: this.getBackgroundArtWrapperStyle(false),
        });
      }, 500);
    }
  }

  getBackgroundArtWrapperStyle = (fading = false) => classnames('common-background__art-wrapper', { fading });

  getBackgroundStyle = image => ({
    style: {
      backgroundImage: `linear-gradient(
            to bottom,
            rgba(6, 55, 86, 0.9),
            rgba(0,0,0,0.9)
          ), url(${prefix}${image})`,
    },
  });

  render() {
    const { backgroundArtWrapperStyle } = this.state;
    return (
      <div className="common-background">
        <div className={backgroundArtWrapperStyle}>
          <div className="common-background__art" style={this.state.style} />
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    image: state.common.background,
  };
}

export default connect(mapStateToProps)(Background);
