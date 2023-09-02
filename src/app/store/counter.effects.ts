import {Actions, createEffect, ofType} from "@ngrx/effects";
import {decrement, increment, init, set} from "./counter.actions";
import {of, switchMap, tap, withLatestFrom} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectCount} from "./counter.selector";

@Injectable()
export class CounterEffects {
  loadCount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(init),
      switchMap(() => {
          const storedCount = localStorage.getItem('count');
          if (storedCount) {
            return of(set({value: +storedCount}));
          }
          return of(set({value: 0}));
        }
      )
    );
  })

  saveCount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(increment, decrement),
      withLatestFrom(this.store.select(selectCount)),
      tap(([action, count]) => {
        console.log(action);
        localStorage.setItem('count', count.toString());
      })
    )
  }, {dispatch: false});

  constructor(private actions$: Actions,
              private store: Store<{ counter: number }>) {
  }
}
