/**()fazer teste para nao aceitar valores negativos */
/**()inicialmente fazer com o alert, mas depois com o innerhtml */
/**()por metas para atingir para corridas e taf */

let dist = document.getElementById("dist")
let temp = document.getElementById("tempo")
let result = document.getElementById('result')
// console.log(dist.value)
// console.log('oi')


function calcular(){
    //alert(dist.value)
    let divisao = temp / dist
    result.innerHTML = divisao 
    console.log(divisao)
}
