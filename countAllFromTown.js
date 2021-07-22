function countAllFromTown(itemName) {
  
    let counter = 0;
    const item = itemName.split (',');
   
    for (var i=0;i<item.length;i++) {
      let fromTown = item[i];
      if(fromTown.startsWith('CL')) {
        counter ++;
      }
     else if(fromTown.startsWith('CF')) {
      counter++;
     }
    }
    return counter;
  }
   
      
       
          
    
     
  
       
  
  