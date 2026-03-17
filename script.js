// MENU RESPONSIVO
const menuBtn = document.getElementById("menuBtn");
const menuLista = document.getElementById("menuLista");

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        menuLista.classList.toggle("show"); // mostra/oculta o menu
        
        // ajusta fundo do menu de acordo com o tema
        if (document.body.classList.contains("dark") && menuLista.classList.contains("show")) {
            menuLista.style.background = "#1e293b"; // fundo escuro
        } else if (menuLista.classList.contains("show")) {
            menuLista.style.background = "#ffffff"; // fundo claro
        } else {
            menuLista.style.background = "transparent"; // opcional quando fecha
        }
    });
}
// DARK MODE
const temaBtn = document.getElementById("temaBtn") // pega botão de tema
let temaSalvo = localStorage.getItem("tema")       // verifica tema salvo no navegador

if (temaSalvo === "dark") {
    document.body.classList.add("dark") // aplica tema escuro se estava salvo
}

if (temaBtn) {
    temaBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark") // troca tema

        // salva escolha no navegador
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("tema", "dark")
        } else {
            localStorage.setItem("tema", "light")
        }
    })
}

// VALIDAÇÃO DO FORMULÁRIO
const form = document.getElementById("formContato") // pega o formulário

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault() // evita envio padrão para validar primeiro

        let nome = document.getElementById("nome").value
        let email = document.getElementById("email").value
        let mensagem = document.getElementById("mensagem").value

        // verifica se todos os campos estão preenchidos
        if (nome === "" || email === "" || mensagem === "") {
            alert("Preencha todos os campos!")
            return
        }

        // verifica se email parece válido
        if (!email.includes("@") || !email.includes(".")) {
            alert("Digite um email válido!")
            return
        }

        alert("Mensagem enviada com sucesso!") // feedback ao usuário
        form.reset() // limpa o formulário
    })
}
