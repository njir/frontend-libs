// nodejs 기반에 backend에서 수행될 js 파일
// 실행시 app.js에 의해 로딩시킴

var io = require('socket.io').listen(3003)

io.on('connection', function(socket){
	//data write
	// 여러건을 한꺼번에 write할려면 json 방식으로
	// news는 개발자 임의 단어 : 지금 데이터가 어떤 성격의 데이터인지 표현하기 위한 일종의 category
	// 받는 곳에서 category명으로 직접 이벤트 걸 수 있음
	socket.emit('news', 'connect....')
	
	//data read
	// nickname 카테고리에 데이터 들어오면
	socket.on('nickname', function(name){
		// 데이터 저장
		// global 필요 없음
		socket.nickname = name
		socket.emit('news', 'Chat ready')
	})

	socket.on('msg', function(msg){
		// 모든 유저에게 write
		socket.broadcast.emit('news', socket.nickname + '>> ' + msg)
	})
})

