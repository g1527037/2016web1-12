
for(var i = 1; i < 101; i++){
  var li = document.createElement('li');
  li.textContent = i ;
  if(i%3=0){
    li.textContent = Fizz;
    }
  document.getElementById('list').appendChild(li);
}

document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('!').word.value);
};
