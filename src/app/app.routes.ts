import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IngressosComponent } from './ingressos/ingressos.component';


const routes: Routes = [
    { path: '', component: AppComponent},
    { path: 'Ingressos', component: IngressosComponent }
];

export default routes;
