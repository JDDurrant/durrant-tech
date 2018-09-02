import Fetcher from './fetcher';

export default class Subscription {

    fn: (data: object) => void;
    fetcher: Fetcher;
    location: number;

    constructor(fetcher: Fetcher, fn: (data: object) => void) {
        this.fetcher = fetcher;
        this.location = fetcher.subscriptions.length;
        this.fn = fn;
    }

    terminate(): Subscription[] {
        this.fetcher.subscriptions.splice(this.location, 1);
        return this.fetcher.subscriptions;
    }
}
