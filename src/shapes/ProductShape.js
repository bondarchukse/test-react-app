import PropTypes from 'prop-types';

export const ProductShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deliveryMethod: PropTypes.oneOf(['Air', 'Ground', '']),
});
