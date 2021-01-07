import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngNewTec';
  // https://stackoverflow.com/questions/10727025/javascript-pass
  myVariable = 'fyf';


  ngOnInit() {
    this.outerFunction();
    // try {
    //   if (0 > 1) {
    //     console.log('three > one');
    //     try {
    //       if (5 > 6) {
    //         console.log('five > six');
    //       } else {
    //         throw new Error('i am chaild error, throw to next catch')
    //       }
    //     } catch (error) {
    //       throw error
    //       // console.log(error);
    //     }
    //   } else {
    //     throw new Error('i am parent error')
    //   }
    // } catch (error) {
    //   console.log('i am parrent ')
    //   console.error(error)
    // }
  }

  innerFunction(callback){
    return callback(true);
  }

  outerFunction(){
    try {
      this.innerFunction(callback=>{
        if(callback){
          throw new Error('sss');


        }
      });
    } catch (error) {
      console.log(error);
      
    }

  }

}
