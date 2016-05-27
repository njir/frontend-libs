$(function(){
	$('#grid').jqGrid({
		url: '/WebAppLab/spring/member',
		datatype: 'xml', //server에서 넘어오는 데이터. json or xml
		mtype: 'GET',
		// column title 문자열
		colName: ['UserId', 'Phone', 'Email', 'Address', 'RegDate', 'Note'],
		// column 설정
		colModel: [{
			name: 'memberId', //server로부터 넘오는 데이터 중 이 column data를 식별하는 key값
			index: 'memberId', //column데이터를 서버에 넘길때 key
			width: 55,
			editable: true,
			edittype: 'text',
			editoptions: {
				size: 10,
				maxlength: 15,
			},
		}, {
			name: 'phone',
			index: 'phone',
			align: 'center',
			edittable: true,
			edittype: 'select',
			editoptions: {
				value: {
					1: 'One',
					2: 'Two',
				}
			}
		}, {
			name: 'email',
			index: 'email',
		}, {
			name: 'address',
			index: 'address',
			
		}, {
			name: 'regdate',
			index: 'regdate',
		}, {
			name: 'note',
			index: 'note',
		}],
		xmlReader: {
			root: 'page', // 전체 데이털르 감싸는 root tag명
			row: 'rows', // 각 row데이터를 감싸는 tag
			page: 'page>page', //페이지 번호
			total: 'page>total', //페이지 갯수
			records: 'max', //전체 데이터 갯수
			repeatitems: false,
			id: 'rows>id',
		},
		pager: $('#pager'),
		rowNum: 10, //초기 데이터 갯수
		rowList: [10, 20, 30], //유저 선택 데이터 갯수
		viewrecords: true,
		autowidth: true,
		height: 200,
		loadtext: 'Loading..',
		recordtext: 'View {0} - {1} of {2}',
		sortable: true,
		sortname: 'memberId',
		sortorder: 'desc',
		
		//edit mode..
		cellEdit: true,
		cellurl: 'aaa', //edi ajax url를 별도로 지정하게
		afterEditCell: function(id, name, val, iRow, iCol){
			alert(id)
		},
	})
	
	// 검색 dialog 띄우기
	$('#grid').jqGrid('navGrid', '#pager', {
		//toolbar 설정
		edit: false,
		add: false,
		del: false,
		search: true
	}, {}, {}, {}, {
		caption: 'MySearch',
		Find: 'Search',
		Reset: 'Reset',
		groupOps: [{
			op: 'AND',
			text: 'ALL',
		}, {
			op: 'OR',
			text: 'ANY',
		}],
		rulesText: 'rules', //여러 조건 들어가면 json으로 만들어 요청하는데 각 검색 조건을 묶는 json의 key문쟈열
		multipleSearch: true,
		multipleGroup: true,
	})
})