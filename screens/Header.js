import * as React from 'react';
import {Appbar, Title} from 'react-native-paper';
import {View, Text} from 'react-native';

const Header = props => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header
      theme={{colors: {primary: 'violet'}}}
      style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Title style={{color: 'white'}}>{props.name}</Title>
    </Appbar.Header>
  );
};

export default Header;
