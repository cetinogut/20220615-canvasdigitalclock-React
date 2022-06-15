
export const renderDigitalClock = (context, props) => {
  let {
    top,
    left,
    width,
    height,
    bgColor,
    timeoffset,
    dialColor,
    time24h,
    dialFontSize,
    
  } = props;

  const now = new Date();
  now.setTime(now.getTime() + timeoffset * 1000);
  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hour = time24h ? now.getHours() : now.getHours() % 12 ;
  let secBlink = " . "
  //hour = hour-12; // to test the dark mode manually

  // add a preceeding "0" whe nwe have a single digit
  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  if(hour >= 18 || hour < 6) bgColor ="#1B2430";  //dark mode betwwen 1800-0600

  if (sec % 2 === 0) { //get a fake blink affect on double seconds
    secBlink = " : ";
    
}

  //clearRect(x, y, width, height)
  context.clearRect(top, left, width, height);
  context.beginPath();
  context.fillStyle = bgColor;
  context.rect(top, left, width, height);
  context.fill();
  context.closePath();

  context.fillStyle = dialColor;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.font = dialFontSize + "px Digital-7"; // this is my custom font
  //context.fillText(hour + ":" + min + ":" + sec, (size / 2), size / 2.5); // print time with seconds
  context.fillText(hour + secBlink + min , (width / 2), height / 2.5); // print time without seconds, but with blink eeffect

  setTimeout(() => renderDigitalClock(context, props), 50);
}
