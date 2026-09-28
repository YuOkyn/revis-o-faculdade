let f = document.getElementById("formulário")

f.addEventListener("submit", function(a){
    a.preventDefault()

    let v1 = Number(document.getElementById("v1").value)
    let v2 = Number(document.getElementById("v2").value)

    let result = document.getElementById("result")

    result.innerText = (v1+v2)
})