# Data Structure Concepts NodeJS with Typescript

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

Criar aplicação backend, utilizando conceitos de clean code e apllicação de alguns conceitos do S.O.L.I.D. Além disto, aplicado pratica em utilização de containerização singleton das classes backend e camada de cache utilizando Redis!


### Metas do Projeto

- [x] Criar CRUD de cadastro de lojas
- [x] Criar modulo de cache de API utilizando Redis
- [x] Criar containers com instâncias singleton
- [x] Utilizar docker compose para levantar banco e de dados Redis
- [x] Upload de imagem

### Ajustes e Melhoria
- [ ] Desacoplcar o modulo de cache para uma bilioteca npm
- [ ] Corrigir o build para buildar o arquivo de cache na pasta helpers/cache-api.ts




## 💻 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

Verifique se você atendeu aos seguintes requisitos:
* Você precisa instalar a versão mais recente de `<Node JS>`
* Sistemas `<Windows / Linux / Mac>`.


## 🚀 Instalando <cache-container-app-nodejs>

Obs.: É necessário antes de instalar este projeto, ter instalado e rodando o docker:
* Docker (https://www.docker.com/get-started)

Para instalá-lo em sua máquina faça os comandos a seguir:
``` bash
  git clone https://github.com/DevFigueiredo/cache-container-app-nodejs
  docker-compose up -d
  cd cache-container-app-nodejs
  npm install
  npm run dev
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redis](https://redis.io/download)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Express](https://expressjs.com/pt-br/)


Desenvolvido por Daniel Miranda de Figueiredo


## 📝 Licença

Esse projeto está sob licença MIT.
