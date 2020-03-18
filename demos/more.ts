
const user = {
    name: 'tim',
    age: 42,
    sex: 'male',
    role: 'vip',
    id: 233
};
// 索引类型
function pick<T extends Object, U extends keyof T>(o: T, names: U[]): T[U][] {
    return names.map(n=>o[n]);
}
pick(user, ['name', 'role']);

interface User {
    username: string
    id: number
    token: string
    avatar: string
    role: string
}
// 映射类型
type partial<T> = {[k in keyof T]?: T[k]}

type partialUser = partial<User>

// 条件类型
declare function f<T extends boolean>(x: T): T extends true? string:number;


type Diff<T, U> = T extends U ? never : T;

type r = Diff<"a"|"b"|"c"|"d", "a"|"c"|"f">

const a:r = 'b';