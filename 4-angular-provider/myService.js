// 공통 코드 작성자에 의해 개발된다고 가정
// 별도의 module 선언하고 그곳에 공통코드 등록하고 독립 js 파일로 배포해서 실제 html(controller) 개발자들이 js 등록
// module dependency로 이용

var myService = angular.module('myService', [])

myService.provider('helloProvider', function(){
	this.name = 'tak'
	// provider는 꼭 내부에 $get 함수를 가지고 있어야 한다.
	// provider 객체는 module의 config에서 이용 가능
	// $get 외부는 config에서만 접근 가능
	// 실제 controller가 이용하기 전에 설정할 데이터, 업무를 위해 
	this.$get = function(){
		var name = this.name
		return {
			//return 시킨 함수들을 controller에서 호출
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
	// 업무의 공통 코드 분리하고 싶은데 module의 config에서 할 작업이 없는 경우
	// $get 내부만 추상화 시킨 형태
	var count = 0
	for(var i = 1; i < 11; i++){
		count += i
	}
	return {
		// return 시킨 함수만 controller는 호출
		// controller 이용 함수 이외에 이곳 내부만을 위한 코드
		// 함수가 있는 경우
		sayHello: function(){
			return 'Hello ' + count
		}
	}
})

myService.service('listService', function(){
	//factory 의 return 부분 추상화
	// 자신의 모든 내용을 controller에게 공개하면 되는걍으
	
	var uid = 1
	var list = []
	this.save = function(item){
		if(itme.id == null){
			// add 업무로
			item.id = uid++
			list.push(item)
		} else {
			// 식별자 값이 이미 있는 경우로 udpate로 봐야함
			for(i in list){
				if(list[i].id == item.id){
					list[i] = item
				}
			}
		}
	}
	this.get = function(id){
		// id로 삭제되는 데이터 전달
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
		/// 목록 전체
		return list
	}
})

	
// module의 config 블락에서는 provider는 Injection 받을 수 있다
// DI 개념으로 이름이 중요
// <<provider-name>>+Provider 네이밍 규칙
myService.config(function(helloProviderProvider){
	helloProviderProvider.setName('Provider')
})