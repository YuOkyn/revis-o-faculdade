let f = document.getElementById("formulário")
//joga o elemento form indentificado pelo id formuário dentro da variável f
f.addEventListener("submit", function(a){
    //adiciona uma escuta de evento para o submit cada vez que o enter for pressionado ou houver click no botão
    a.preventDefault()
//impede que a página recarregue (padrão de formilários)
    let v1 = Number(document.getElementById("v1").value)
    let v2 = Number(document.getElementById("v2").value)
//joga os valores captados pelos inputs dos htmls num1 e num2 nas variáveis v1 e v2
    let result = document.getElementById("result")
//joga o elemento html com o id result dentro da variável result
    result.innerText = (v1+v2)
    //escreve um conteúdo no objeto result (soma de v1+v2 nesse caso)
})