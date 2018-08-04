import PropTypes from 'prop-types';

const WayfarerType = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
  specs: PropTypes.arrayOf(PropTypes.string),
  avatar: PropTypes.string,
  system: PropTypes.string,
  planet: PropTypes.string,
  ships: PropTypes.arrayOf(PropTypes.string),
  character: PropTypes.string,
  story: PropTypes.string,
});

export default WayfarerType;
