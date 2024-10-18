import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { MainComponent } from './Components/main/main.component';
import { SelectProjectComponent } from './Components/select-project/select-project.component';
import { ExcavationDataComponent } from './Components/excavation-data/excavation-data.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { RequestReviewComponent } from './Components/request-review/request-review.component';
import { TicketDetailsComponent } from './Components/ticket-details/ticket-details.component';
import { TicketComponent } from './Components/ticket/ticket.component';



export const routes: Routes = [
    {path:'',  redirectTo:'/login', pathMatch: 'full'},
    {path:'login',  component:LoginComponent},
    {path:'main', component:MainComponent},
    {path:'select-project', component:SelectProjectComponent},
    {path:'excavation-data', component:ExcavationDataComponent},
    {path:'payment', component:PaymentComponent},
    {path:'request-review', component:RequestReviewComponent},
    {path:'ticket', component:TicketComponent},
    {path:'ticket/:id', component:TicketDetailsComponent},
    {path:'**',  redirectTo:'/login', pathMatch: 'full'},

];
