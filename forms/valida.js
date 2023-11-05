function verificar()
{
    let txtNome = document.getElementById("nome")
    let txtCpf = document.getElementById("cpf")
    let txtEmail = document.getElementById("email")
    let txtFone = document.getElementById("fone")
    let txtCep = document.getElementById("cep")
    if(txtNome.value==""||txtCpf.value==""||txtEmail.value==""||txtFone.value==""||txtCep.value==""){
        alert("Favor preencher todos os campos!!!!")
        return false
    }
    else{
        alert("Dados enviados com sucesso!!!!")
        return true
    }
    
}

function verificarEmail()
{
    let txtEmail = document.getElementById("email").value



    let cont=0;
    for (let i=0; i< txtEmail.length; i++) {
        if(txtEmail.charAt(i)=='@'||txtEmail.charAt(i)=='.')
            cont++
      }
    alert("cont ="+cont)

    if(cont>1){
        alert("E-mail inválido!!!!")
        return false
    }
    else{
        alert("Dados enviados com sucesso!!!!")
        return true
    }
    
}