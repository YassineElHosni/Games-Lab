
var tree;
 
function setup() {
  
  createCanvas(600,400);
  background(51);
  
  tree = new Tree();
  
}
function setNodes(){
  console.log(tree);
  tree.traverse();
  
  var result = tree.search(10);
  if(result != null){
    console.log(result);
  } else {
    console.log("not found");
  }
}

function mousePressed(){
    tree.addValue(floor(random(0,100)));
    background(51);
    setNodes();
    
}







