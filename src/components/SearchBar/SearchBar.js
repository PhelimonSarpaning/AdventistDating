import React from 'react';
import { Input, Icon } from '@ui-kitten/components';

const SearchIcon = (style) => (
  <Icon {...style} name='search' />
);

const SearchBar = () => (
  <Input placeholder='Search' icon={SearchIcon} />
);