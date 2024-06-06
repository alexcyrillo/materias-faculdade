---
id: wcag
title: wcag
---

## Introdução

<p align = "justify">
    São as diretrizes de acessibilidade para o conteúdo da web. Seus 78 critérios garantem que um conteúdo digital possa ser consumido por todas as pessoas nos mais diversos dispositivos. Isso vale para computador, celular e até aparelho de televisão.
</p>

## Relatório

<p align = "justify">
    A equipe levantou os problemas relativos as diretrizes do Wcag..
    QUALWEB: 4 erros.
1: Botão não tem nome acessivel ou esta vazio: <button class="btn btn-social bg-gray-200 hover:bg-gray-300 w-16 h-16 mx-2.5 ml-0 rounded flex items-center justify-center"><img src="img/icons/social-google.svg" class="w-6"></button>
<button class="btn btn-social bg-gray-200 hover:bg-gray-300 w-16 h-16 mx-2.5 rounded flex items-center justify-center"><img src="img/icons/social-fb.png" class="w-6"></button>

2: A imagem não possui um nome acessivel ou esta vazio: <img class="min-w-24 w-24 cursor-pointer" tabindex="0" src="img/logos/logo-icurti-main.svg">
<img src="img/home/banner/campanhas_1.webp" class="banner-left-img max-w-full h-auto relative" style="opacity: 0.858188;">
<img src="img/home/banner/campanhas_2.webp" class="banner-left-img max-w-full h-auto relative" style="opacity: 0.858188;">
<img src="img/home/banner/campanhas_3.webp" class="banner-left-img max-w-full h-auto relative" style="opacity: 0.858188;">

3: Usuario não é capaz de dar zoom 2 vezes.
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no">

4: Baixo contraste nas seguintes areas.
<a href="https://media-production.icurti.com/docs/politica-privacidade.pdf" target="_blank" class="text-green">Pol. de Privacidade</a>
<a href="https://media-production.icurti.com/docs/politica-cookie.pdf" target="_blank" class="text-green">Pol. de Cookies</a>
<button class="border border-solid border-white bg-icurti text-white font-bold py-2 px-4 rounded whitespace-nowrap"> Estou ciente </button>
<span class="ml-2 text-secondary-color text-xs font-bold hidden lg:block">Compartilhar</span>
<a class="font-normal hidden hover:underline hover:underline-offset-4 lg:block text-[#71BD00] text-xs w-18" href="/open/sign-in">Entrar</a>
<button tabindex="0" class="!bg-[#71BD00] button button--list font-medium hidden lg:block px-8 py-2 rounded text-white text-xs"> Crie sua lista grátis </button>
<p class="text-slate-400 text-base font-bold text-center"> ou com seu e-mail. </p>
<a class="underline underline-offset-4" href="/open/sign-in">e-mail</a>
<button class="button button--list text-sm text-white font-bold py-4 px-8 rounded w-full" tabindex="0"> Crie sua lista grátis </button>
<button class="button button--list text-base sm:text-xl text-white font-bold py-2 px-20 sm:px-24 rounded max-w-max mx-auto" tabindex="0"> Crie sua lista grátis </button>
<strong class="text-link font-bold inline-block">Do seu jeito.</strong>
<h2 class="text-3xl sm:text-4xl lg:text-5xl font-gt-walsheim font-bold typo-three--gradient"> Tarifas Aplicáveis </h2>
<p class="text-2xl sm:text-3xl lg:text-[34px] xl:text-[46px] font-gt-walsheim text-secondary-color text-center max-[470px]:max-w-[17ch]"> Entenda as tarifas por categoria de lista </p>
<h3 class="text-xl xl:text-3xl text-green text-center font-gt-walsheim font-bold mt-5 xl:mt-10 h-[56px] lg:h-auto"> Lista de Presentes </h3>
<p class="text-2xl sm:text-3xl lg:text-[34px] xl:text-[46px] font-gt-walsheim text-secondary-color text-center max-[470px]:max-w-[17ch]"> Veja o que estão falando de nós </p>
<p dir="ltr" class="mt-3 text-left"> Minha lista de aniversário deu super certo! A equipe foi ótima : ) </p>
<h3 dir="ltr" class="text-primary-color font-bold"> Gustavo Guedes </h3>
<p dir="ltr" class="text-white"> Lista de presentes </p>
<p dir="ltr" class="mt-3 text-left"> Serviço super confiável! Além de esclarecerem todas as minhas dúvidas, o resgate foi bem rapidinho, dentro do prazo estipulado. Usarei mais vezes! </p>
<h3 dir="ltr" class="text-primary-color font-bold"> Luiza Domingues </h3>
<p dir="ltr" class="text-white text-secondary-color"> Lista de presentes </p>
<button class="button button--list text-base sm:text-xl text-white font-bold py-2 px-20 sm:px-24 rounded max-w-max mx-auto" tabindex="0"> Crie sua lista grátis </button>
<a target="_blank" href="https://media-production.icurti.com/docs/termos-condicoes.pdf" class="text-white text-lg font-bold hover:underline hover:underline-offset-2">Termos e Condições</a>
<a target="_blank" href="https://media-production.icurti.com/docs/politica-privacidade.pdf" class="text-white text-lg font-bold hover:underline hover:underline-offset-2">Aviso de Privacidade</a>
<a target="_blank" href="https://media-production.icurti.com/docs/politica-cookie.pdf" class="text-white text-lg font-bold hover:underline hover:underline-offset-2">Aviso de Cookies</a>
<a target="_blank" href="https://media-production.icurti.com/docs/tarifas-prazos.pdf" class="text-white text-lg font-bold hover:underline hover:underline-offset-2">Tarifas e Prazos</a>
<span class="text-footer-copy">Rua do Russel, 804 - 4° andar. Glória, Rio de Janeiro, RJ Brasil. CEP 22210-010</span>



WAVE
3 Alertas

1:Esta faltando a estrutura de head.
2: Não foi encontrado landmarks para facilitar a navegação.
3: Um elemento nocsript foi encontrado:
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7FNQLFM" height="0" width="0" style="display: none; visibility: hidden" ></iframe >  
</p>

 

## Autor(es)
| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 24/08/20 | 1.0 | Criação do documento | xxx xxxx | 
| 09/09/20 | 2.0 | Adicionada visão produto | xxxx xxxx | 