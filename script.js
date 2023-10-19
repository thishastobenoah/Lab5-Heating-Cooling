let actualTemp;
let desiredTemp;

if(actualTemp < desiredTemp){
    console.log("Run heat");
}else if(actualTemp > desiredTemp){
    console.log("Run A/C");
}else{
    console.log("Standby");
}


let tempCelcius;
let targetUnit = "K";

switch(targetUnit) {
    case K:
      console.log(tempCelcius + 273.15)
      break;
    case F:
      console.log((tempCelcius * 9/5) + 32)
      break;
    default:
      console.log(tempCelcius);
  }