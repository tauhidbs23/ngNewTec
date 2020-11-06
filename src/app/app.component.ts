import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'ngNewTec';
  @ViewChild('myCanvas',{static:false}) 
  myCanvas:ElementRef;
  // myCanvas: ElementRef<HTMLCanvasElement>;
  public context: CanvasRenderingContext2D;

  ngAfterViewInit():void{
    this.context = this.myCanvas.nativeElement.getContext('2d');
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files.length !== 0) {
      for (const file of event.target.files) {
        const mimeType = file.type;
        const imageName = file.name;
        const imageSize = (file.size / 1024).toFixed(2);

        const MAX_WIDTH = 400;

        const scaleSize = MAX_WIDTH / event.target.width;
        // this.myCanvas.width = MAX_WIDTH;
        // this.myCanvas.height = event.target.height * scaleSize;


        // this.context.drawImage(event.target, 0, 0, this.myCanvas.width, this.myCanvas.height);

        const srcEncoded = this.context.canvas.toDataURL(event.target, "image/jpeg");


      }

    }
  }

  process() {
    console.log('here click')
    // const file = 

    // const reader = new FileReader();
    // reader.readAsDataURL(file);
  }

  // process() {
  //   const file = document.querySelector("#upload").files[0];

  //   if (!file) return;

  // const reader = new FileReader();

  //   reader.readAsDataURL(file);

  //   reader.onload = function (event) {
  //     const imgElement = document.createElement("img");
  //     imgElement.src = event.target.result;
  //     document.querySelector("#input").src = event.target.result;

  //     imgElement.onload = function (e) {
  //       const canvas = document.createElement("canvas");
  //       const MAX_WIDTH = 400;

  //       const scaleSize = MAX_WIDTH / e.target.width;
  //       canvas.width = MAX_WIDTH;
  //       canvas.height = e.target.height * scaleSize;

  //       const ctx = canvas.getContext("2d");

  //       ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

  //       const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpeg");

  //       // you can send srcEncoded to the server
  //       document.querySelector("#output").src = srcEncoded;
  //     };
  //   };
  // }

}
