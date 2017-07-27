function create_updated_collection(collection_a, object_b) {
  for(let item of collection_a)
    if(object_b['value'].includes(item.key))
         item.count-=parseInt(item.count/3);
  return collection_a;
}

module.exports = create_updated_collection;
