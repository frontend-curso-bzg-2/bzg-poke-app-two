import { Action } from "@ngrx/store";
import { ILogin } from "../models/interfaces/auth";
import { UserInfo } from "firebase";

export enum AuthActionTypes  {
    Login = '[Auth] Send Login',
    LoginSuccesful = '[Auth] Login Successful',
    LoginError = '[Auth] Login Error'
}

export class Login implements Action {
    readonly type = AuthActionTypes.Login;

    constructor(public payload: ILogin){}
}

export class LoginSuccesful implements Action {
    readonly type = AuthActionTypes.LoginSuccesful;

    constructor(public payload: UserInfo){}
}

export class LoginError implements Action {
    readonly type = AuthActionTypes.LoginError;

    constructor(public payload: any){}
}

export type AuthActions = 
 | Login
 | LoginSuccesful
 | LoginError;