import { Component } from '@angular/core';
import { ElapsedtimerService } from "srr-elapsedtimer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jstTesting2';
  timeNow: string;
  currentHour: any;
  currentMinute: any;
  currentSeconds: any;

  constructor(
    private timer: ElapsedtimerService
  ){}

  getTime(){
    this.timeNow = this.timer.getCurrentTime()
  }

  getHour(){
    this.currentHour = this.timer.getCurrentHour()
  }

  getMinute(){
    this.currentMinute = this.timer.getCurrentMinute()
  }

  getSeconds(){
    this.currentSeconds = this.timer.getCurrentSecond()
  }

  buttonClick(){
    this.timeNow = this.timer.getCurrentTime();
    console.log("Time now - ",this.timeNow," ",this.timer.getCurrentHour()," ",this.timer.getCurrentMinute()," ",this.timer.getCurrentSecond())
    // this.timer.resetTimer();
  }

  startNow(){
    this.timer.startTimer();
  }

  pauseTimer(){
    this.timer.pauseTimer();
  }

  resumeTimer(){
    this.timer.resumeTimer();
  }

  delayStart(){
    this.timer.delayStart(2);
  }

  setTimerExceedColourChange(){
    this.timer.setTimerExceedColourChange("red",0,0,2);
  }

  resetTimer(){
    this.timer.resetTimer();
  }

  setSettings(){
    this.timer.setTimerSettings('consolas','blue','70');
  }
}
