var crystals = [1,1,1,1];

crystals = crystalShuffle()

function crystalShuffle(){
 
    var arr = [];
  
    for( i = 0; i <= 3; i++){
   
        arr[i] = Math.ceil(Math.random()*12);
    }
  
    return arr

}


function randomint(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
  

function foo(bar) {
    $("#scorenum").text(Number($("#scorenum").text()) + crystals[bar]);
    //check if won

    if (Number($("#scorenum").text()) == target) {
    
        $("#winnum").text(Number($("#winnum")++));
    
        crystalShuffle(crystals);
    
        $("#scorenum").text(0);
    }

    if(Number($("#scorenum").text()) > target) {
    
        $("#goalnum").text(target);
    
        var target = randomint(19,120);
    
        $("#scorenum").text(0);
    
        crystalShuffle(crystals);
    
        $("#lossnum").text(Number($("#lossnum"))++);
    }

}