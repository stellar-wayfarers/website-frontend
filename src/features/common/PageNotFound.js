import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commonActions from './redux/actions';

import BackgroundImage from '../../images/backgrounds/levski/clement-dieu-9.jpg';

class PageNotFound extends PureComponent {
  static propTypes = {
    commonActions: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.commonActions.changeBackground(BackgroundImage);
  }

  render() {
    return (
      <div key="content" className="common-page-not-found">
        Сожалеем, но данная страница не найдена. Возможно, здесь было что-то ранее, но теперь его
        здесь нет :(
      </div>
    );
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    commonActions: bindActionCreators({ ...commonActions }, dispatch),
  };
}

export default connect(
  undefined,
  mapDispatchToProps,
)(PageNotFound);
