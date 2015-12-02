function getEl(id){

	if (id.indexOf('#') === 0) {
		id = id.slice(1);
	}
	
	return document.getElementById(id);
}


function html(elId) {
	return getEl(elId).innerHTML;
}

function generateGuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	  var r, v;
	  r = Math.random() * 16 | 0;
	  v = c === 'x' ? r : r & 0x3 | 0x8;
	  return v.toString(16);
	});
}

module.exports.html = html; 
module.exports.getEl = getEl; 
module.exports.generateGuid = generateGuid; 