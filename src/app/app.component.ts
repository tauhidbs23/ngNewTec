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
          // half done -----0------


          

          // const srcEncoded = this.context.canvas.toDataURL(event.target, "image/jpeg");
        };
      }
    }
  }
}
