var recipes = new Object();

function updateObjectWithKeyandValue(object, key, value){
  return object.key = value;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

}

function deleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key){

}
