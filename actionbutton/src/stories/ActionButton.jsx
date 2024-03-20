import React from 'react';
import PropTypes from 'prop-types';
import './ActionButton.css';

const ActionButton = ({ label, icon,backgroundColor,type, displayType, size, status, onClick, disabled }) => {
  const getButtonClasses = () => {
    let classes = 'action-button';
    
    switch (displayType) {
      case 'Text only':
        classes += ' text-only';
        break;
      case 'Icon only':
        classes += ' icon-only';
        break;
      case 'Icon with text':
        classes += ' icon-with-text';
        break;
      default:
        break;
    }
    switch (type) {
      case 'Neutral':
        classes += ' neutral';
        break;
      case 'Reverse':
        classes += ' reverse';
        break;
      default:
        break;
    }
    
    switch (status) {
      case 'Hover':
        classes += ' hover';
        break;
      case 'Disabled':
        classes += ' disabled';
        break;
      default:
        break;
    }
    
    switch (size) {
      case 'Small':
        classes += ' small';
        break;
      case 'Extra small':
        classes += ' extra-small';
        break;
      default:
        break;
    }
    
    return classes;
  };

  return (
    <button
      className={getButtonClasses()}
      onClick={onClick}
      style={backgroundColor && { backgroundColor }}
      disabled={disabled}
    >
      {icon && displayType !== 'Text only' && <img src={icon} alt="Icon" />}
      {label && (displayType !== 'Icon only' || (displayType === 'Icon with text' && icon)) && label}
    </button>
  );
};

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  displayType: PropTypes.oneOf(['Text only', 'Icon only', 'Icon with text']),
  size: PropTypes.oneOf(['Default', 'Small', 'Extra small']),
  status: PropTypes.oneOf(['Default', 'Hover', 'Disabled']),
  type: PropTypes.oneOf(['Default', 'Neutral', 'Reverse']),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

ActionButton.defaultProps = {
  displayType: 'Text only',
  backgroundColor: null,
  size: 'Default',
  status: 'Default',
  disabled: false,
};

export default ActionButton;
