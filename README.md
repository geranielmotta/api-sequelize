API

#### Doker Config

- Navegando até a pasta

  > execute o comando abaixo

  ```shell
     $ cd devops/pg
  ```

- Faz o build do dokerfile
  > execute o comando abaixo

```shell
    $ docker image build -t api .
```

- Lista as images para verificar se existe o container api

  > execute o comando abaixo

  ```shell
     $ docker image ls
  ```

- Roda o container
  > execute o comando abaixo

```shell
   $ docker run --rm -d -p 5432:5432/tcp api:latest
```

#### Sequelize

- Instalando sequelize
  > execute o comando abaixo
  ```shell
  $ npm install -g sequelize-cli
  ```

#### Setup

- Instalando as dependências do projeto
  > execute o comando abaixo
  ```shell
  $ yarn
  ```
- Iniciar o serviço no ambiente desenvolvimento
  > execute o comando abaixo
  ```shell
  $ yarn dev
  ```
- Iniciar o serviço no ambiente produção

  > execute o comando abaixo

  ```shell
  $ yarn start
  ```

- Para acesso aos endpoints use `http://localhost:8100`

#Rotas da API

## User Endpoints

| METHOD | DESCRIÇÂO                       | ENDPOINTS          |
| ------ | ------------------------------- | ------------------ |
| POST   | Add novo usuário                | `/api/v1/user`     |
| GET    | Busca todos os usuários         | `/api/v1/user`     |
| PUT    | Atualiza um usuário             | `/api/v1/user/:id` |
| GET    | Busca informações de um usuário | `/api/v1/user/:id` |
| DELETE | Remove usuário                  | `/api/v1/user/:id` |

## Project Endpoints

| METHOD | DESCRIÇÂO                       | ENDPOINTS             |
| ------ | ------------------------------- | --------------------- |
| POST   | Add novo projeto                | `/api/v1/project`     |
| GET    | Busca todos os projetos         | `/api/v1/project`     |
| PUT    | Atualiza um projeto             | `/api/v1/project/:id` |
| GET    | Busca informações de um projeto | `/api/v1/project/:id` |
| DELETE | Remove um projeto               | `/api/v1/project/:id` |

## Tests

- Executar teste para todos os endpoints
  > execute o comando abaixo
  ```shell
  $ yarn test
  ```
