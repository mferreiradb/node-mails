<h1 align="center">Node Mails</h1>

<p align="center">Projeto dedicado ao envio de emails estilizados utilizando Node.js e Nodemailer</p>

![Badge](https://img.shields.io/badge/Version-1.0.0-yellow?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Nodemailer-^6.10.1-blue?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Node.js-16.x-brightgreen?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Status-Finished-brightgreen?style=for-the-badge&logo=ghost)

<p align="center">O projeto tem o objetivo de facilitar o envio de emails HTML estilizados com suporte a templates customizáveis</p>

## Instalação de dependências

- Nodemailer

        npm install nodemailer

- Dotenv

        npm install dotenv

## Configuração do ambiente

1. Crie um arquivo `.env` na raiz do projeto e adicione as credenciais do seu email:

   ```env
   USER_EMAIL=seu-email@example.com
   USER_PASS=sua-senha
   ```

2. Certifique-se de que o arquivo `.env` está listado no `.gitignore` para evitar o upload de credenciais sensíveis.

## Como executar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/mferreiradb/node-mails.git
   cd node-mails
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o projeto:

   ```bash
   npm start
   ```

4. O email será enviado para o destinatário configurado no arquivo `index.js`.

## Estrutura do projeto

```
node-mails/
├── index.js         # Arquivo principal da aplicação
├── index.html       # Template HTML do email
├── package.json     # Metadados e dependências do projeto
├── README.md        # Documentação do projeto
└── .env             # Variáveis de ambiente (não incluído no repositório)
```

## Personalização

- **Template do Email**: Edite o arquivo `index.html` para alterar o conteúdo e o estilo do email.
- **Destinatário e Assunto**: Atualize os campos `to` e `subject` no arquivo `index.js`.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">Feito com ❤️ por Mauricio</p>
