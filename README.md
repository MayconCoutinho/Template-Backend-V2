<p align="center">
  <img src="https://user-images.githubusercontent.com/60453269/234358029-2cd4dbec-650f-4709-be2a-510e13db75ed.png" alt="Logo" width="200" height="200" />
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
![image](https://user-images.githubusercontent.com/60453269/234357064-103fb406-08b6-4ede-b4af-e33d141f2077.png)

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
git clone https://github.com/MayconCoutinho/Express-Template
```

<br /> 

> Caso já tenha o Node em sua maquina basta instalar o projeto com npm i

```BASH
npm i 
```

<br /> 

> OBS - Muito importante, caso não tenha um banco de dados MySQL disponivel, não vai da para rodar o projeto, pois o projeto conecta diretamente com o banco de dados
> sendo assim crie um arquivo ".env" para por os dados do MySQL.


```BASH

DB_HOST = Dados MySQL
DB_USER = Dados MySQL
DB_PASSWORD = Dados MySQL
DB_SCHEMA = Dados MySQL

```


<br /> 

## `📖 Scripts` 

```JSON
  "scripts": {
    "start": "node ./build/src/index.js",
    "build": "tsc",
    "dev": "ts-node-dev ./src/index.ts",
    "migrations": "tsc && node ./build/src/database/migrations/Migrations.js",
    "test": "jest"
  }

```

<br/>

## `📖 Dependencies` 

```JSON
  "dependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.14",
    "@types/jest": "^29.0.3",
    "@types/jsonwebtoken": "^8.5.9",
    "@types/knex": "^0.16.1",
    "@types/node": "^18.7.23",
    "@types/uuid": "^8.3.4",
    "jest": "^29.1.1",
    "ts-jest": "^29.0.2",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.8.4"
  }

```

<br /> 

## `📖 devDependencies` 


```JSON
  "devDependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.14",
    "@types/jest": "^29.0.3",
    "@types/jsonwebtoken": "^8.5.9",
    "@types/knex": "^0.16.1",
    "@types/node": "^18.7.23",
    "@types/uuid": "^8.3.4",
    "jest": "^29.1.1",
    "ts-jest": "^29.0.2",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.8.4"
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

