/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Test that loops through each feed in the allFeeds object and
        //ensures it has a URL defined and that the URL is not empty.



        it('url is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        // Test that loops through each feed in the allFeeds object and
        //ensures it has a name defined and that the name is not empty.


        it('name is defined and name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

    });

    //test suite named "The menu" */

    describe('The menu', function() {

        // Test to ensure menu element is hidden by default.
        it('menu element is hidden by default', function() {
            expect($(document.body).hasClass('menu-hidden')).toBe(true);

        });

        //  Test that ensures the menu changes
        // visibility when the menu icon is clicked.
        // two expectations: does the menu display when clicked and does it hide when clicked again.

        // Test if menu opens on click
        it('menu opens on click', function() {
            $('.menu-icon-link').trigger('click');
            expect($(document.body).hasClass('menu-hidden')).toBe(false);
        });
        // Test if menu closes on second click
        it('menu closes on second click', function() {
            $('.menu-icon-link').trigger('click');
            expect($(document.body).hasClass('menu-hidden')).toBe(true);

        });

    });

    // test suite named "Initial Entries"

    describe('Initial Entries', function() {
        // Test to ensure when the loadFeed function is called and completed, that there
        // is .entry element within the .feed container.
        // Had to use beforeEach and done() function because it is asynchronous loadFeed().
        beforeEach(function(done) {
            loadFeed(0, done)
        });
        it('ensures .entry element is within the .feed container', function() {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    //test suite named "New Feed Selection"

    describe('New Feed Selection', function() {
        //Test that ensures when a new feed is loaded
        // by the loadFeed function that the content actually changes.
        var firstFeed;

        beforeEach(function(done) {
            loadFeed(1, function() {
                firstFeed = $('.feed').html();
                done();
            });
        });
        it('content changes with loading new feed', function(done) {
            loadFeed(0, function() {
                expect($('.feed').html()).not.toEqual(firstFeed);

                done();

            });
        });

    });
}());