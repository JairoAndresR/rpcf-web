import {Component, Input, OnInit} from '@angular/core';
import {CloudData, CloudOptions} from 'angular-tag-cloud-module';


@Component({
    selector: 'app-cloud',
    templateUrl: './wordcloud.component.html',
    styleUrls: ['./wordcloud.component.css']
})
export class WordcloudComponent implements OnInit {
    @Input() thematicsList;
    options: CloudOptions = {
        // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
        width: 1000,
        // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
        height: 400,
        overflow: false,
    };

    // data: CloudData[] = [
    //   {text: 'Weight-8-link-color', weight: 28},
    //   {text: 'Wdfnksd', weight: 38},
    //   {text: 'Messirve', weight: 28},
    //   {text: 'Holiwi', weight: 18},
    //   {text: 'kakakaka', weight: 10},
    //   {text: 'ola bola', weight: 5},
    //   {text: 'Jelou', weight: 58},
    // ];

    data: CloudData[] = [];

    ngOnInit(): void {
        for (let i = 0; i < 14; i++) {
          this.data.push({text: this.thematicsList[i].value, weight: this.thematicsList[i].count});
        }
    }
}
