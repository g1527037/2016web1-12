for(var i = 1; i < 101; i++){
  var li=document.CreateElement('li');
  li.textContent= i;
  document.getElementById('list').appendChild(li);
};
document.getElementById('form').onsubmit = function(){
  window.alert('!');
};
