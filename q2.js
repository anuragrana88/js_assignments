function MetadataParser(version, channel, keyField) {
    this._version = version;
    this._channel = channel;
    this._keyField = keyField;

    this.getVersion = function () {
        return (this._version || '');
    }

    this.setVersion = function () {
        this._version = version;
    }

    this.getChannel = function () {
        return (this._channel || '');
    }

    this.setChannel = function () {
        this._channel = channel;
    }

    this.getKeyField = function () {
        return (this._keyField || '');
    }

    this.setKeyField = function () {
        this._keyField = keyField;
    }

    this.getKeyFields = function (arr) {
        var temp = [];
        if (arr.length > 0) {
            for (var key in arr) {
                temp.push(arr[key][keyField]);
            }
        }
        return temp;
    }
};

var parser = new MetadataParser('1.0', '2', 'channel');
console.log(parser.getKeyField());
console.log(parser.getChannel());
console.log(JSON.stringify(parser.getKeyFields([{'channel': 'A'}, {'channel': 'B'}, {'channel': 'C'}])));