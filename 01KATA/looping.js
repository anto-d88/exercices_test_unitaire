export function loop(){

    let str = "";
    let testObject = {test:""}; 
    
    let array = []; 

    for(let i=1; i<=7; i++){
       

        str += "\n" + "#".repeat(i);
      
        testObject.test = str;
        
        array.push(testObject);
       
    }

    return array;
}
