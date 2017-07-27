function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter( function (t) { return collection_b.includes(t) });
}

module.exports = collect_same_elements;
