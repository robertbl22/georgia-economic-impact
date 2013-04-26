define([], function() {"use strict";

    /* Reference:
     * http://blog.ryanvanderpol.com/index.php/2012/07/creating-a-pager-with-knockoutjs-twitter-bootstrap/
     */

    /* Constructor */
    function PagedDataset() {
        var self = this;

        self.dataset = ko.observableArray();
        self.pages = ko.observableArray();
        self.pageIndex = ko.observable(0);
        self.UrlKeys;
        self.tab;

        self.init = function(UrlKeys, tab, totalRecords, pageSize) {
            console.log("PagedDataset.init()")
            console.log(UrlKeys);
            self.UrlKeys = UrlKeys;
            self.tab = tab;
            self.pages(createPagesArray(totalRecords, pageSize));
            self.loadData();
        };
        
        function createPagesArray(totalRecords, pageSize) {
            var pageCount = Math.ceil(totalRecords / pageSize);
            console.log(pageCount)
            var pgs = new Array(pageCount);
            for (var i = 0, j = pgs.length; i < j; i++) {
                pgs[i] = i;
            };
            return pgs;
        };

        self.hasPages = function() {
            return self.pages().length > 1;
        };

        self.isFirstPage = function() {
            return (self.pageIndex() === 0);
        };

        self.isLastPage = function() {
            return (self.pageIndex() === (self.pages().length - 1));
        };

        self.isCurrentPage = function(idx) {
            return self.pageIndex() === idx;
        };

        self.pageBack = function() {
            if (self.pageIndex() > 0)
                self.setPageIndex(self.pageIndex() - 1);
        };

        self.pageForward = function() {
            if (self.pageIndex() < self.pages().length - 1)
                self.setPageIndex(self.pageIndex() + 1);
        };

        self.setPageIndex = function(idx) {
            console.log("setPageIndex running");
            console.log(idx)
            self.pageIndex(idx);
            self.UrlKeys.PageIndex = idx;
            self.loadData();
        };

        self.loadData = function() {
            console.log("PagedDataset.loadData running")
            console.log(self.UrlKeys);
            self.tab.GetData({
                "UrlKeys" : self.UrlKeys,
                "Callback" : function(data) {
                    self.dataset(data);
                    console.log("PagedDataset.loadData finished")
                }
            });
        };
    }

    return (PagedDataset);

});
