import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { BarsModel } from 'src/models/bars';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'progress-bar-assignment';

  endPoint: BarsModel;
  buttons: number[];
  bars: number[];
  limit: number;
  httpGetEndPointService$: Subscription;
  selectedBar: any;
  widthArray: number[];

  selectedIndexOfWidthArr: number;


  constructor(
    private httpService: HttpService,
    ) {}

  ngOnInit():void{
    this.httpService.GetEndPoint().subscribe((res:BarsModel) =>{
        console.log(res);
        this.endPoint = res;
        this.buttons = res.buttons;
        this.bars = res.bars;
        this.limit = res.limit;
      },
      (error: any) => { console.error(error) },
      () =>{
        //codes should be executed after the completion of the API call
        const myClonedArray  = Object.assign([], this.bars);
        this.widthArray = myClonedArray;
      }
    );
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.httpGetEndPointService$.unsubscribe();
  }

  onChange(selectedBar:number){
    //get the selected array inde to identify which element should be aniamted in the widthArray
    //bug fix: inentical value in the array
  }

  aniamteProgressBar(buttonValue:number){
    this.widthArray[this.selectedBar] += buttonValue;
    console.log(this.widthArray);
  }

}
