declare const EventDelegation: EventDelegation.Static;
export default EventDelegation;
export as namespace EventDelegation;

// tslint:disable:interface-name

declare namespace EventDelegation {

    interface Static {
        create(options: EventDelegation.Options): EventDelegation.Subscription;
    }

    interface Subscription {

        currentTarget(): HTMLElement;

        remove(): void;
    }

    interface Options {

        /**
         * Optional. Can be either an HTMLElement reference or a CSS style selector for the delegatee element.
         * If not given, document.body will be used as delegatee.
         */
        currentTarget?: HTMLElement | string;

        /**
         * Selector that matches against the delegating elements. E.g. "li" | ".item"
         */
        selector: string;

        /**
         * This would be "click", "mouseenter", etc...
         */
        event: string;

        /**
         * The listener callback to invoke. If it is a regular function its call context will be the element
         * that matched delegatorSelector.
         */
        listener: DelegationEventListener;

        /**
         * Optionally provide the options to pass through to internal `addEventListener` calls
         */
        listenerOptions?: AddEventListenerOptions;
    }

    interface DelegationEvent extends Event {
        delegator: HTMLElement;
    }

    interface DelegationEventListener {
        (evt: DelegationEvent): void;
    }
}
