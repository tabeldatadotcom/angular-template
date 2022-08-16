import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatatablesModelRequestParam, DatatablesModelResponse } from 'src/app/models/utils/datatable.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _http:HttpClient
  ) {
  }

  public datatables(parameters: DatatablesModelRequestParam, value: any){
    let params = new HttpParams();
    
    params = params.append('start', parameters.start);
    params = params.append('length', parameters.limit);
    params = params.append('order[0][column]', parameters.orderCol);
    params = params.append('order[0][dir]', parameters.orderDir);

    return this._http.post<DatatablesModelResponse>(`${environment.uriApi}/api/input-spj/datatables`, null, {observe: "response", params: params});
  }
}
