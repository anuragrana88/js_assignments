var groupObjectsBy = function (arr, keyName) {
    var cache = {};
    cache['GIVEN_KEY_NAME_DOESNT_EXISTS'] = [];
    for (var i = 0; i < arr.length; i++) {
        var data = arr[i];
        if (data.hasOwnProperty(keyName)) {
            if (!cache.hasOwnProperty(data[keyName])) {
                cache[data[keyName]] = [];
            }
            cache[data[keyName]].push(data);
        } else {
            cache['GIVEN_KEY_NAME_DOESNT_EXISTS'].push(data);
        }
    }
    return cache;
};

var arrayObj = [
    {
        "channel": "A",
        "name": "shoe"
    },
    {
        "channel": "A",
        "name": "electronics"
    },
    {
        "channel": "B",
        "name": "apparel"
    },
    {
        "channel": "C",
        "name": "electronics"
    }
];

console.log(groupObjectsBy(arrayObj, 'channel'));