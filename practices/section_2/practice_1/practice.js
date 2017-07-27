function count_same_elements(collection) {
  var result=[];
  while(collection.length){
    var flag=1;
    var x=collection.shift();
    for(let item of result){
      if(item.key==x){
        item.count++;
        flag=0;
      }
    }
    if(flag){
      result.push({key:x,count:1});
    }
  }
  return result;
}

module.exports = count_same_elements;
