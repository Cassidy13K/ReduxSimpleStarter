import React from "react"
import { observable, action } from "mobx"

export default class MainStore {
    @observable randomNumber = 0

    @action.bound
    rollAnotherNumber() {
        this.randomNumber = Math.floor(Math.random() * 1000000)
    }
}