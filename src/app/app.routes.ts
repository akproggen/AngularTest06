import { Routes } from '@angular/router';
import { StuffComponent } from './components/stuff/stuff.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { MainComponent } from './components/main/main.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'stuff',
        component: StuffComponent
    },
    {
        path: 'employee',
        component: EmployeeComponent
    },
    {
        path: 'client',
        component: ClientComponent
    },
    {
        path: 'client-projects',
        component: ClientProjectComponent
    },
    {
        path: 'bla02',
        component: PostListComponent
    }


];
