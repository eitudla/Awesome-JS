const isEmptyObject = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

/* 

let obj = {};
isEmptyObject(obj); // true

*/
