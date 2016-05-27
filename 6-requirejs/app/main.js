//requirejs�� ���� ��Ȱ..
require.config({

    paths: {
        'jquery': '../../libs/jquery/jquery-1.11.0',
        'angular':'../../libs/angular/angular',
        'domReady': '../../libs/require/domReady'
    },


    //�̰͸����� ���� �ε������� �ʴ´�. �������� ����ϰ��� �ϴ°��� ���. 
    //requirejs�� ���� �� js���� dependency ����� ��� ����ؾ� �ϴµ� 
    //�̰����� �����ϸ� �������� ��밡��..
    shim: {
        'jquery': {
            exports: 'jquery'//�� ���̺귯���� angular��� �̸����� �������� ����϶�
        },
        'angular': {
            deps: ['jquery']//angular�� �������� ���� jquery�� ���� �����;� �Ѵ�.
        }
    },

    deps: [
        './app'//���ʷ� �ε�.deps �� dependency ����� �ϴ� �̸� ���� �ε��ϰ� �ȴ�.
    ]
});