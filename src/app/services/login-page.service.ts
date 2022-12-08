import { Injectable } from "@angular/core";
import { LoginPageModel } from 'src/app/models/login-page.model';

@Injectable({
    providedIn: 'root'
})

export class LoginPageService{
    private infoConnexion: LoginPageModel[] = [
        {
            login: 'admin',
            password: 'admin',
            isConnected: false
        }
    ]

    getAllInfos (): LoginPageModel[] {
        return this.infoConnexion
    }


    getInfoConnexion (login: string): LoginPageModel {
        const myLogin = this.infoConnexion.find(infoConnexion => infoConnexion.login === login)
        if (myLogin) {
            return myLogin
        } else {
            throw new Error('Books not found !')
        }
    }

    verifConnect (login: string, password: string) {
        const verifLogin = this.infoConnexion.find(infoConnexion => infoConnexion.login === login)
        if (verifLogin) {
            if (verifLogin.password === password) {
                 return verifLogin.isConnected = true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}