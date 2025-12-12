document.addEventListener('DOMContentLoaded', function() {
    const mensagemStatus = document.getElementById('mensagem-status');

    // Não exibe mais nenhuma mensagem automaticamente
    if (mensagemStatus) {
        mensagemStatus.textContent = "";
    }

    // Mantemos a função caso você queira usar depois
    async function enviarDados() {
        try {
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: "Teste Nome",
                    email: "teste@example.com",
                    telefone: "11999999999",
                    necessidade: "Mensagem de teste sem formulário"
                })
            });

            const result = await response.json();

            if (mensagemStatus) {
                if (result.success) {
                    mensagemStatus.textContent = "Envio de teste realizado com sucesso!";
                    mensagemStatus.style.color = "green";
                } else {
                    mensagemStatus.textContent = "Erro no envio.";
                    mensagemStatus.style.color = "red";
                }
            }
        } catch (err) {
            // Nenhuma mensagem será exibida
            if (mensagemStatus) {
                mensagemStatus.textContent = "";
            }
        }
    }

    // ❌ REMOVIDO: não executa mais automaticamente
    // enviarDados();
});

