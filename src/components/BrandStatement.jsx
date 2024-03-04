// Brand Statement Component

import React from 'react';

const BrandStatement = () => {
  const brandStatementStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#007bff',
  };

  const highlightStyle = {
    captivating: { color: '#28a745' },
    design: { color: '#6610f2' },
    code: { color: '#dc3545' },
  };

  return (
    <p style={brandStatementStyle}>
      <i>
        "Creating{' '}
        <span style={highlightStyle.captivating}>captivating</span> websites with{' '}
        <span style={highlightStyle.design}>creative design</span> and{' '}
        <span style={highlightStyle.code}>clean code</span>!"
      </i>
    </p>
  );
};

export default BrandStatement;