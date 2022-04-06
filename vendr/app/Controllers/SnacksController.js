import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";

function _drawSnacks(){
    let template=''
    ProxyState.snacks.forEach(s=> template += s.template)
    document.getElementById('snacks').innerHTML=template
}