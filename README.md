# Desafio Desenvolvimento de Produto de Software III

# Amigo Secreto API

Este projeto implementa uma solução backend robusta utilizando Prisma para gerenciamento de banco de dados. A aplicação está hospedada no servidor NEON, garantindo alta disponibilidade e desempenho.

## Tecnologias Utilizadas

- **Next.js**: Um framework React para construção de aplicações web com renderização no lado do servidor e estáticas.
- **TypeScript**: Um superset tipado de JavaScript que compila para JavaScript puro.

## Banco de Dados

O Prisma é utilizado como ORM (Object-Relational Mapping) para facilitar operações de banco de dados como migrações, modelagem de dados e consultas.

## Servidor

A aplicação está hospedada nos servidores NEON, que fornecem infraestrutura escalável para aplicações em tempo real.

## Endpoints da API

As seguintes rotas estão disponíveis:

- `POST /api/wishlist/add`: Adicionar novos itens à lista de desejos.
- `PUT /api/wishlist/edit`: Editar um item existente na lista de desejos.
- `DELETE /api/wishlist/remove`: Remover um item da lista de desejos.
- `GET /api/wishlist`: Mostrar todos os itens da lista de desejos.

## API de Convite

Utilizando o serviço de e-mail confiável do SendGrid, nossa aplicação pode enviar confirmações de participação por e-mail de forma eficiente.

- `POST /api/invite`: Enviar um convite por e-mail para participar do amigo secreto.

## Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Jtomio/challenge_software_product_development_III
   cd challenge_software_product_development_III

2. **Instale as dependências**
npm - `npm install`

3. **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

    ```bash
    DATABASE_URL="sua-string-de-conexao-neon"
    SENDGRID_API_KEY="sua-api-key-sendgrid"
    ```

4. **Execute as migrações do Prisma**:

    ```bash
    npx prisma migrate dev --name init
    ```

5. **Inicie o servidor de desenvolvimento**:

    ```bash
    npm run dev
    ```

## Contribuição

Sinta-se à vontade para abrir `issues` e `pull requests` para melhorias e correções.

## Linceça
  Esse projeto está licenciado sob a linceça MIT. Veja o arvuivo LICENSE para mais detalhes.


