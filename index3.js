

function rgb(){
    var r = Math.floor((Math.random() * 255));
    var g = Math.floor((Math.random() * 255));
    var b = Math.floor((Math.random() * 255));
           
    return "rgb(" + [r,g,b].join(',') + ")";
    }
    
function sparkle(){
    let tree = document.getElementById('star_tree');
    let colors = [rgb()];
    tree.style.backgroundColor = colors;
    document.getElementById('rgbtext').innerHTML = colors;
   }

function start(){
    interval = setInterval(sparkle,2000);
   
   }
    
function stop(){
    clearInterval(interval);
   }
    
  