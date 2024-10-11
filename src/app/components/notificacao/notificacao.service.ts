import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private httpClient: HttpClient) { }

  getNotificacaoPorId(notificaoId: number): Observable<any> {
    return this.httpClient.get(`http://academico3.rj.senac.br/notificacao/${notificaoId}`, {});
  }
}
