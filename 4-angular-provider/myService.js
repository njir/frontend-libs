// ���� �ڵ� �ۼ��ڿ� ���� ���ߵȴٰ� ����
// ������ module �����ϰ� �װ��� �����ڵ� ����ϰ� ���� js ���Ϸ� �����ؼ� ���� html(controller) �����ڵ��� js ���
// module dependency�� �̿�

var myService = angular.module('myService', [])

myService.provider('helloProvider', function(){
	this.name = 'tak'
	// provider�� �� ���ο� $get �Լ��� ������ �־�� �Ѵ�.
	// provider ��ü�� module�� config���� �̿� ����
	// $get �ܺδ� config������ ���� ����
	// ���� controller�� �̿��ϱ� ���� ������ ������, ������ ���� 
	this.$get = function(){
		var name = this.name
		return {
			//return ��Ų �Լ����� controller���� ȣ��
			sayHello: function(){
				return 'Hello' + name
			}
		}
	}
	this.setName = function(name){
		this.name = name
	}
})

myService.factory('helloFactory', function(){
	// ������ ���� �ڵ� �и��ϰ� ������ module�� config���� �� �۾��� ���� ���
	// $get ���θ� �߻�ȭ ��Ų ����
	var count = 0
	for(var i = 1; i < 11; i++){
		count += i
	}
	return {
		// return ��Ų �Լ��� controller�� ȣ��
		// controller �̿� �Լ� �̿ܿ� �̰� ���θ��� ���� �ڵ�
		// �Լ��� �ִ� ���
		sayHello: function(){
			return 'Hello ' + count
		}
	}
})

myService.service('listService', function(){
	//factory �� return �κ� �߻�ȭ
	// �ڽ��� ��� ������ controller���� �����ϸ� �Ǵ°���
	
	var uid = 1
	var list = []
	this.save = function(item){
		if(itme.id == null){
			// add ������
			item.id = uid++
			list.push(item)
		} else {
			// �ĺ��� ���� �̹� �ִ� ���� udpate�� ������
			for(i in list){
				if(list[i].id == item.id){
					list[i] = item
				}
			}
		}
	}
	this.get = function(id){
		// id�� �����Ǵ� ������ ����
		for(i in list){
			if(list[i].id == id){
				return list[i]
			}
		}
	}
	this.remove = function(id){
		// delete
		for(i in list){
			if(list[i].id == id){
				list.splice(i, 1)
			}
		}
	}
	this.list = function(){
		/// ��� ��ü
		return list
	}
})

	
// module�� config ��������� provider�� Injection ���� �� �ִ�
// DI �������� �̸��� �߿�
// <<provider-name>>+Provider ���̹� ��Ģ
myService.config(function(helloProviderProvider){
	helloProviderProvider.setName('Provider')
})