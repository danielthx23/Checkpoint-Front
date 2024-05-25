function registrar(e) {
    e.preventDefault()

    const form = e.target
    const nome = form.nome.value
    const email = form.email.value
    const cpf = form.cpf.value
    const dataNascimento = form.dataNascimento.value
    const genero = form.genero.value
    const raca = form.raca.value
    const cep = form.cep.value
    const rua = form.rua.value
    const numero = Number(form.numero.value)
    const cidade = form.cidade.value
    const estado = form.estado.value
    const complemento = form.complemento.value
    const senha = form.senha.value
    const confirmacao = form.confirmacao.value

    const endereco = {
        cep: cep,
        rua: rua,
        numero: numero,
        cidade: cidade,
        estado: estado,
        complemento: complemento
    }

    const dadosPessoa = {
        nome: nome,
        email: email,
        cpf: cpf,
        dataNascimento: dataNascimento,
        genero: genero,
        raca: raca,
        endereco: endereco
    }
    
    const resultado = document.getElementById('resultado');
    const formcadastrado = document.getElementById('form-cadastro');
    
    if (senha !== confirmacao) {
        alert("Senha não é a mesma");
    } else {

        formcadastrado.classList.add('hidden');

        resultado.classList.remove('hidden');
    
        const json = document.getElementById('json');
        json.innerHTML = '';
        json.innerHTML = `${JSON.stringify(dadosPessoa, null, 2)}`;

    console.log(formcadastrado.classList);
    console.log(resultado.classList);
    }
}

function Voltar() {
    const resultado = document.getElementById('resultado');
    const formcadastrado = document.getElementById('form-cadastro');

    formcadastrado.classList.remove('hidden');
    resultado.classList.add('hidden');

    formcadastrado.reset()

}