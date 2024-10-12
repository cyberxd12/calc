// Função para adicionar números ou operadores ao display
function appendToDisplay(value) {
    // Obtém o elemento de display pelo ID 'display' e adiciona o valor clicado ao final
    
    const validCharacters = '0123456789+-*/';
            if (validCharacters.includes(value)) {
                document.getElementById('display').value += value;
                
            }
    }
  
  
  // Função para calcular o resultado da expressão no display
  

  
  function calculate() {
    try {
      // Usa a função 'eval()' para avaliar a expressão matemática inserida no display
      // 'eval()' tenta calcular a expressão e retorna o resultado
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      // Caso ocorra um erro (ex.: expressão invál3ida), exibe a palavra "Erro" no display
      document.getElementById('display').value = 'Erro';
      setTimeout(() => {
        clearDisplay();
    }, 500); 
      
    }
  }
  
  // Função para limpar todo o display
  function clearDisplay() {
    // Define o valor do display como uma string vazia, limpando-o
    document.getElementById('display').value = '';
  }
  
  // Função para apagar o último caractere no display
  function deleteLast() {
    // Obtém o valor atual do display
    let currentDisplay = document.getElementById('display').value;
    // Define o valor do display como ele mesmo, mas removendo o último caractere
    document.getElementById('display').value = currentDisplay.slice(0, -1);
  }

  
  // Adiciona um evento ao campo de entrada para calcular ao pressionar "Enter"
  document.getElementById('display').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o comportamento padrão
        calculate(); // Chama a função de calcular
    }
  });