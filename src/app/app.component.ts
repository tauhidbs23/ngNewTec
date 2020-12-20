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
  resizeStrin:string;

  onSelectFile(event) {
    if (event.target.files && event.target.files.length !== 0) {
      for (const file of event.target.files) {
        console.log(file);
        const MAX_WIDTH = 200;
        const max_hight = 300;

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = (_event) => {
          this.originalImageUrl = reader.result;
          console.log('originalImageUrl : ',this.originalImageUrl);
          // half done -----0------
          this.compressImage(this.originalImageUrl,200,200).then(compressed => {
              this.resizeImageUrl = compressed;
              let base64Data = this.resizeImageUrl;
              let base64DataRep = (this.resizeImageUrl).replace(/^data:image\/png;base64,/, "");
              
              const imgBlob = new Blob([base64DataRep], {
                type: file.type
              });
              console.log('imgBlob',imgBlob);
          })
        };
      }
    }
  }
  
  compressImage(src, newX, newY) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const elem = document.createElement('canvas');
        elem.width = newX;
        elem.height = newY;
        const ctx = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, newX, newY);
        const data = ctx.canvas.toDataURL();
        res(data);
      }
      img.onerror = error => rej(error);
    })
  }


}
