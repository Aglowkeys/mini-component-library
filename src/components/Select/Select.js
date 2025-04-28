import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { getDisplayedValue } from './Select.helpers';

const iconSize = 16;
const padding = 10;
const gap = 20;

const Select = ({ label, value, onChange, children }) => {
  const [width, setWidth] = React.useState(0);
  const ref = React.useRef();
  const displayedValue = getDisplayedValue(value, children);

  React.useEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, [value]);

  return (
    <>
      <Wrapper
        style={{
          '--padding': padding + 'px',
          '--gap': gap + 'px',
          '--width': `calc(${width + 'px'} + var(--padding) * 2 + var(--gap) + ${
            iconSize + 'px'
          })`,
        }}
      >
        {/* Its width is used to calculate the Wrapper's size */}
        <HiddenValueContainer ref={ref}>{displayedValue}</HiddenValueContainer>

        <VisuallyHidden>
          <label htmlFor='select-label'>{label}</label>
        </VisuallyHidden>

        <StyledSelect id='select-label' value={value} onChange={onChange}>
          {children}
        </StyledSelect>

        <Icon aria-hidden id='chevron-down' size={iconSize} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 43px;
  width: var(--width);
  min-width: fit-content;
  position: relative;

  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  font-family: 'Roboto',
  font-size: 16px;

  &:hover {
    color: ${COLORS.black};
  }
`;

const HiddenValueContainer = styled.span`
  visibility: hidden;
  font-size: inherit;
`;

const StyledSelect = styled.select`
  position: absolute;
  inset: 0;
  appearance: none;
  background: transparent;
  border: none;
  border-radius: inherit;
  color: currentColor;
  padding: var(--padding);
  font-size: inherit;
`;

export default Select;
