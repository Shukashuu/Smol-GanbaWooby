import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Smol Wooby';
  audio: any;
  elem: any;

  ngOnInit() {
    this.elem = document.getElementById('playBtn');
    this.audio = new Audio();
    this.audio.src = './assets/がんばるびぃ.mp3';
    this.audio.load();
    this.audio.loop = false;
  }

  loop() {
    this.audio.loop = !this.audio.loop;
    console.log(this.audio.loop);
    if (this.audio.loop === false) {
      this.elem.className = 'playBtn';
    }
  }

 playAudio() {
  this.elem.className += ' hovered';
  this.audio.play();

  if (!this.audio.loop) {
    setTimeout(() => {
      this.elem.className = 'playBtn';
      }, 1500);
    }
  }
}
