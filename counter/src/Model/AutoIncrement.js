
import { interval, Subscription } from "rxjs";
import { counter$ } from "./CounterStore";

let autoIncrementSubscription = new Subscription();

export const startAutoIncrement = () => {
  stopAutoIncrement(); 

  autoIncrementSubscription = interval(1100).subscribe(() => {
    const currentState = counter$.value;
    if (currentState.autoIncrement && currentState.count < 98) {
      counter$.next({ ...currentState, count: currentState.count + 1 });
    }
  });
};

export const stopAutoIncrement = () => {
  autoIncrementSubscription.unsubscribe();
};
