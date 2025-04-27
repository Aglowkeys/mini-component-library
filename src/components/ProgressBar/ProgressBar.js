/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES_MAP = {
  small: {
    padding: 0,
    borderRadius: 4,
    height: 8,
  },
  medium: {
    padding: 0,
    borderRadius: 4,
    height: 12,
  },
  large: {
    padding: 4,
    borderRadius: 8,
    height: 24,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES_MAP[size];

  return (
    <StyledProgressBar
      role='progressbar'
      aria-valuenow={value}
      aria-describedby='progress-bar-desc'
      style={{
        '--value': value + '%',
        '--padding': styles.padding + 'px',
        '--radius': styles.borderRadius + 'px',
        '--height': styles.height + 'px',
      }}
    >
      <VisuallyHidden id='progress-bar-desc'>{value}%</VisuallyHidden>
      <StyledInnerBar className={value === 100 ? 'full' : undefined} />
    </StyledProgressBar>
  );
};

const StyledProgressBar = styled.div`
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
`;

const StyledInnerBar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--value);
  height: 100%;
  border-radius: calc(var(--radius) - var(--padding));

  &:not(.full) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export default ProgressBar;
