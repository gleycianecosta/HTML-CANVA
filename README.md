## Pré-requisitos

- Um navegador da web moderno que suporte a HTML Canvas API.
- Acesso à internet para incorporar vídeos do YouTube.

## Como Usar

1. Clone o repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/seu-usuario/tech-innovate-website.git
    ```

2. Abra o arquivo `index.html` em seu navegador.

3. Explore as diferentes seções do site para visualizar o efeito de ondas no rodapé e a capacidade de incorporar vídeos do YouTube.

## Personalização

- Para alterar as imagens ou vídeos exibidos, substitua os recursos fictícios na pasta "assets" pelos seus próprios arquivos.
- Personalize as cores, fontes e estilos no arquivo `styles.css` conforme desejado.
- Ajuste a altura das ondas alterando o valor da propriedade `height` nas classes `.wave-divider` do arquivo `styles.css`.

## Incorporando um Vídeo do YouTube

1. Abra o arquivo `index.html` em um editor de texto.

2. Procure pela seção desejada (por exemplo, "Header", "Sobre Nós" ou "Cases de Sucesso").

3. Substitua o ID do vídeo ou o link do YouTube no atributo `src` da tag `<iframe>`. Você pode encontrar o ID do vídeo na URL do YouTube após "v=".

    ```html
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SEU_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
    ```

4. Salve o arquivo e recarregue a página.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar pull requests para melhorar este projeto.

## Licença

Este projeto é distribuído sob a licença [MIT](LICENSE).

---

Sinta-se à vontade para personalizar este README de acordo com as necessidades específicas do seu projeto.
