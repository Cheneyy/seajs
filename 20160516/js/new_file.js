define(function(require,exports,module){
	
	function say(){
		var arr = location.search.substr(1).split('&');
//			console.log(arr);
		    var obj = {};
		    for(var i=0;i<arr.length;i++){
		      var str=[];
		      str = arr[i].split('=');
		      obj[str[0]]=str[1];
		    }
		    	console.log(obj);
	}
	//对外提供接口
	module.exports={
		name:'a',
		dosomething:function(){
//			console.log(obj);
		}
	};
	
//	module.exports.say=say;
	module.exports = say;	
})