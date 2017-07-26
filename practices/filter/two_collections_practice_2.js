'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    return collection_a.filter( function (t) { return !collection_b.includes(t) });
}

module.exports = choose_no_common_elements;
