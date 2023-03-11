import { Genome } from "@dwijbavisi/genetic-pathway";

/**
 * Base class for all elements that use dynamics to define their behavior.
 * @extends HTMLElement
 */
export class DynamicsElement extends HTMLElement {
    /**
     * Creates a new instance of DynamicsElement. And initializes the mutable
     * property to a proxy object that will be used to store the mutable state
     * of the element.
     */
    constructor() {
        super();

        /**
         * A proxy object that will be used to store the mutable state of the
         * element.
         * @type {Proxy}
         */
        this.mutable = new Proxy({}, new Genome(this));
    }
}
