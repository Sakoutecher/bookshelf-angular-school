import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

const routes: Routes =  [
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'book-list',
        component: BookListComponent
    }, 
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'book-list/:id',
        component: BookDetailsComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], 
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}