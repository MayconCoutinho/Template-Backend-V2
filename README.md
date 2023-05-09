<p align="center">
  <img src="https://github.com/MayconCoutinho/Template-Backend-V2/assets/60453269/afb2ac30-593f-4110-8a3e-8aba5e5d5eae" alt="Logo" width="200" height="200" />
</p>

<h1 align="center"> ExpressJS </h1>

<a id="Sumário"></a>


<p align="center">
  <b> Template  ExpressJS </b></br>
  <sub> Criação de pastas base que normalmente uso em todos os projetos em ExpressJS.
  <sub>
</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<p align="center">
  <a href="#Introdução"> 🧩 Introdução </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Resultados"> 🚀 Resultados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Dependências"> 🧪 Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Ideias">💡 Possíveis Melhorias </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Creditos"> 🏆 Créditos </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>
 
<br/>


<a id="Introdução"></a>
## 🧩 Introdução 

  ***⠀⠀⠀⠀O objetivo da criação desse projeto é ter uma arquitetura de software simples, eficiente e padrão para se usar no Back-end. Geralmente os projetos de Back-end sempre têm as mesmas pastas e estrutura, sendo assim criei uma pasta para agilizar o processo inicial de criação, padronizando as pastas e importando as principais tecnologias no Back-end, como TypeScript, Jest e alguma conexão com banco de dados.***

<br/>


<a id="Resultados"></a>
## 🚀 Resultados 
  > Todos os resultados foram alcançados com sucesso. De modo geral são esses os resultados de cada requisição. 

<br/>

| vscode|
|---|
![image](https://github.com/MayconCoutinho/Template-Backend-V2/assets/60453269/92057d13-eb05-4fe9-b839-db917e594839)

<br/>
  
 ### ⚙ Estrura de Projeto

<br/>

- [x] - src : Pasta principal onde fica toda esturutura.
- [x] - business: As regras de negocios de todo cistema aqui fica a estrutura logica do back-end.
- [x] - controller: Controle de tudo que entra e sai do back-end aqui é onde chega os dados e sai os dados.
- [x] - database: Controle dos bancos de dados aqui é onde fica a conecção direta de algum banco de dado.
- [x] - errors: Retorno de uma mensagem com o error, funções pre programada de erros comuns.
- [x] - models: Todos Types de todo o projeto.
- [x] - router: Controle de rota da url.
- [x] - services: Serviçõs esterno que esta sendo importado e usado. 

- [x] - tests: Pasta principal onde fica toda esturutura.
- [x] - mocks: Testes com dados constantes pre programados


<br /> 


<a href="#Sumário"> 📖 Volta ao Sumário </a>

<br /> 

<a id="Dependências"></a>
## 🧪 Dependências
> Requisitos para rotar o codigo...

<br/>

## `📖 Instalação` 
  
  
 <br /> 

> Caso tenha Git basta da git clone, caso não tenha baixe o projeto completo em dowlon

```BASH
git clone https://github.com/MayconCoutinho/Template-Backend-V2

```

<br /> 

> Caso já tenha o Node em sua maquina basta instalar o projeto com npm i

```BASH
npm i 
```

<br /> 

> OBS - Muito importante, caso não tenha um banco de dados disponivel, não vai da para rodar o projeto, pois o projeto conecta diretamente com o banco de dados
> sendo assim crie um arquivo ".env".


```BASH

DATABASE_URL="postgresql://Maycon:randompassword@localhost:5432/mydb?schema=public"
    
```


<br /> 

## `📖 Scripts` 

```JSON
  "scripts": {
   "start": "node ./build/src/index.js",
    "migrations": "npx prisma migrate dev",
    "build": "tsc",
    "dev": "ts-node-dev ./src/server.ts ",
    "test": "vitest",
    "commit": "git-cz"
  }

```
<br/>

## `📖 husky` 
    
    
```JSON
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "prepare-commit-msg": "exec < /dev/tty && npx cz --hook || true"
    }
  }

```

<br/>

## `📖 Dependencies` 

```JSON
  "dependencies": {
    "@prisma/client": "^4.13.0",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "supertest": "^6.3.3",
  }

```

<br /> 

## `📖 devDependencies` 


```JSON
  "devDependencies": {
    "@commitlint/cli": "^17.6.3",
    "@commitlint/config-conventional": "^17.6.3",
    "@types/bcryptjs": "^2.4.2",
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.15",
    "@types/node": "^18.11.18",
    "@types/supertest": "^2.0.12",
    "@typescript-eslint/eslint-plugin": "^5.59.2",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^8.40.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-config-standard-with-typescript": "^34.0.1",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-n": "^15.7.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-promise": "^6.1.1",
    "husky": "^8.0.3",
    "prettier": "^2.8.8",
    "prisma": "^4.13.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.9.5",
     "vitest": "^0.31.0"

  }

```
<br/>

<a href="#Sumário"> 📖 Volta ao Sumário </a>

<br /> 

<a id="Ideias"></a>
## 💡 Possíveis Melhoras
> Possíveis melhorias no código e no projeto, caso queira voltar e melhorá lo.

<br /> 

- [ ] ***- *** 
- [x] ***- *** 

<br/>

<a href="#Sumário"> 📖 Volta ao Sumário </a>

<br /> 

<a id="Creditos"></a>
## 🏆 Créditos
> Todo o projeto foi feito por...
  
<br /> 

<div > 

| [<img src="https://user-images.githubusercontent.com/60453269/217899761-dc2d4e4b-3336-419d-9076-79304290aa0a.png" width=300><br><sub> Maycon Coutinho </sub>](https://www.linkedin.com/in/maycon-coutinho/) | ***Hello 😃 Se você chegou até aqui, acredito que gostou do meu projeto, nesse caso temos algo em comum, sendo assim que tal conversamos um pouco? Meu chama no linkedin 😁*** | 
|---|---|

</div> 
  
<br /> 

