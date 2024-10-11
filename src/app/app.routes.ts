import { Routes } from '@angular/router';
import { NotificacaoComponent } from './components/notificacao/notificacao.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'notificacao',
        pathMatch: 'full'
    },
    {
        path: 'notificacao',
        component: NotificacaoComponent
    }
];
