// EcommerceProvider.js
import React, { useState } from 'react';
import EcommerceContext from './EcommerceContext';

const EcommerceProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <EcommerceContext.Provider value={{
      searchValue,
      setSearchValue,
      selectedCategory,
      setSelectedCategory
    }}>
      {children}
    </EcommerceContext.Provider>
  );
}

export default EcommerceProvider;
