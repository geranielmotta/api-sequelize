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

## Story Endpoints

| METHOD | DESCRIÇÂO                        | ENDPOINTS           |
| ------ | -------------------------------- | ------------------- |
| POST   | Add nova estória                 | `/api/v1/story`     |
| GET    | Busca todas as estórias          | `/api/v1/story`     |
| PUT    | Atualiza uma estória             | `/api/v1/story/:id` |
| GET    | Busca informações de uma estória | `/api/v1/story/:id` |
| DELETE | Remove estória                   | `/api/v1/story/:id` |

## Scenery Endpoints

| METHOD | DESCRIÇÂO               | ENDPOINTS             |
| ------ | ----------------------- | --------------------- |
| POST   | Add novo cenário        | `/api/v1/scenery`     |
| GET    | Busca todas os cenários | `/api/v1/scenery/:id` |

## Step Endpoints

| METHOD | DESCRIÇÂO                           | ENDPOINTS                  |
| ------ | ----------------------------------- | -------------------------- |
| POST   | Add um passo de um teste            | `/api/v1/step`             |
| GET    | Busca todas os passos de um cenário | `/api/v1/step/scenery/:id` |

## Result Endpoints

| METHOD | DESCRIÇÂO                               | ENDPOINTS                    |
| ------ | --------------------------------------- | ---------------------------- |
| POST   | Add resultados de um teste              | `/api/v1/result`             |
| GET    | Busca todas os resultados               | `/api/v1/result`             |
| GET    | Busca todas os resultados de um cenário | `/api/v1/result/scenery/:id` |

## Configuration Endpoints

| METHOD | DESCRIÇÂO                                                      | ENDPOINTS                           |
| ------ | -------------------------------------------------------------- | ----------------------------------- |
| POST   | Add resultados de um teste                                     | `/api/v1/configuration`             |
| GET    | Busca todas as configurações para rodar um teste de um cenário | `/api/v1/configuration/scenery/:id` |

## Project Endpoints

| METHOD | DESCRIÇÂO                       | ENDPOINTS             |
| ------ | ------------------------------- | --------------------- |
| POST   | Add novo projeto                | `/api/v1/project`     |
| GET    | Busca todos os projetos         | `/api/v1/project`     |
| PUT    | Atualiza um projeto             | `/api/v1/project/:id` |
| GET    | Busca informações de um projeto | `/api/v1/project/:id` |
| DELETE | Remove um projeto               | `/api/v1/project/:id` |

## Upload Endpoints

| METHOD | DESCRIÇÂO                                                           | ENDPOINTS        |
| ------ | ------------------------------------------------------------------- | ---------------- |
| POST   | Add somente imagens (image/jpeg, image/pjpeg, image/png, image/gif) | `/api/v1/upload` |

## Tests

- Executar teste para todos os endpoints
  > execute o comando abaixo
  ```shell
  $ yarn test
  ```
