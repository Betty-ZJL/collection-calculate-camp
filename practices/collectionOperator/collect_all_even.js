'use strict';

function collect_all_even(collection) {
    return collection.filter(function(t){return t%2==0});
}

module.exports = collect_all_even;
