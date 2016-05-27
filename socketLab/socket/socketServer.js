// nodejs ��ݿ� backend���� ����� js ����
// ����� app.js�� ���� �ε���Ŵ

var io = require('socket.io').listen(3003)

io.on('connection', function(socket){
	//data write
	// �������� �Ѳ����� write�ҷ��� json �������
	// news�� ������ ���� �ܾ� : ���� �����Ͱ� � ������ ���������� ǥ���ϱ� ���� ������ category
	// �޴� ������ category������ ���� �̺�Ʈ �� �� ����
	socket.emit('news', 'connect....')
	
	//data read
	// nickname ī�װ��� ������ ������
	socket.on('nickname', function(name){
		// ������ ����
		// global �ʿ� ����
		socket.nickname = name
		socket.emit('news', 'Chat ready')
	})

	socket.on('msg', function(msg){
		// ��� �������� write
		socket.broadcast.emit('news', socket.nickname + '>> ' + msg)
	})
})

