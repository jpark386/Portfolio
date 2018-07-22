const icons = [
    "https://image.flaticon.com/icons/svg/189/189001.svg",
    "https://image.flaticon.com/icons/svg/188/188987.svg",
    "https://image.flaticon.com/icons/svg/188/188990.svg",
    "https://image.flaticon.com/icons/svg/188/188989.svg",
    "https://image.flaticon.com/icons/svg/188/188993.svg",
    "https://image.flaticon.com/icons/svg/189/189000.svg",
    "https://image.flaticon.com/icons/svg/188/188995.svg",
    "https://image.flaticon.com/icons/svg/188/188997.svg",
  ];
  icons.forEach(function(icon,i) {
    let img = document.createElement("img");
    img.src=icon;
    document.body.appendChild(img);
    
    img.style.top = i * 20 + "px";
    img.style.left = i * 20 + "px";
  })
  