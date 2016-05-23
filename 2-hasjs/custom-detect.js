(function(has, addtest, cssprop){
	// add new feature detection
	var canvas = document.createElement('canvas');
	
	// feature detection 이 필요한 곳에서 has('canvas') 사용
	// 그 순간 아래함수 호출 return true or false
	addtest('canvas', function(){
		return has.isHostType(canvas, 'getContext');
	});
	
	var input = document.createElement('input');
	addtest('input-multiple', function(){
		return ('multiple' in input);
	});
	
})(has, has.add, has.cssprop);