
function removeElementsById(){
	try{
		chrome.storage.local.get(['key'], function(results) {
		
		if(results != null && results.hasOwnProperty('key')){
			for (let id of results.key) {
			 var elem = document.getElementById(id);
			 if(elem != null){
				 elem.remove();
				 console.log("removed: " +id);
			 } 
			}
		}
	});
	
	
		setTimeout(removeElementsById, 2000);
	}catch(e){
		console.log(e);
	}
}

window.addEventListener('DOMContentLoaded', (event) => {
	console.log("DOMContentLoaded...");
	 
	try{
		
		removeElementsById();
	}catch(e){
		console.log(e);
	}
})

  