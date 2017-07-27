function collect_same_elements(collection_a, object_b) {
   return collection_a.filter( function (t) { return object_b['value'].includes(t) });
}

module.exports = collect_same_elements;
