declare var str: string;
declare enum Color {
    blue = 0,
    red = 1,
    orange = 2
}
declare let c: Color;
interface Name {
    firstWord: string;
    secondWord: string;
}
declare function printName(nameObj: Name): void;
interface configFn<T> {
    (value: T): T;
}
declare function setData<T>(value: T): T;
declare var myGetData: configFn<string>;
interface DBI<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}
declare class MysqlDb<T> implements DBI<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}
declare class User {
    username: string | undefined;
    password: number | undefined;
}
declare var u: User;
declare var mysq: MysqlDb<User>;
declare function logClass(params: string): (target: any) => void;
