
function test() {
    var a = 3.1234;
    console.log(a.toFixed(2));

    console.log("Hello World!");
    var s = '';
    if (s) {
        console.log("Hello World!1111");
    }
    else {
        console.log("Hello World!222");
    }
}


function getItemNamePrefix(protoLv)
{
    let ret = '-';
    ret = ret.repeat(protoLv);
    console.log(ret);
    return ret;
}
// getItemNamePrefix(3);


function testRef() {
    var a = {a:1, b:[1, 2, 3]};
    var b = a.a;
    console.log(b);
    b = 2;
    console.log(b);
    console.log(a.a);

    var c = a.b;
    console.log(a.b);
    c.push(4);
    console.log(c);
    console.log(a.b);

    c = [2, 2, 2];
    console.log(c);
    console.log(a.b);
}

function testRef2() {
    var a={},
    b={key:'b'},
    c={key:'c'};

    a[b]=123;
    a[c]=456;

    console.log(a[b]);
    console.log(b);
    console.log(c);
}

// testRef2();

function testCallback() {
    console.log(1);
    setTimeout(function () {console.log(2)}, 1000);
    setTimeout(function () {console.log(3)}, 0);
    console.log(4);
}
// testCallback();

/**
 * 给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

示例:

输入: [1,2,3,4]
输出: [24,12,8,6]
说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * @param number[] nums 
 */
function productExSelf(nums) {
    let ret = [];
    let k = 1;
    for (let index = 0; index < nums.length; index++) {
        ret[index] = k;
        k = k * nums[index];    // 此时数组存储的是除去当前元素左边的元素乘积
    }

    k = 1;
    for (let index = ret.length - 1; index > ret.length; index--) {
        ret[index] *= k;    // k为该数右边的乘积。
        k *= nums[index];   // 此时数组等于左边的 * 该数右边的。
    }
    return ret;
}


function getStack(index) {
    let stackStr = '';

    let e = new Error();
    let eInfo = e.stack;

    console.log(e.name);
    console.log(e.message);
    console.log(eInfo);

    /**
     * 
        0: "Error"
        1: "    at getStack (<anonymous>:5:13)"
        2: "    at <anonymous>:17:1"
     */
    let infoList = eInfo.split('\n');
    console.log(infoList);

    // 去掉第一行
    infoList.shift();

    let result = [];
    infoList.forEach(function (line) {
        // 去掉每行的开头 '    at '
        line = line.substring(7);

        let strs = line.split(' ');
        if (strs.length < 2)
        {
            result.push(strs[0]);
        } 
        else 
        {
            result.push({[strs[0]] : strs[1]});
        }
    });
    console.log(infoList);
    console.log(result);
    let list = [];
    // if(index <= result.length-1)
    // {
        for(var a in result[1])
        {
            list.push(a);
        }
    // }
    console.log(list);
    if( list.length > 0 ) 
    {
        var splitList = list[0].split(".");
        if( splitList.length >=2 ) 
        {
            return ("["+splitList[0] + ".js->" + splitList[1] + "]");
        }
        return "[" + splitList[0] + "]";
    }

    return stackStr;
}
// console.log(getStack(2));

/**
 * 测试call apply bind
 */
function testCall() {
    var a = {
        name: "a",
        func: function (p1, p2) {
            console.log(this.name, p1, p2);
        }
    }
    a.func();
    var b = a.func;
    // b.call(a, 1, 2);
    b.apply(a, [1, 2]);
}

testCall();

function testPrototype() {
    function point() {
        var p1 = "p1";

        var aa = function () 
        {
            console.log('aa');
        }
    }

    point.prototype.sum = function () {
        console.log('sum');
        return 1+ 2;
    }

    var o1 = new point();
    o1.name1 = 'o1';
    o1.aa();  // 报错，aa is not a funciont

    var o2 = new point();
    o1.name1 = 'o2';

    console.log(o1.p1); // 输出undefined 因为p1是point的私有属性，

    // o1拥有的属性和方法：sum方法,Name1属性。
    // o2拥有的属性和方法：sum方法,Name2属性。

}

testPrototype();