function SortArray(arr) {
    this._originalArray = arr;
    this._getSortedArray = function () {
        return _sortArray();
    }
    var _sortArray = function () {
        return arr.sort();
    }

    this.typeText = function () {
        console.log("text typed");
    }
}

var srt = new SortArray([23, 1, 4, 44, 8, 99]);
console.log(srt._getSortedArray());

function SortObjectArray(arrObj) {
    this.array = arrObj;
    this.sortData = function () {
        return arrObj.sort(function (a, b) {
            return (a.id - b.id);
        });
    }
}

SortObjectArray.prototype = srt;

var srtObj = new SortObjectArray([{'id': 21, 'name': 'ht'}, {'id': 1, 'name': 'ht2'}, {'id': 33, 'name': 'ht1'}]);
console.log(srtObj.sortData());
console.log(srtObj.typeText());