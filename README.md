# 🍕 Pizza Menu

Cardápio online de pizzaria. O usuário vê as pizzas, escolhe o tamanho e a quantidade e adiciona ao carrinho.

Projeto feito durante o curso de JavaScript da **B7Web**.

## Linguagens utilizadas

- **HTML** – estrutura da página
- **CSS** – visual e layout (inclusive versão para celular)
- **JavaScript** puro (sem frameworks), organizado em módulos (`import` / `export`)

## O que o projeto faz

- Mostra a lista de pizzas com foto, nome, descrição e preço
- Abre uma janela com os detalhes ao clicar em uma pizza
- Permite escolher o tamanho (Pequena, Média ou Grande)
- Permite aumentar ou diminuir a quantidade
- Adiciona as pizzas ao carrinho
- Calcula subtotal, desconto de 10% e total
- Carrinho funciona também no celular

## Arquivos

| Arquivo        | Para que serve                                    |
| -------------- | ------------------------------------------------- |
| `index.html`   | Página principal                                  |
| `style.css`    | Estilos da página                                 |
| `pizzas.js`    | Lista de pizzas (nome, preço, foto, tamanhos)     |
| `infotela.js`  | Monta as pizzas na tela                           |
| `modal.js`     | Abre e fecha a janela de detalhes da pizza        |
| `script.js`    | Arquivo principal: carrinho e cálculo dos valores |
| `images/`      | Fotos das pizzas                                  |

## Como rodar

Como o JavaScript usa módulos, a página precisa ser aberta por um servidor local (abrir o `index.html` direto com dois cliques não funciona).

Jeito mais fácil:

1. Abra a pasta do projeto no **VS Code**
2. Instale a extensão **Live Server**
3. Clique com o botão direito no `index.html` e escolha **"Open with Live Server"**
