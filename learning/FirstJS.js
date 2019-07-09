/**
 * xuan
 * first js code
 * 2019-4-19 10:59:20
 */
console.log("hello js");

var reverse = function(x) {
    if (x > 2147483647 || x < -2147483647)
    {
        return 0;
    }
    var ret = '';
    var idxF = 0;
    var flag = 1;
    x = x.toString();
    if (x[0] == '-')
    {
        flag = -1;
        idxF = 1;
    }
    var is0 = false;
    for (let i = x.length - 1; i >= idxF; i--) {
        if (i == x.length - 1 && x[0] == '0')
        {
            is0 == true;
            continue;
        }
        if (is0 == true)
        {
            continue;
        }
        else
        {
            is0 = false;
        }

        ret += x[i];
    }
    ret = Number(ret);
    return ret * flag;
};

var twoSum = function(nums, target) {
    let map = new Array();
    for (let index = 0; index < nums.length; index++) {
        let element = target - nums[index];
        if (map.hasOwnProperty(element))
        {
            return [map[element+""], index];
        }
        map[nums[index]+""] = index;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));