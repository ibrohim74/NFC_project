import React, {Component} from 'react';
import {makeAutoObservable} from "mobx";

export default class UserConstructor{
    constructor(){
        this._isAuth =true;
        this._user = {};
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}
