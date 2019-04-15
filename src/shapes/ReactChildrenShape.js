import PropTypes from 'prop-types';

export const ReactChildrenShape = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);

