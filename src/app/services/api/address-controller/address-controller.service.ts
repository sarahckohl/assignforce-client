import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Address } from '../../../model/Address';
import { Service } from '../service.interface';

@Injectable()
export class AddressControllerService implements Service {
  constructor(private http: HttpClient) {}

  private addressController = environment.apiUrls.addressController;

  public create(address: Address): Observable<Address> {
    return this.http.post<Address>(this.addressController.baseUrl + this.addressController.create, address);
  }
  public update(address: Address): Observable<Address> {
    return this.http.put<Address>(this.addressController.baseUrl + this.addressController.update + address.id, address);
  }
  public findAll(): Observable<Address[]> {
    console.log(this.addressController.baseUrl + this.addressController.findAll);
    return this.http.get<Address[]>(this.addressController.baseUrl + this.addressController.findAll);
  }
  public remove(id: number): Observable<Address> {
    return this.http.delete<Address>(this.addressController.baseUrl + this.addressController.remove + id);
  }

  public find(id: number): Observable<Address> {
    return this.http.get<Address>(this.addressController.baseUrl + this.addressController.find + id);
  }
}
