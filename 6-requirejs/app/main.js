//requirejs의 설정 역활..
require.config({

    paths: {
        'jquery': '../../libs/jquery/jquery-1.11.0',
        'angular':'../../libs/angular/angular',
        'domReady': '../../libs/require/domReady'
    },


    //이것만으로 아직 로딩되지는 않는다. 전역에서 사용하고자 하는것을 명시. 
    //requirejs에 의해 각 js들이 dependency 관계로 엮어서 사용해야 하는데 
    //이곳에서 선언하면 전역에서 사용가능..
    shim: {
        'jquery': {
            exports: 'jquery'//이 라이브러리를 angular라는 이름으로 전역에서 사용하라
        },
        'angular': {
            deps: ['jquery']//angular를 가져오기 전에 jquery를 먼저 가져와야 한다.
        }
    },

    deps: [
        './app'//최초로 로딩.deps 란 dependency 관계로 일단 이를 먼저 로딩하게 된다.
    ]
});