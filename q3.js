String.prototype.strContains=function (char)
{
  var str=this;
  for(var i=0;i<str.length;i++)
  {
    if(str.charAt(i)==char)
    {
      return true;
    }
    
      
  }
  return false;
}

 console.log("I am a string".strContains("@"));
