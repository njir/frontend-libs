define([
    'jquery',//�� ���� <script>�� �ε�.. angular �� shim ���� ������ �������� ���� �Ѱ�������
    //�ε� ��Ű�� �ǰ� ���� �������� �׳� �̿밡��..
    './products/product1',
    './users/user'
], function (jquery, product1,user) {
	product1.addToCart();
	test('app');
});