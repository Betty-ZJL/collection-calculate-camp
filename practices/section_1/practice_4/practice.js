function collect_same_elements(collection_a, object_b) {
  var result=[];
  collection_a=collection_a.filter( function (t) { return object_b.value.includes(t.key) });
  for(let x of collection_a)
    result.push(x.key);
  return result;
}

module.exports = collect_same_elements;
