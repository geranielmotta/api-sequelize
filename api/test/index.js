import chai from 'chai'
import chatHttp from 'chai-http'
import 'chai/register-should'
import app from '../index'

chai.use(chatHttp)
const { expect } = chai

describe('Bem vindo aos testes da API :  ', () => {
  it('Start API ', done => {
    chai
      .request(app)
      .get('/')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body).to.include({
          message: 'API está ativa.',
        })
        done()
      })
  })
})

describe('Endpoints de users ', () => {
  require('./testUser')
})

describe('Endpoints de project ', () => {
  require('./testProject')
})
