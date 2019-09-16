var info=[]
var no=0;

function showbox()
{
  info[no]=document.getElementById('search').value;
  no=no+1;
  printbox();
}

function printbox()
{
  var i;

  for(i=0;i<info.length;i++)
  {
    document.write(info[i]);
  }
}
