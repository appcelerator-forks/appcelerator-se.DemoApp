function Box(_params) {
    this.view = Ti.UI.createView(_params);
    this.view.height = 50;
    this.view.width = 50;
}

var p1 = "SHHHHH";

Box.prototype.getView = function() {
    return this.view;
};

Box.prototype.animate = function(_params) {
    this.view.animate(_params);
};

Object.defineProperty(Box.prototype, "color", {
    get: function() {
        return this.view.backgroundColor;
    },
    set: function(val) {
        this.view.backgroundColor = val;
    }
});

Object.defineProperty(Box.prototype, "height", {
    get: function() {
        return this.view.height;
    },
    set: function(val) {
        this.view.height = val;
    }
});

Object.defineProperty(Box.prototype, "width", {
    get: function() {
        return this.view.width;
    },
    set: function(val) {
        this.view.width = val;
    }
});

module.exports = Box;