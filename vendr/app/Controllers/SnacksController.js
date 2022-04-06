import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";

function _drawSnacks(){
    let template=''
    ProxyState.snacks.forEach(s=> template += s.template)
    document.getElementById('snacks').innerHTML=template
}

function _drawMoney(){
    let template=''
    ProxyState.money.forEach(s)
}

export {SnacksController}

