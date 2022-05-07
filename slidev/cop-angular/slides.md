---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: images/handshake.jpg
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## COP 
  
  Kudostories.co
# persist drawings in exports and build
drawings:
  persist: false
---

# COP Angular

Kudostories.co

---

# O que é o kudostories.co ?

Uma **nova experiência em kudocard**, com audio ou vídeo para dar mais vida aos nossos elogios e reconhecimentos. Ele poderá ter as seguintes features: 

- 🏡Home page
  - Autenticação
  - Cadastro
  - Sobre produto
  - Links
- 📔 Página de construção do kudo card ( editor )
  - Título do card
  - Seleção de vídeo ou áudio
  - Caso seja audio, possibilitar uma imagem de fundo ( avatar por exemplo ou outros efeitos e cores )
  - Gravação do audio ou vídeo na hora pelos recursos html5 do browser 
- 🎥 Página de visualização do kudostories

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Estrutura do monorepositório sugerida
 
- monorepo [nx](https://nx.dev) com 3 aplicações angular
  - home (kudostories.co)
  - creator (creator.kudostories.co)
  - viewer (viewer.kudostories.co)
- bibliotecas
  - home
    - feature-sobre
  - creator
    - feature-audio
    - feature-video
  - viewer
    - feature-player
  - shared
    - data-access


<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# E o backend ? 

- Se formos usar, uma opção é o [nest js](https://nestjs.com/)
- [arquitetura inspirada no Angular](https://github.com/nestjs/nest#philosophy)

```ts {all|1|3|5}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  render() {
    const message = this.appService.getHello();
    return { message };
  }
}
```
E o melhor? ja está disponível no monorepo 🚀 !

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
teste
-->

---

# Vamos começar? 🎉

Link do repo no github: blabla

Setup do nx: https://nx.dev/getting-started/nx-setup 

Extensão do NX Console e Angular Essentials no vscode.

1. baixar e entrar no diretório monorepo
2. criar uma branch com seu nome para trabalho
3. executar o comando `npx create-nx-workspace@latest` para criar o workspace
  - nome da empresa `kudostories`
  - criar como `angular-nest` (angular + nestjs)
  - nome da aplicação `home`
  - stylesheet `LESS`
  - use nx.cloud? `yes`
4. após concluir, executar o `nx serve home`

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Criando as outras aplicações 

- O home já foi criado
- Criar a aplicação creator
- Criar a aplicação viewer

Subir elas pelo `nx console`.

---

# Instalar os frameworks de UI

- [Angular material](https://material.angular.io/guide/getting-started)
- [Tailwind](https://blog.nrwl.io/set-up-tailwind-css-with-angular-in-an-nx-workspace-6f039a0f4479)

`npx nx generate @nrwl/angular:setup-tailwind home`

- Paginas de teste em https://tailwindui.com/ 

---

# Customizar a home

- Mudar os menus
- Trocar o ícone
  - [Icone sugerido](https://icons8.com.br/icons/set/congratulations) e jogar em assets
- Outras idéias? 

# Começar a customização da creator

- Layout ?
