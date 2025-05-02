import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const ICON_STYLES = {
  small: {
    size: 16,
    strokeWidth: 1,
  },
  large: {
    size: 24,
    strokeWidth: 2,
  },
};

const INPUT_STYLES = {
  small: {
    height: '24px',
    fontSize: '14px',
    borderWidth: '1px',
    padding: '4px 8px 4px 24px',
  },
  large: {
    height: '32px',
    fontSize: '18px',
    borderWidth: '2px',
    padding: '8px 12px 8px 36px',
  },
};

const INPUT_TYPES = {
  'at-sign': 'email',
  search: 'search',
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <>
      <VisuallyHidden>
        <label for='search-input'>{label}</label>
      </VisuallyHidden>
      <Wrapper>
        <IconWrapper>
          <Icon
            id={icon}
            size={ICON_STYLES[size].size}
            strokeWidth={ICON_STYLES[size].strokeWidth}
          />
        </IconWrapper>
        <Input
          id='search-input'
          type={INPUT_TYPES[icon] || 'text'}
          placeholder={placeholder}
          style={{
            width: width + 'px',
            height: INPUT_STYLES[size].height,
            fontSize: INPUT_STYLES[size].fontSize,
            borderWidth: INPUT_STYLES[size].borderWidth,
            padding: INPUT_STYLES[size].padding,
          }}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid black;
  padding-left: 36px;
  font-family: Roboto;
  font-weight: 700;
  color: ${COLORS.gray700};

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export default IconInput;
