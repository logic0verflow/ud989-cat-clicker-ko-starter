var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/big',
        nickNames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
    },{
        clickCount: 0,
        name: 'Paul',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/big',
        nickNames: ['Shore']
    },{
        clickCount: 0,
        name: 'Squints',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/big',
        nickNames: ['Sleepy']
    }
];

var Cat = function (data) {
    var self = this;

    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickNames = ko.observableArray(data.nickNames);

    this.level = ko.computed(function() {
        if (this.clickCount() < 10) return 'Newborn';
        if (this.clickCount() < 20) return 'Infant';
        if (this.clickCount() < 30) return 'Teen';
        if (this.clickCount() < 30) return 'Adult';
        return 'Elder';
    }, this);

}

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( this.catList()[0] );

    self.changeCat = function(catSelected) {
        self.currentCat(catSelected);
    };

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());
