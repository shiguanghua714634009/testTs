console.log('你好，mygir');

var str:string = '你好，ts';

console.log(str);


enum Color{
    blue,
    red,
    orange
}

let c:Color=Color.red

console.log("c",c);

interface Name{
    firstWord:string;
    secondWord:string;
}


function printName(nameObj:Name){
    console.log('print name',nameObj.firstWord + '-' + nameObj.secondWord);
}

printName({
    secondWord:'光',
    firstWord:"石"
})

// interface configFn{
//     (value1:string,value2:string):string;
// }

// var setData:configFn = function(val1:string,val2:string):string{
//     return val1+val2;
// }

// setData('小','石');

// interface configFn{
//     <T>(value1:T):T
// }

// var setData:configFn = function<T>(value:T):T{
//     return value;
// }

// setData<number>(25);

interface configFn<T>{
    (value:T):T;
}

function setData<T>(value:T):T{
    return value;
}
var myGetData:configFn<string> =setData;
myGetData('sdfjds')

interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[]
}

class MysqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log("info",info);
       return true;
    }    
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
}

class User{
    username:string | undefined;
    password:number | undefined;
}

var u = new User();
u.username = "张三";
u.password = 123455;

var mysq = new MysqlDb<User>();

mysq.add(u);

function logClass(params:string){
    return function(target:any){
        console.log('params',params);
        console.log('target',target);
        target.prototype.name="小石"
    }
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