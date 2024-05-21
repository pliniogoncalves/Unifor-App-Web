# Atividade Final - Desenvolvimento de Plataforma Web

## Descrição da Atividade

Esta atividade prática tem como objetivo avaliar os conhecimentos conceituais e técnicos referentes à disciplina, considerando a construção de uma plataforma web. A aplicação web deve conter as seguintes páginas:

- **Apresentação do Tema (Landing Page)**
- **Tela de Autenticação (Login)**
- **Tela de Cadastro de Usuário**
- **Tela de Gestão Administrativa**

### Funcionalidades

- O front-end deve se comunicar com o back-end através de requisições HTTP utilizando o framework [Axios](https://axios-http.com).
- A aplicação deve permitir a criação, edição e exclusão de usuários, além de exibir os usuários existentes em uma tabela na Tela de Gestão Administrativa.
- Após o cadastro, o usuário deve ser capaz de realizar login e acessar a Tela de Gestão Administrativa.
- A aplicação deve estar em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD).

## Requisitos Técnicos

### Front-end

- Utilize o framework [Bootstrap](https://getbootstrap.com) para a criação das telas.
- A aplicação deve ser responsiva, adaptando-se a telas de diferentes tamanhos (Desktop, Tablets e Smartphones).
- Os links presentes em cada tela devem funcionar corretamente.

### Back-end

- As APIs devem seguir o padrão REST e utilizar tecnologias como Node.JS, Java Spring Boot, .NET, C#, FastAPI e/ou Flask.
- Os métodos HTTP a serem implementados são: GET, POST, PUT e DELETE.
- Para armazenamento de dados, utilize o banco de dados MongoDB, configurado com o MongoDB Atlas.

### Banco de Dados

- Crie o banco de dados utilizando o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
- Utilize o [MongoDB Compass](https://www.mongodb.com/products/compass) para administrar o banco de dados.

## Passo a Passo para Desenvolvimento

1. **Configuração do Ambiente:**
   - Clone este repositório para a sua máquina local.
   - Certifique-se de ter o Node.js e o MongoDB instalados.
   - Configure o MongoDB Atlas conforme necessário.
   - Instale as dependências do projeto:
     ```bash
     npm install
     ```
2. **Execução da Aplicação:**
   - Para iniciar o servidor de desenvolvimento, execute:
     ```bash
     npm start
     ```
   - A aplicação estará disponível em `http://localhost:3000`.
