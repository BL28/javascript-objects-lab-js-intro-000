var recipes = new Object();

function updateObjectWithKeyandValue(object, key, value){
  return object = object.assign({},value)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return object.key = value;
}

function deleteFromObjectByKey(object, key){

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
