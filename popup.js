 
let saveBtn = document.getElementById("saveBtn");


saveBtn.addEventListener("click", async () => {
	try{
		displayCurrentStoredIds();
		let newId = document.getElementById("inputToSave").value;
		if(newId == ""){
			return;
		}
		
		let toBeRemoved = document.getElementById(newId);
		if(toBeRemoved != null){
			toBeRemoved.remove();
						
		}
			
		chrome.storage.local.get(['key'], function(result) {
			 if(isEmpty(result)){
				 result.key = [newId];
			 }else{
				  result.key.push(newId);
			 }
			chrome.storage.local.set({'key': result.key}, function() {});
		});

	}catch(e){
		console.log(e);
		alert("error: " + e);
	}
	document.getElementById("inputToSave").value = "";
	
});
 
 function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function displayCurrentStoredIds(){
	chrome.storage.local.get(['key'], function(result) {
		document.getElementById("display").innerHTML = JSON.stringify( result.key);
	});
}