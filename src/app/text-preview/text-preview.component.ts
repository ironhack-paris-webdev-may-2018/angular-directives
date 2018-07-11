import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-preview',
  templateUrl: './text-preview.component.html',
  styleUrls: ['./text-preview.component.css']
})
export class TextPreviewComponent implements OnInit {
  userMessage: string;
  classState: any = {
    bigText: false,
    comicFont: false,
    rainbowColored: false
  };

  constructor() { }

  ngOnInit() {
  }

  toggleSize() {
    // change the boolean from true to false OR from false to true
    this.classState.bigText = !this.classState.bigText;
  }

  toggleFont() {
    // change the boolean from true to false OR from false to true
    this.classState.comicFont = !this.classState.comicFont;
  }

  toggleColor() {
    // change the boolean from true to false OR from false to true
    this.classState.rainbowColored = !this.classState.rainbowColored;
  }
}
