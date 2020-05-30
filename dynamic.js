



// Create a new list item when clicking on the "Add" button
function newElement()
{
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '')
    {
      alert("You must write something first!");
    }
  else
    {
      document.getElementById("myUL").appendChild(li);
	//display current date
	{
  	  var currentDate  = new Date(),
  	  currentDay   = currentDate.getDate() < 10 ? ('0' + currentDate.getDate()) : (currentDate.getDate());
  	  currentMonth = currentDate.getMonth() < 9 ? ('0' + (currentDate.getMonth() + 1)) : (currentDate.getMonth() + 1);
  	  document.getElementById("date").innerHTML = 'Things to get done on ' + currentDay + '/' + currentMonth + '/' +  currentDate.getFullYear();
	}
    }

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u03A7"); //unicode for greek symbol 'X' //
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);
  var i;
  for (i = 0; i < close.length; i++)
  {
    close[i].onclick = function()
    {
       var div = this.parentElement;
       div.style.display = "none";
    }
  }
}



// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++)
{
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u03A7");
  span.className = "close";
  span.appendChild(text);
  myNodelist[i].appendChild(span);
}



// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++)
{
  close[i].onclick = function()
  {
    var div = this.parentElement;
    div.style.display = "none";
  }  
}



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev)
{
  if (ev.target.tagName === 'LI')
  {
    ev.target.classList.toggle('checked');
  }
}, false);



//Clearing the list
function removeAll()
{
  var list = document.getElementsByTagName("ul");
  list[0].innerHTML = "";
  {
    document.getElementById("date").innerHTML = '';
  }
}
