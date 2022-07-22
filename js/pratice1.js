const array = [2, 4, 7, 5, 4, 3, 8];
var count = 0;

var monono = array.filter(function (value) {
  var indices = []
  pos = array.indexOf(value, 0);
  while (pos != -1) {
    indices.push(pos);
    pos = array.indexOf(value, pos + 1);
  }

  count++;
  if (indices.length == 1)
    return value;
  else if (indices.length > 1)
  {
    if (indices[0] == count - 1) return value;
  }
});

console.log(array + " => " + monono);
