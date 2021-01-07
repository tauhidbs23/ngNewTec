import { Injectable } from '@angular/core';
import { Client } from "elasticsearch";

@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {
  private _client: Client;

  constructor() {
    if (!this._client) {
      this._connect();
    }
  };

  defer(){
    let resolve,reject,promise;
    promise = new Promise((_resolve,_reject)=>{
      resolve = _resolve;
      reject = _reject;
    });
    return {
      resolve,reject,promise
    };
  };

  private _connect() {
    this._client = new Client({
      host: 'http://localhost:3000',
      log: 'trace',
      defer: this.defer
    });
  };

  isAvailable(): PromiseLike<String> {
    return this._client.ping({
      requestTimeout: Infinity
    });
  };


}
