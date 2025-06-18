import { Routes } from '@angular/router';
import { ApirestinfoComponent } from './components/apirestinfo/apirestinfo.component';
import { ApimainComponent } from './components/apimain/apimain.component';
import { ApidashboardComponent } from './components/apidashboard/apidashboard.component';
import { NameapidcardComponent } from './components/nameapidcard/nameapidcard.component';

export const routes: Routes = [
  {
    path: '',
    component: ApimainComponent,
  },
  {
    path: 'dashboard',
    component: ApidashboardComponent,
    children: [
      {
        path: '',
        component: NameapidcardComponent,
      },
      {
            path: 'details',
            component: ApirestinfoComponent,
      },
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
