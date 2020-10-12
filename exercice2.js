let Temperature =5550,data ="";
function analyzeTemperature(quantity, data) {
  if(quantity <=0)
    return 0;
  else if(quantity <=1000)
  {
    let dat=data.split(' ');

    for(let i=0;i<dat.length ; i++)
     { let element= parseInt(dat[i])
        if(Math.abs(element) <= Temperature)
        Temperature=element;
      }
    
  }
  return Temperature;
}
console.log(analyzeTemperature(5," -2 -8 4 5") );
