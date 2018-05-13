var recipes = new Object();

function updateObjectWithKeyandValue(object, key, value){
  return object = object.assign({key: value},object);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return object.key = value;
}

function deleteFromObjectByKey(object, key){
  delete object.key;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
