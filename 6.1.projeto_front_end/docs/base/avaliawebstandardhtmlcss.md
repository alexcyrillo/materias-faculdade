# Relatório de Avaliação

Este é um relatório de avaliação que descreve os problemas encontrados durante a verificação de um projeto web, incluindo erros e avisos encontrados no HTML e CSS.

## HTML Checker

### Aviso 1
- **Descrição:** Evitar valores de viewport que impeçam os usuários de redimensionar documentos.
- **Localização:** Linha 9, Coluna 5 até Linha 12, Coluna 6.

### Aviso 2
- **Descrição:** O atributo "type" é desnecessário para o recurso do JavaScript.
- **Localização:** Da linha 134, Coluna 5 até a linha 137, Coluna 5.

## CSS Checker

### Erros encontrados no arquivo `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css`

- **Linha 6:**
  - **Descrição:** `.fa-rotate-by | var(--fa-rotate-angle, none)` não é um valor transform.
  
### Erros encontrados no arquivo `https://stage.icurti.com/css/stylesheet.css`

- **Linha 10:**
  - **Descrição:** Erro de valor na propriedade `font-family`. Presença de muitos valores ou valores não reconhecidos: "GT Walsheim",sans-serif.
- **Linha 14, 15, 16:**
  - **Descrição:** A regra `@tailwind` não está implementada.
- **Linha 18:**
  - **Descrição:** A regra `@layer` não está implementada.
- **Linha 1096:**
  - **Descrição:** A propriedade `overflow-clip-margin` não existe. Valor: `unset`.
- **Linha 1102:**
  - **Descrição:** Erro de valor na propriedade `color`. Presença de muitos valores ou valores não reconhecidos: `invert(36%) sepia(90%) saturate(812%) hue-rotate(170deg) brightness(101%) contrast(97%)`.
- **Linhas 1526, 1533, 1540, 1547, 1554:**
  - **Descrição:** Erro de valor na propriedade `font`. "Open Sans" não é um valor válido.

### Erros encontrados no arquivo `https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css`

- **Linha 38:**
  - **Descrição:** Erro de valor na propriedade `cursor`. Valor: `hand`.

### Erros encontrados no arquivo `https://stage.icurti.com/css/jornada_convidado/presentes/gallery.css`

- **Linhas 1, 39 e 55:**
  - **Descrição:** Erros não especificados encontrados.

### Erros encontrados no arquivo `https://stage.icurti.com/css/jornada_convidado/presentes/gifts.css`

- **Linha 8:**
  - **Descrição:** Erro de valor na propriedade `font-family`. Presença de muitos valores ou valores não reconhecidos: "GT Walsheim",sans-serif.
- **Linha 10:**
  - **Descrição:** Erro de parseamento. Caractere `}` não esperado.

### Erros encontrados no arquivo `https://stage.icurti.com/assets/index-7367eb9e.css`

- **Linha 1:**
  - **Descrição:** Erro não especificado encontrado.

## Link Checker

- **Resultado:** Não foram encontrados erros.
- **Documentos Verificados:** 1
- **Tempo de Verificação:** 47.39 segundos

Este é o relatório da avaliação, destacando os problemas encontrados nos arquivos HTML e CSS do projeto. Recomenda-se corrigir esses problemas para garantir a compatibilidade e o bom funcionamento do site.
