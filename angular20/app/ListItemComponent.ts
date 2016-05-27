import { Component } from '@angular/core';//ts ������ ��δ� �տ� ./�� ���� ������ html ������ ���
import {SampleData, UserData} from './sample-codes';//ts ���Ϻ����� ���

@Component({
    selector: 'my-app',
    templateUrl: './app/tpl/list-item-tpl.html'//templateUrl�� ��δ� html ���� �����ȴ�. ajax�� ���� ��û������
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