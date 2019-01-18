import { Component, OnInit, ViewChild } from '@angular/core';
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
  selectedBarDom: HTMLElement;

  @ViewChild('progressbarSelected') progressbarSelected:any; 


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
      }
    );
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.httpGetEndPointService$.unsubscribe();
  }

  onChange(){
    console.log(this.selectedBar);
    console.log(this.progressbarSelected.value);
    this.progressbarSelected.value = 1;
  }

  aniamteProgressBar(){

  }

}