"use strict";
var Errors_1 = require("../Errors");
/**
 * Created by Josh on 2/20/17.
 * File that is responsible for CSS styling for SVG components
 */
var CSS;
(function (CSS) {
    //all legal CSS attribute names for SVG
    var ATTRIBUTES = {
        "x": true, "y": true, "cx": true,
        "points": true, "cy": true,
        "stroke": true, "fill": true, "color": true,
        "stroke-linejoin": true, "stroke-opacity": true,
        "stroke-width": true, "class": true, "r": true,
        "fill-opacity": true
    };
    //basic css class
    var Base = (function () {
        function Base(name, attributes) {
            if (attributes === void 0) { attributes = {}; }
            this.name = name;
            this.attributes = attributes;
        }
        ;
        Base.prototype.setName = function (name) {
            this.name = name;
        };
        Base.prototype.getName = function () {
            return this.name;
        };
        Base.prototype.setAttr = function (key, value) {
            this.attributes[key] = value;
        };
        //throws cssattribute error
        Base.prototype.getAttr = function (key) {
            if (key in this.attributes)
                return this.attributes[key];
            else
                throw new Errors_1.Errors.CssAttributeError(this.name, key);
        };
        Base.prototype.strFormat = function () {
            var format = "." + this.name + " {\n";
            for (var key in this.attributes) {
                format += "  " + key + ":" + this.attributes[key] + ";\n";
            }
            return format + "}";
        };
        return Base;
    }());
    CSS.Base = Base;
    var Container = (function () {
        function Container(classes) {
            if (classes === void 0) { classes = {}; }
            this.classes = classes;
        }
        ;
        Container.prototype.declareClass = function (name) {
            this.classes[name] = new Base(name);
        };
        Container.prototype.getClass = function (name) {
            if (name in this.classes)
                return this.classes[name];
            else
                throw new Errors_1.Errors.CssClassError(name);
        };
        Container.prototype.updateClass = function (name, dict) {
            var targetClass = this.getClass(name);
            for (var key in dict) {
                targetClass.setAttr(key, dict[key]);
            }
        };
        Container.prototype.createClass = function (name, dict) {
            this.classes[name] = new Base(name, dict);
        };
        return Container;
    }());
    CSS.Container = Container;
})(CSS = exports.CSS || (exports.CSS = {}));
//# sourceMappingURL=CSS.js.map