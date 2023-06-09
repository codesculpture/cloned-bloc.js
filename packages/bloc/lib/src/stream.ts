// This is Subject has ability to On Listen subscription and UnSubscription

import {  Subject, Subscription } from "rxjs"



interface StreamLike<T> extends Subject<T> {
    onCancel(): void,
    onListen(): void
}

class Stream<T> implements StreamLike<T>{

    constructor() {
        super();
    }

    onCancel(): void {}
    onListen(): void {}

    subscribe(next?: ((value: T) => void) | undefined, error?: ((error: any) => void) | undefined, complete?: (() => void) | undefined): Subscription {
        if(!this.observed) this.onListen();

        const subscription = super.subscribe({next, error, complete}); 
        
        subscription.unsubscribe = () => {
            Subscription.prototype.unsubscribe.call(subscription);

            if(!this.observed) this.onCancel();
        }
    }

}

export { Stream };

