require('dotenv').config()

module.exports = {
  development: {
    database: 'jestexemplesdb',
    username: 'jestexemples_app',
    password: 'teste',
    host: '172.17.0.4',
    dialect: 'postgres',
    logging: false,
  },

  test: {
    database: 'jestexemplesdb',
    username: 'jestexemples_app',
    password: 'teste',
    host: '172.17.0.4',
    dialect: 'postgres',
    logging: false,
  },
}
