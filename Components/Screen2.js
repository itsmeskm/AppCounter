import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const Screen2 = ({navigation, route}) => {
  let count = route.params;

  // console.log(count, 'flag');
  const [counter, setCounter] = useState(count);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setPaused(false);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCounter(prevCounter => prevCounter + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [paused]);

  const handleNavigate = () => {
    navigation.navigate('Screen3', counter);
    setPaused(true);
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

export default Screen2;
