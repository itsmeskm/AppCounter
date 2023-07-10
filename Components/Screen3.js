import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const Screen3 = ({navigation, route}) => {
  const count = route.params;

  const [counter, setCounter] = useState(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleGoBack = () => {
    navigation.navigate('Screen2', counter);
  };

  const handleGoToScreen1 = () => {
    navigation.navigate('Screen1');
    setCounter(0);
  };

  return (
    <View>
      <Text>Screen 3</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Go back to Screen 2" onPress={handleGoBack} />
      <Button title="Go to Screen 1" onPress={handleGoToScreen1} />
    </View>
  );
};

export default Screen3;
