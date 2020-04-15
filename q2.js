


var propertyExists =function (obj, path)
{
  
if(obj.hasOwnProperty(path))
{
    return obj.path;
}
else{
    return false;
}
 
}

var obj = {
    a: 1,
    b: 2,
    c: {
    d: 100,
    e: {
    f: 45
    }
    }
    };

console.log(propertyExists(obj, 'c.d'));
// console.log(propertyExists(obj, 'c.d.g.h')); 
// console.log(propertyExists(obj, 'a.b')); 