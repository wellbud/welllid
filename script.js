function submit(){
  var val1 = parseInt(document.getElementById("num1").value);
  var val2 = parseInt(document.getElementById("num2").value);
  var val3 = parseInt(document.getElementById("num3").value);
  var val4 = parseInt(document.getElementById("num4").value);

  var final = val1 + val2 + val3 + val4;
  document.getElementById("result").textContent = +final  + " / 400 ";
}


var total;
function mean(){
  var val1 = parseInt(document.getElementById("num1").value);
  var val2 = parseInt(document.getElementById("num2").value);
  var val3 = parseInt(document.getElementById("num3").value);
  var val4 = parseInt(document.getElementById("num4").value);

  var final1 = val1 + val2 + val3 + val4; 
  total = final1 / 4;
  document.getElementById("average").textContent = +total;
}

function grade(){
  if(total >= 85 && total <= 100)
    document.getElementById("grades").textContent = 'A - doing good kid';
  else if(total >= 70 && total < 85)
    document.getElementById("grades").textContent = 'B - nice job';

  else if(total >= 55 && total < 70)
    document.getElementById("grades").textContent = 'C - good but could be better';
  else if(total >= 40 && total < 55)
    document.getElementById("grades").textContent = 'D - get those books out';

  else document.getElementById("grades").textContent = 'F - ffs'
}
document.querySelectorAll('input[type=text]').forEach(function(input){
  input.addEventListener('input',limitRange);
});

function limitRange() {
  if (this.value < 0) this.value = 0;
  if (this.value > 100) this.value = 100;
}
