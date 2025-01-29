

import { startAutoIncrement, stopAutoIncrement } from "../Model/AutoIncrement";
import { counter$ } from "../Model/CounterStore";



export const increment = () => {
  counter$.next({ ...counter$.value, count: Math.min(counter$.value.count + 1, 98) });
};

export const decrement = () => {
  counter$.next({ ...counter$.value, count: Math.max(counter$.value.count - 1, 0) });
};

export const reset = () => {
  counter$.next({ ...counter$.value, count: 0 });
};

export const toggleAutoIncrement = () => {
  const currentState = counter$.value;
  const newState = { ...currentState, autoIncrement: !currentState.autoIncrement };

  counter$.next(newState);

  if (newState.autoIncrement) {
    startAutoIncrement();
  } else {
    stopAutoIncrement();
  }
};
