import React, { useEffect, useState } from "react";


import { Button, HStack, Switch, Text, VStack } from "@chakra-ui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsRepeat } from "react-icons/bs";
import { decrement, increment, reset, toggleAutoIncrement } from "../Intent/CounterIntent";
import { counter$ } from "../Model/CounterStore";



const Counter = () => {
  const [state, setState] = useState(counter$.value);

  useEffect(() => {
    const subscription = counter$.subscribe(setState);
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      
      <VStack spacing="12">
        <Text fontSize="6xl">{state.count}</Text>
        <HStack spacing="8">
            <Button colorScheme="green" onClick={increment}> <BiPlus/></Button>
            <Button onClick={reset}><BsRepeat /> </Button>
            <Button colorScheme="red" onClick={decrement}><BiMinus/></Button>
        </HStack>
        
       <HStack spacing="12">
            
            <Text>
                { "Auto Increment"}
            </Text>
            <Switch isChecked={state.autoIncrement} onChange={toggleAutoIncrement} />
       </HStack>
       
      </VStack>
      
    </div>
  );
};

export default Counter;
