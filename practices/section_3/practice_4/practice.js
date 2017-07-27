var count_same_elements = require("../../section_2/practice_2/practice.js");
var create_updated_collection_2 = require("../practice_2/practice.js");

function create_updated_collection(collection_a, object_b) {
  var collection_c=count_same_elements(collection_a);
  return create_updated_collection_2(collection_c,object_b);
}

module.exports = create_updated_collection;
