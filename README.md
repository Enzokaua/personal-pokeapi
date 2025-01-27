# My PokeApi (Service)

## Descrição

Este projeto é a minha criação pessoal da PokeApi, gerando meu próprio serviço para consumo de dados relacionados ao universo Pokémon. A API fornece endpoints que permitem buscar informações como habilidades, tipos e movimentos, com suporte a consultas personalizadas e inclusão de novos dados.

## Tecnologias Utilizadas

As tecnologias utilizadas neste projeto incluem:

- *HTML5*
- *JavaScript*

### Endpoints Disponíveis

#### **GET /abilities**

- **Descrição:** Retorna uma lista de habilidades ou informações relacionadas a Pokémons.  
- **Parâmetros de Consulta:**
  - **type** (string, obrigatório): Tipo de atributo para busca.  
  - **name** (string, obrigatório): Nome do movimento.  
  - **image** (string, obrigatório): URL da imagem relacionada ao movimento.  
- **Respostas:**
  - **200:** Resultado da busca com sucesso. Retorna um array de objetos do tipo `lib`.  
  - **400:** Parâmetro de entrada inválido.

---

#### **POST /abilities**

- **Descrição:** Adiciona novos tipos, movimentos ou habilidades ao sistema.  
- **Request Body:**
  - **type** (string): Tipo de habilidade (exemplo: "abilities").  
  - **name** (string): Nome da habilidade (exemplo: "overgrow").  
  - **image** (string, formato URL): URL associada (exemplo: "https://pokeapi.co/api/v2/ability/65/").  
- **Respostas:**
  - **201:** Tipo criado com sucesso.  
  - **400:** Entrada inválida ou objeto inválido.  
  - **409:** Item já existente.

---

## Estrutura de Dados (Schemas)

### **lib**

- **Descrição:** Representação de um tipo ou habilidade na API.  
- **Atributos:**
  - **type** (string, obrigatório): Categoria da habilidade (exemplo: "abilities").  
  - **name** (string, obrigatório): Nome da habilidade ou tipo (exemplo: "overgrow").  
  - **image** (string, obrigatório, formato URL): URL da habilidade (exemplo: "https://pokeapi.co/api/v2/ability/65/").
