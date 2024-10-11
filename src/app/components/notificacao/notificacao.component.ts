import { NotificacaoDTO } from './../../models/interfaces/notificacao-response';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificacaoService } from './notificacao.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-notificacao',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './notificacao.component.html',
  styleUrl: './notificacao.component.css'
})
export class NotificacaoComponent implements OnInit, OnDestroy {

  notificacaoDTO!: NotificacaoDTO[];
  private readonly destroy$:Subject<void> = new Subject();

  constructor (private notificacaoService: NotificacaoService) {}

  ngOnInit(): void {
    this.getNotificacaoPorId(5);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getNotificacaoPorId(id: number): void {
    this.notificacaoService.getNotificacaoPorId(id).pipe(takeUntil(this.destroy$)).subscribe({
      next: notificacao => {
        notificacao && (this.notificacaoDTO = notificacao);
        console.log(this.notificacaoDTO);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
