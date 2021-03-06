export = FeedEmitter;
declare const FeedEmitter_base: any;
/**
 * MAIN CLASS
 * This is where we extend from TinyEmitter and absorve
 * the #emit and #on methods to emit 'new-item' events
 * when we have new feed items.
 * @extends EventEmitter
 * @class
 */
declare class FeedEmitter extends FeedEmitter_base {
    [x: string]: any;
    /**
     * Checks that the feed object is valid
     * @param       {Object} feed to validate
     * @param       {string} ua User Agent string to pass to feeds
     */
    static validateFeedObject(feed: any, ua: string): void;
    /**
     * The constructor special method is called everytime
     * we create a new instance of this "Class".
     * @param {Object} [options={ userAgent: defaultUA }] [description]
     */
    constructor(options?: any);
    /**
     * Array of feeds that are tracked
     * @private
     * @type {Feed[]}
     */
    private feedList;
    /**
     * If the user has specified a User Agent
     * we will use that as the 'user-agent' header when
     * making requests, otherwise we use the default option.
     * @private
     * @type {string}
     */
    private userAgent;
    /**
     * Whether or not to skip the normal emit event on first load
     * @private
     * @type {boolean}
     */
    private skipFirstLoad;
    /**
     * UserFeedConfig typedef
     * @typedef {Object} UserFeedConfig
     * @property {(string|string[])} url Url string or string array. Cannot be null or empty
     * @property {Number} refresh Refresh cycle duration for the feed.
     */
    /**
     * ADD
     * The #add method is one of the main ones. Basically it
     * receives one parameter with the feed options, for example:
     * {
     *    url: "http://www.nintendolife.com/feeds/news",
     *    refresh: 2000
     *  }
     * @public
     * @param {UserFeedConfig[]} userFeedConfig user feed config
     * @returns {Feed[]}
     */
    public add(...userFeedConfig: {
        /**
         * Url string or string array. Cannot be null or empty
         */
        url: (string | string[]);
        /**
         * Refresh cycle duration for the feed.
         */
        refresh: number;
    }[]): import("./Feed")[];
    /**
     * REMOVE
     * This is a very simple method and its functionality is
     * remove a feed from the feedList.
     * @public
     * @param  {string} url   URL to add
     * @returns {Feed}     item removed from list
     */
    public remove(url: string): import("./Feed");
    /**
     * List of feeds this emitter is handling
     * @public
     * @returns {Feed[]} Feed arrray
     */
    public get list(): import("./Feed")[];
    /**
     * Remove all feeds from feedList
     * @public
     */
    public destroy(): void;
    /**
     * Add or remove a feed in the feed list
     * @private
     * @param {Feed} feed feed to be removed if it's present or added if it's not
     */
    private addOrUpdateFeedList;
    /**
     * Find and return a feed
     * @private
     * @param  {UserFeedConfig} feed Feed to look up
     * @returns {Feed | null}
     */
    private findFeed;
    /**
     * Add a feed to the feed list
     * Side effects:
     *  - Clear feed items list
     *  - Create an interval for the feed
     * @private
     * @param {Feed} feed feed to be added
     */
    private addToFeedList;
    /**
     * Set up a recurring task to check for new items
     * @private
     * @param  {Object} feed Feed to be removed
     * @returns {Interval}      interval for updating the feed
     */
    private createSetInterval;
    /**
     * Remove feed from the feed list
     * Side effects:
     * - Destroys the feed first
     * @private
     * @param  {Feed} feed feed to be removed
     */
    private removeFromFeedList;
}
