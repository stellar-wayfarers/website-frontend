import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import random from 'lodash/random';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faIdBadge from '@fortawesome/fontawesome-free-regular/faIdBadge';

import ReactMarkdown from 'react-markdown';
import WayfarerType from './types/wayfarer';

import prefix from '../../functions/imgs-prefix';
import chislitelnie from '../../functions/chislitelnie';

export default class WayfarerCard extends PureComponent {
  static propTypes = {
    wayfarer: WayfarerType.isRequired,
    specs: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      showFullStory: false,
      storyShort: props.wayfarer.story.split('<cut/>')[0],
      storyFull: props.wayfarer.story.replace('<cut/>', ''),
    };
  }

  toggleFullStory = () => {
    this.setState(({ showFullStory }) => ({
      showFullStory: !showFullStory,
    }));
  };

  render() {
    const {
      wayfarer: { name, age, specs, avatar, character },
      specs: allSpecs,
    } = this.props;

    const { showFullStory, storyShort, storyFull } = this.state;

    const secs = random(0, 1, true);

    return (
      <div className="dossier-wayfarer-card" style={{ animationDelay: `${secs}s` }}>
        {avatar && [
          <FontAwesomeIcon
            key="icon"
            className="dossier-wayfarer-card__avatar-show-icon"
            icon={faIdBadge}
          />,
          <div
            key="background"
            className="dossier-wayfarer-card__avatar"
            style={{
              backgroundImage: `url(${prefix}${avatar})`,
            }}
          />,
        ]}
        <div className="dossier-wayfarer-card__block">
          <div className="dossier-wayfarer-card__name">
            {name}, {chislitelnie(age, [ 'год', 'года', 'лет' ])}.
          </div>
        </div>
        <div className="dossier-wayfarer-card__block dossier-wayfarer-card__character">
          {character}
        </div>
        <div className="dossier-wayfarer-card__block full-width">
          <div className="dossier-wayfarer-card__about">
            <ReactMarkdown source={showFullStory ? storyFull : storyShort} />
            <div
              className="dossier-wayfarer-card__about__toggle-full"
              onClick={this.toggleFullStory}
              role="button"
              tabIndex={0}
            >
              {showFullStory ? 'Свернуть' : 'Подробнее'}
            </div>
          </div>
        </div>
        <div className="dossier-wayfarer-card__block column">
          <div className="dossier-wayfarer-card__specs-title">Деятельность:</div>
          <div className="dossier-wayfarer-card__specs">
            {specs.map(spec => (
              <div key={spec} className="dossier-wayfarer-card__spec">
                {allSpecs.data[spec].name}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
