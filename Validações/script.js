// Função para carregar o arquivo de texto
async function carregarConteudo() {
    try {
      const response = await fetch('sobre-nos.txt'); // Carrega o arquivo sobre-nos.txt
      const texto = await response.text(); // Lê o conteúdo como texto
      const linhas = texto.split('\n'); // Divide o conteúdo por linhas
  
      // Atribui os textos às áreas correspondentes
      document.getElementById('titulo').textContent = linhas[0]; // Primeira linha
      document.getElementById('descricao').textContent(String) ; // Segunda linha
      //document.getElementById('cta').textContent = linhas[2]; // Terceira linha
    } catch (error) {
      console.error('Erro ao carregar o conteúdo:', error);
    }
  }
  
  // Chama a função ao carregar a página
  carregarConteudo();