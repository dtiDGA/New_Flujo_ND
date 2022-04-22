import { Injectable } from '@angular/core';
import { RequesterInterface } from '../interface/requester.interface';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private _requesterInfo!: RequesterInterface;

  constructor() { }

  
  public get requesterInfo() : RequesterInterface {
    return { ...this._requesterInfo };
  }


  saveRequester( requester: RequesterInterface){

    this._requesterInfo = requester;
  }


}
