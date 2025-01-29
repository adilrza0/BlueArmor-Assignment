import { BehaviorSubject } from "rxjs";


export const counter$ = new BehaviorSubject({ count: 0, autoIncrement: false });
