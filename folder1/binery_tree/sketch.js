
var tree;
 
function setup() {
  noCanvas();
  tree = new Tree();
  for(i = 0; i < 10; i++){
    tree.addValue(floor(random(0,100)));
  }
  
  console.log(tree);
  tree.traverse();
  
  var result = tree.search(10);
  if(result != null){
    console.log(result);
  } else {
    console.log("not found");
  }
}







