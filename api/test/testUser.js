import chai from 'chai'
import chatHttp from 'chai-http'
import 'chai/register-should'
import app from '../index'

chai.use(chatHttp)
const { expect } = chai

describe('Início dos testes : ', () => {
  it('Dado que estou a inserir um novo usuário, preencho corretamente as informações, então devo receber uma mensagem de sucesso.', done => {
    const user = {
      name: 'Geraniel de Oliveira Motta',
      username: 'geraniel.motta',
      password: 'teste',
    }
    chai
      .request(app)
      .post('/api/v1/user')
      .set('Content-Type', 'application/json')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(201)
        expect(res.body.data).to.include({
          id: 2,
          name: user.name,
          username: user.username,
          password: user.password,
        })
        done()
      })
  })

  it('Dado que estou a cadastrar um novo usuário com campos vazios, então devo receber uma mensagem de erro', done => {
    const user = {}
    chai
      .request(app)
      .post('/api/v1/user')
      .set('Content-Type', 'application/json')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        done()
      })
  })

  it('Dado que estou a cadastrar um novo usuário, mas não preencho todos os parametros, então devo receber uma mensagem de erro', done => {
    const user = {
      name: 'asasa',
      username: 'sdasds.sadds',
    }
    chai
      .request(app)
      .post('/api/v1/user')
      .set('Content-Type', 'application/json')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        done()
      })
  })

  it('Dado que estou a buscar todos os usuários, então devo receber uma lista de todos os usuários cadastrados', done => {
    chai
      .request(app)
      .get('/api/v1/user')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        res.body.data[0].should.have.property('id')
        res.body.data[0].should.have.property('name')
        res.body.data[0].should.have.property('username')
        res.body.data[0].should.have.property('password')
        done()
      })
  })

  it('Dado que estou buscando informações de um determinado usuário, então devo receber corretamente as informações', done => {
    const id = 1
    chai
      .request(app)
      .get(`/api/v1/user/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        res.body.data.should.have.property('id')
        res.body.data.should.have.property('name')
        res.body.data.should.have.property('username')
        done()
      })
  })

  it('Dado que estou buscando pelo nome de um usuário, então devo receber corretamente as informações', done => {
    const username = 'geraniel.motta'
    chai
      .request(app)
      .get(`/api/v1/user/username/${username}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        res.body.data.should.have.property('id')
        done()
      })
  })

  it('Dado que estou buscando pelo nome de um usuário, mas a api falha', done => {
    const username = ''
    chai
      .request(app)
      .get(`/api/v1/user/username/${username}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400)
        done()
      })
  })

  it('Dado que estou a editar as informações do usuário, informo um id válido, mas não existente no banco. Então devo receber uma mensagem de erro', done => {
    const id = 213213
    chai
      .request(app)
      .get(`/api/v1/user/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have
          .property('message')
          .eql(`Não é possível encontrar o usuário com o id ${id}`)
        done()
      })
  })

  it('Dado que estou atualizando usuários, informo um id inválido, então devo receber uma mensagem de erro', done => {
    const id = 'aaa'
    chai
      .request(app)
      .get(`/api/v1/user/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have
          .property('message')
          .eql('Por favor insira um valor numérico válido')
        done()
      })
  })

  it('Dado que estou atualizando informações de um usuário, informo os campos válidos então devo receber uma mensagem de sucesso', done => {
    const id = 1
    const user = {
      name: 'new user',
      username: 'new.user',
    }
    chai
      .request(app)
      .put(`/api/v1/user/${id}`)
      .set('Content-Type', 'application/json')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.status).equal('success')
        expect(res.body.message).equal('User atualizado')
        done()
      })
  })

  it('Dado que estou a atualizar usuários, informo um id inválido, então recebo uma mensagem de erro', done => {
    const id = '9999'
    chai
      .request(app)
      .put(`/api/v1/user/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have
          .property('message')
          .eql(`Não é possível encontrar o usuário com o id: ${id}`)
        done()
      })
  })

  it('Dado que estou a remover usuários, informo um id do tipo inválido, então devo receber uma mensagem', done => {
    const id = 'bbb'
    chai
      .request(app)
      .delete(`/api/v1/user/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have
          .property('message')
          .eql('Por favor, forneça um valor numérico')
        done()
      })
  })

  it('Dado que estou a remover usuários, e não informo um id, então devo receber uma mensagem', done => {
    const id = ''
    chai
      .request(app)
      .delete(`/api/v1/user/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404)

        done()
      })
  })

  it('Dado que estou a remover usuários, informo um id válido, mas que não existe. Então devo receber uma mensagem', done => {
    const id = 777
    chai
      .request(app)
      .delete(`/api/v1/user/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have
          .property('message')
          .eql(`Usuário com o id  ${id} não pode ser encontrado`)
        done()
      })
  })

  it('Dado que estou a remover usuários, informo um id válido, então o usuário e removido', done => {
    const id = 1
    chai
      .request(app)
      .delete(`/api/v1/user/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.data).to.include({})
        done()
      })
  })
})
