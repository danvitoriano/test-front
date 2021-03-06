import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';

const Cardboard = styled.div`
  padding: 0.75rem;
  border-radius: 3px;

  ${({ out }) =>
    !out &&
    css`
      box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
      background-color: ${props => props.theme.colors.white};
    `}

  ${({ out }) =>
    out &&
    css`
      background-color: transparent;
      border: 1px solid #ddd;
      box-shadow: none;
    `}
`;

Cardboard.propTypes = {
  children: PropTypes.node.isRequired
};

export default Cardboard;
