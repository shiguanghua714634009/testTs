console.log('你好，mygir');
var str = '你好，ts';
console.log(str);
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var c = Color.red;
console.log("c", c);
function printName(nameObj) {
    console.log('print name', nameObj.firstWord + '-' + nameObj.secondWord);
}
printName({
    secondWord: '光',
    firstWord: "石"
});
function setData(value) {
    return value;
}
var myGetData = setData;
myGetData('sdfjds');
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log("info", info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDb;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = "张三";
u.password = 123455;
var mysq = new MysqlDb();
mysq.add(u);
function logClass(params) {
    return function (target) {
        console.log('params', params);
        console.log('target', target);
        target.prototype.name = "小石";
    };
}
// @logClass('http://www.baidu.com')
// class Httpclient{
//     constructor(){
//     }
//     getDate(){
//     }
// }
// var obj:any = new Httpclient();
// console.log('name',obj.name);
// function geData(info:Info){
// }
