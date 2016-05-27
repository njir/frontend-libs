define([
    'jquery',//이 순간 <script>로 로딩.. angular 는 shim 에서 선언한 것임으로 최초 한곳에서만
    //로딩 시키면 되고 이후 전역에서 그냥 이용가능..
    './products/product1',
    './users/user'
], function (jquery, product1,user) {
	product1.addToCart();
	test('app');
});