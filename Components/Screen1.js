import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const Screen1 = ({navigation}) => {
  const [counter, setCounter] = useState(0);

  const handleNavigate = () => {
    navigation.navigate('Screen2', counter);
    setCounter(0);
  };

  // const handleGoBack = () => {
  //   navigation.navigate('Screen1');
  // };

  return (
    <View>
      <Text>Screen 1</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Go to Screen 2" onPress={handleNavigate} />
      {/* <Button title="Go back to Screen 1" onPress={handleGoBack} /> */}
    </View>
  );
};

export default Screen1;
