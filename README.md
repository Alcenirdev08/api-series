API de Séries de Streaming

Esta é uma API simples desenvolvida em Node.js para gerenciar séries de streaming, utilizando a memória da aplicação para armazenar dados.

## Tecnologias Utilizadas

- *Node.js*: Ambiente de execução JavaScript no lado do servidor.
- *Express*: Framework para Node.js que facilita a criação de APIs.

## Funcionalidades

- *GET /series*: Retorna todas as séries armazenadas em memória.
- *GET /popular*: Retorna uma lista de séries populares.
- *POST /series*: Adiciona uma nova série com os campos id, title, description e status.

## Estrutura do Objeto

O corpo do objeto a ser enviado no método POST deve ser:

```json
{
  "id": número,
  "title": "texto",
  "description": "texto",
  "status": booleano (true/false)
}
