import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ngNewTec';
  originalImageUrl:any;
  resizeImageUrl:any;

  onSelectFile(event) {
    if (event.target.files && event.target.files.length !== 0) {
      for (const file of event.target.files) {
        const MAX_WIDTH = 200;
        const max_hight = 300;

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = (_event) => {
          this.originalImageUrl = reader.result;
          console.log('originalImageUrl : ',this.originalImageUrl);

          

          // const srcEncoded = this.context.canvas.toDataURL(event.target, "image/jpeg");
        };


        
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
