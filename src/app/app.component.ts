import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Smol Wooby';
  audio: any;

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = './assets/がんばるびぃ.mp3';
    this.audio.load();
    this.audio.loop = false;
  }

  loop() {
    this.audio.loop = !this.audio.loop;
  }

  playAudio() {
    this.audio.play();
  }
}
