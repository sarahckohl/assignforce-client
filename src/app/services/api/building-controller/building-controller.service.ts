import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Building } from '../../../model/Building';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BuildingControllerService {
  constructor(private http: HttpClient) {}

  private buildingController = environment.apiUrls.buildingController;

  private generateDTO(building: Building): any {
    return {
      id: building.id,
      active: building.active,
      address: building.address,
      name: building.name,
      rooms: building.rooms
    };
  }

  public create(building: Building): Observable<Building> {
    return this.http.post<Building>(
      this.buildingController.baseUrl + this.buildingController.create,
      this.generateDTO(building)
    );
  }

  public update(building: Building): Observable<Building> {
    return this.http.put<Building>(
      this.buildingController.baseUrl + this.buildingController.update + building.id,
      this.generateDTO(building)
    );
  }
  public findAll(): Observable<Building[]> {
    return this.http.get<Building[]>(this.buildingController.baseUrl + this.buildingController.findAll);
  }
  public remove(id: number): Observable<Building> {
    return this.http.delete<Building>(this.buildingController.baseUrl + this.buildingController.remove + id);
  }

  public find(id: number): Observable<Building> {
    return this.http.get<Building>(this.buildingController.baseUrl + this.buildingController.find + id);
  }
}
