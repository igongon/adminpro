import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register.component";

const loginRoutes: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
];

export const LOGIN_ROUTES = RouterModule.forRoot(loginRoutes, { useHash: true });
