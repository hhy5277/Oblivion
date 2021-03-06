"use strict";
var STD_1 = require("./Comp/STD");
var Color_1 = require("./svg/Color");
var Point_1 = require("./svg/Point");
var draw_1 = require("./svg/draw");
/**
 * Created by Josh on 2/13/17.
 * File that holds the standard library
 */
//processes AST nodes
var Lib;
(function (Lib) {
    //retrieves a library function
    Lib.get = function (AST) {
        if (Lib.contains(AST))
            return Lib.defs[AST["node"]];
    };
    Lib.contains = function (AST) {
        return AST["node"] in Lib.defs;
    };
    //optimized function for calling AST against the active library
    Lib.defs = {
        "?=": STD_1.STD.assign,
        "?func": STD_1.STD.func,
        "?params": STD_1.STD.params,
        "?name": STD_1.STD.name,
        "?process": STD_1.STD.process,
        "?method": STD_1.STD.methodCall,
        "?.": STD_1.STD.attribute,
        "+": STD_1.STD.add,
        "-": STD_1.STD.sub,
        "*": STD_1.STD.mul,
        "/": STD_1.STD.div,
        "%": STD_1.STD.rem,
        "==": STD_1.STD.eq,
        "~=": STD_1.STD.same,
        "!=": STD_1.STD.ne,
        "<": STD_1.STD.lt,
        ">": STD_1.STD.gt,
        "<=": STD_1.STD.le,
        ">=": STD_1.STD.ge,
        "||": STD_1.STD._or,
        "&&": STD_1.STD._and,
        "!!": STD_1.STD.rand,
        "?if": STD_1.STD._if,
        "?loop": STD_1.STD.loop,
        "print": STD_1.STD.print,
        "?number": STD_1.STD.c_number,
        "?list": STD_1.STD.c_list,
        "?bool": STD_1.STD.c_bool,
        "?null": STD_1.STD.c_null,
        "?word": STD_1.STD.wordVar,
        "?return": STD_1.STD._return,
        /*Lib functons with !*/
        "range": STD_1.STD.range,
        "repeat": STD_1.STD.repeat,
        "pop": STD_1.STD.pop,
        "len": STD_1.STD.len,
        "in": STD_1.STD._in,
        "insert": STD_1.STD.insert,
        "slice": STD_1.STD.slice,
        "&": STD_1.STD.extend,
        "=>": STD_1.STD.attrAssign,
        "find": STD_1.STD.find,
        "call": STD_1.STD.call,
        /*SVG*/
        "?point": Point_1.Points.makePoint,
        "->": draw_1.Draw.lineConnect,
        "*>": draw_1.Draw.shapeConnect,
        "?draw": draw_1.Draw.draw,
        "?color": Color_1.Colors.makeColor,
        "|=": Color_1.Colors.colorfFunc
    };
})(Lib = exports.Lib || (exports.Lib = {}));
//# sourceMappingURL=Lib.js.map