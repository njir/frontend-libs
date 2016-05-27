import { Component } from '@angular/core';//ts 에서의 경로는 앞에 ./이 들어가지 않으면 html 부터의 경로
import {SampleData, UserData} from './sample-codes';//ts 파일부터의 경로

@Component({
    selector: 'my-app',
    templateUrl: './app/tpl/list-item-tpl.html'//templateUrl의 경로는 html 부터 인지된다. ajax에 의한 요청임으로
})
export class AppComponent {
    title = 'AngularJs 2 - Typescript2';
    codes = SampleData;
    user = UserData;
    
    eventData : string;
    
    clickFn(code){
            alert('00');
        alert(code.title);
        this.eventData=code;
    }
}