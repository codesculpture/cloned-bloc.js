// This is Subject has ability to On Listen subscription and UnSubscription

import {  Subject, Subscription } from "rxjs"


class Stream<T> extends Subject<T>{

    constructor() {
        super();
    }

    onListen(): void {}

    subscribe(next?: ((value: T) => void) | undefined, error?: ((error: any) => void) | undefined, complete?: (() => void) | undefined): Subscription {
        if(!this.observed) this.onListen();
        return super.subscribe({next, error, complete});
    }

}

export { Stream };

