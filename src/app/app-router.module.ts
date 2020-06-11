import { RouterModule, Routes } from '@angular/router';

import { EntriesComponent } from './entries/entries.component';
import { NgModule } from '@angular/core';


const routes:Routes =[
    {path:'', component:EntriesComponent},
    {path:'entries', component:EntriesComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}