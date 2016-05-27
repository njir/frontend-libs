$(function(){
	$('#grid').jqGrid({
		url: '/WebAppLab/spring/member',
		datatype: 'xml', //server���� �Ѿ���� ������. json or xml
		mtype: 'GET',
		// column title ���ڿ�
		colName: ['UserId', 'Phone', 'Email', 'Address', 'RegDate', 'Note'],
		// column ����
		colModel: [{
			name: 'memberId', //server�κ��� �ѿ��� ������ �� �� column data�� �ĺ��ϴ� key��
			index: 'memberId', //column�����͸� ������ �ѱ涧 key
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
			root: 'page', // ��ü �����и� ���δ� root tag��
			row: 'rows', // �� row�����͸� ���δ� tag
			page: 'page>page', //������ ��ȣ
			total: 'page>total', //������ ����
			records: 'max', //��ü ������ ����
			repeatitems: false,
			id: 'rows>id',
		},
		pager: $('#pager'),
		rowNum: 10, //�ʱ� ������ ����
		rowList: [10, 20, 30], //���� ���� ������ ����
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
		cellurl: 'aaa', //edi ajax url�� ������ �����ϰ�
		afterEditCell: function(id, name, val, iRow, iCol){
			alert(id)
		},
	})
	
	// �˻� dialog ����
	$('#grid').jqGrid('navGrid', '#pager', {
		//toolbar ����
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
		rulesText: 'rules', //���� ���� ���� json���� ����� ��û�ϴµ� �� �˻� ������ ���� json�� key����
		multipleSearch: true,
		multipleGroup: true,
	})
})