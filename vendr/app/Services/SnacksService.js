import { ProxyState } from "../AppState.js"
import { Snack } from "../Models/Snack.js"

class SnacksService {


    buy(snackName){

        let foundSnack = ProxyState.snacks.find((s) =>s.name == snackName);
        if (foundSnack.name !== "snickers"){
            foundSnack.price -= 2.50
        }
        ProxyState.snacks = ProxyState.snacks;

    }

}



export const snacksService = new SnacksService();