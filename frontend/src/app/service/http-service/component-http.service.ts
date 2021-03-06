import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentBaseItem } from '../../model/component-base-item';
import { ConfigService } from '../configuration/config.service';
import { Wiring } from './wiring-http.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentHttpService {
  private apiEndpoint: string;

  constructor(
    private readonly http: HttpClient,
    private readonly config: ConfigService
  ) {
    this.config.getConfig().subscribe(runtimeConfig => {
      this.apiEndpoint = runtimeConfig.apiEndpoint;
    });
  }

  public getComponent(id: string): Observable<ComponentBaseItem> {
    const url = `${this.apiEndpoint}/components/${id}`;
    return this.http.get<ComponentBaseItem>(url);
  }

  public updateComponent(
    component: ComponentBaseItem
  ): Observable<ComponentBaseItem> {
    const url = `${this.apiEndpoint}/components/${component.id}`;
    return this.http.put<ComponentBaseItem>(url, component);
  }

  public deleteComponent(id: string): Observable<ComponentBaseItem> {
    const url = `${this.apiEndpoint}/components/${id}`;
    return this.http.delete<ComponentBaseItem>(url);
  }

  public createComponent(
    component: ComponentBaseItem
  ): Observable<ComponentBaseItem> {
    const url = `${this.apiEndpoint}/components/`;
    return this.http.post<ComponentBaseItem>(url, component);
  }

  public executeComponent(
    id: string,
    wiring: Wiring
  ): Observable<ComponentBaseItem> {
    const url = `${this.apiEndpoint}/components/${id}/execute`;
    const httpParams = new HttpParams().append(
      'run_pure_plot_operators',
      'true'
    );
    return this.http.post<ComponentBaseItem>(url, wiring, {
      params: httpParams
    });
  }

  public bindWiringToComponent(id: string, workflowWiring: Wiring) {
    const url = `${this.apiEndpoint}/components/${id}/wirings`;
    return this.http.post<ComponentBaseItem>(url, workflowWiring);
  }
}
