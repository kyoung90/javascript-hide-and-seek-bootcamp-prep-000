function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  var lis = document.queryElementById("app").querySelectorAll(".ranked-list");
  
  for(var i = 0; i < lis.length; i++){
    lis[i].innerHTML = toString(parseInt(lis[i].innerHTML) + n);
  }
  
}

function deepestChild(){
  var divs = document.queryElementById("grand-node").querySelectorAll("div");
  
  
}