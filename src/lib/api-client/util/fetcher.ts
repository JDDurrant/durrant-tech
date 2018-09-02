import Subscription from './subscription';
import { AxiosPromise } from 'axios';

export default class Fetcher {

    subscriptions: Subscription[] = [];
    promise: AxiosPromise;
    then;
    catch;

    constructor(promise: AxiosPromise) {
        this.promise = promise;
        this.then = this.promise.then;
        this.catch = this.promise.catch;

        const fetcher = this;
        fetcher.promise.then(data => {
            fetcher.subscriptions.forEach(subscription => {
                subscription.fn(data);
            });
        });
    }

    subscribe(fn: (data: object) => void): Subscription {
        const subscription = new Subscription(this, fn)
        this.subscriptions.push(subscription);

        this.promise.then(data => subscription.fn(data));
        
        return subscription;
    }
}
