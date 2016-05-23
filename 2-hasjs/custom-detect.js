(function(has, addtest, cssprop){
	// add new feature detection
	var canvas = document.createElement('canvas');
	
	// feature detection �� �ʿ��� ������ has('canvas') ���
	// �� ���� �Ʒ��Լ� ȣ�� return true or false
	addtest('canvas', function(){
		return has.isHostType(canvas, 'getContext');
	});
	
	var input = document.createElement('input');
	addtest('input-multiple', function(){
		return ('multiple' in input);
	});
	
})(has, has.add, has.cssprop);