import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const Screen1 = ({navigation, route}) => {
  let count = route.params;
  if (!count) {
    count = 0;
  }
  const [counter, setCounter] = useState(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigate = () => {
    navigation.navigate('Screen3', counter);
  };
  const handleGoBack = () => {
    navigation.navigate('Screen1');
  };

  return (
    <View>
      <Text>Screen 2</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Go to Screen 3" onPress={handleNavigate} />
      <Button title="Go back to Screen 1" onPress={handleGoBack} />
    </View>
  );
};

export default Screen1;
