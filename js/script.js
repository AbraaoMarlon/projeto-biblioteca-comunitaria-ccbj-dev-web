const books = [
  {
    imgSrc: 'img/livro1.jpeg',
    title: 'Berserk',
    author: 'Kentaro Miura',
    description: 'Um Livro muito interessante.',
    resume:"a historia sobre um homem que nao tem inimigos"
  },
  {
    imgSrc: 'img/LIVRO 2.jpg',
    title: 'Vagabond',
    author: '',
    description: 'Um Livro muito interessante.',
    resume:"a historia sobre um homem que nao tem inimigos"
  },
  {
    imgSrc: 'img/livro3.jpg',
    title: 'Villand saga',
    author: '',
    description: 'Um Livro muito interessante.',
    resume:"a historia sobre um homem que nao tem inimigos"
  },

  {
    imgSrc: 'img/livro4.jpg',
    title: 'Desventuras em serie',
    author: '',
    description: 'Um Livro muito interessante.',
    resume:"a historia sobre um homem que nao tem inimigos"
  },
  {
    imgSrc: 'img/livro5.jpg',
    title: 'Estado de mente',
    author: '',
    description: 'Um Livro muito interessante.',
    resume:"a historia sobre um homem que nao tem inimigos"
  },
  {
    imgSrc: 'img/livro6.jpg',
    title: 'O Livro dos 5 aneis',
    author: 'miyamoto musashi',
    description: 'Um Livro muito interessante.',
    resume:"a historia sobre um homem que nao tem inimigos"
  },
  {
    imgSrc: 'img/livro7.jpg',
    title: 'A Hipotese do Amor',
    author: '',
    description: 'Um Livro muito interessante.',
    resume:"a historia sobre um homem que nao tem inimigos"
  },
  {
    imgSrc: 'img/livro8.jpg',
    title: 'Harry Potter',
    author: '',
    description: 'Um Livro muito interessante.',
    resume:"a historia sobre um homem que nao tem inimigos"
  },
  {
    imgSrc: 'img/livro9.jpeg',
    title: 'A Escola do Bem e do Mal',
    author: '',
    description: 'Um Livro muito interessante.',
    resume:"a historia sobre um homem que nao tem inimigos"
  },
  {
    imgSrc: 'img/livro10.jpeg',
    title: 'Dom Quixote',
    author: '',
    description: 'Um Livro muito interessante.',
    resume:"a historia sobre um homem que nao tem inimigos"
  },
  {
    imgSrc: 'img/livro11.jpg',
    title: 'Laranja Mecanica',
    author: '',
    description: 'Um Livro muito interessante.',
    resume:"a historia sobre um homem que nao tem inimigos"
  },
  {
    imgSrc: 'img/livro12.jpeg',
    title: 'A Cinco passos de você',
    author: '',
    description: 'Um Livro muito interessante.',
    resume:"a historia sobre um homem que nao tem inimigos"
  },
];

// Função para adicionar livros à página
function addBooksToPage(filteredBooks = books) {
  // Seleciona o elemento onde a lista de livros será exibida
  const bookList = document.querySelector('.book-list');

  // Limpa a lista de livros existente para evitar duplicação
  bookList.innerHTML = '';

  // Itera sobre a lista de livros filtrados e adiciona cada um ao DOM
  filteredBooks.forEach(book => {
    // Cria um novo elemento div para o livro
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    // Adiciona o conteúdo HTML para o livro
    bookElement.innerHTML = `
      <div class="flex">
        <img src="${book.imgSrc}" alt="">
        <div>
          <h3>${book.title}</h3>
          <p>Autor: ${book.author}</p>
          <p>Descrição: ${book.description}</p>
          <a href="detailsbook.html?bookId=${book.title}"><button type="button">Ver Livro</button></a>
        </div>
      </div>
    `;

    // Adiciona o elemento do livro à lista de livros
    bookList.appendChild(bookElement);
  });
}

// Função para configurar o formulário de contato
function viewDataForm() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  // Adiciona um ouvinte de evento para o envio do formulário
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os dados do formulário
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Constrói a mensagem a ser exibida na tag <p> com id "formMessage"
    const messageText = `Nome: ${name}<br>Email: ${email}<br>Mensagem: ${message}`;

    // Exibe a mensagem dentro do elemento <p id="formMessage">
    formMessage.innerHTML = messageText;

    // Limpar o formulário após exibir a mensagem (opcional)
    form.reset();
  })
}

// Função para pesquisar livros
function searchBooks() {
  // Seleciona o campo de entrada de pesquisa e obtém o valor
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.toLowerCase();

  // Filtra a lista de livros com base na consulta de pesquisa
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query)
  )

  // Atualiza a lista de livros exibida na página
  addBooksToPage(filteredBooks);
}

// Função para obter o valor dos parâmetros da URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Função para adicionar detalhes do livro na página
function addDetailsBook() {
  // Obtém o título do livro da URL
  const bookId = getQueryParam('bookId');

  // Encontra o livro correspondente ao bookId
  const bookData = books.find(book => book.title === bookId);

  // Exibe os detalhes do livro
  if (bookData) {
    document.getElementById('bookImage').src = bookData.imgSrc;
    document.getElementById('bookTitle').textContent = `Livro: ${bookData.title}`;
    document.getElementById('bookAuthor').textContent = `Autor: ${bookData.author}`;
    document.getElementById('bookDescription').textContent = `Resumo: ${bookData.resume}`;
  
    // Configurando o link do botão "Ler Livro" para ver o pdf
    const readBookButton = document.getElementById('readBookButton');
    readBookButton.href = bookData.pdf;
  } else {
    // Caso o livro não seja encontrado, exibe uma mensagem de erro
    document.getElementById('bookTitle').textContent = "Livro não encontrado";
  }
}

// Adiciona eventos de carregamento do DOM para funções específicas
document.addEventListener('DOMContentLoaded', viewDataForm); // Configura o formulário de contato quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', addDetailsBook); // Adiciona detalhes do livro quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
  // Adiciona livros à página ao carregar
  addBooksToPage();

  // Adiciona um evento para atualizar a lista de livros enquanto o usuário digita no campo de pesquisa
  document.getElementById('searchInput').addEventListener('input', searchBooks);
});
