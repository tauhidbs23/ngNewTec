import { Component } from '@angular/core';
import { ElasticsearchService } from './elasticsearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status:String = 'not okay';

  constructor(private elasticsearchService: ElasticsearchService) { }

  ngOnInit(): void {
    this.showStatus();
  }

  showStatus():void{
    this.elasticsearchService.isAvailable().then(res => this.status = 'Ok')
  }
}
