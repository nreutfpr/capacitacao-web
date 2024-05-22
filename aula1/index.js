document.addEventListener('DOMContentLoaded', function() {
    // Esta função é executada quando o documento HTML é completamente carregado.
  
    const form = document.querySelector('form');
    // Seleciona o formulário na página usando o método querySelector.
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Previne o comportamento padrão do formulário, que é enviar os dados e recarregar a página.
  
      const nomeCompleto = document.getElementById('nomeCompleto').value;
      const sexo = form.querySelector('[name="sexo"]').value;
      const responsavel = document.getElementById('nomeCompletoResponsavel').value;
      const telefone = form.querySelector('[type="tel"]').value;
      const email = form.querySelector('[type="email"]').value;
      // Captura os valores dos inputs do formulário.
  
      if (!document.getElementById('concordo').checked) {
        alert('Você precisa concordar com os termos e condições.');
        return;
        // Verifica se o checkbox dos termos e condições está marcado. Se não estiver, exibe um alerta e interrompe a função.
      }
  
      console.log({
        nomeCompleto,
        sexo,
        responsavel,
        telefone,
        email
      });
      // Imprime no console os valores obtidos do formulário.
  
      alert('Formulário enviado com sucesso!');
      // Exibe um alerta indicando que o formulário foi enviado.
    });
  });
  