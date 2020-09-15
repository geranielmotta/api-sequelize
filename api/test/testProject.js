import chai from 'chai'
import chatHttp from 'chai-http'
import 'chai/register-should'
import app from '../index'

chai.use(chatHttp)
const { expect } = chai

describe('Início dos testes : ', () => {
  it('Dado que estou a inserir um novo projeto, preencho corretamente as informações, então devo receber uma mensagem de sucesso.', done => {
    const project = {
      name: 'Teste com jest',
      description: 'Descrição do projeto tal',
      start: '2020-08-12T00:00:00.000Z',
    }
    chai
      .request(app)
      .post('/api/v1/project')
      .set('Content-Type', 'application/json')
      .send(project)
      .end((err, res) => {
        expect(res.status).to.equal(201)
        expect(res.body.data).to.include({
          id: 2,
          name: project.name,
          description: project.description,
          start: project.start,
        })
        done()
      })
  })

  it('Dado que estou a cadastrar um novo projeto com campos vazios, então devo receber uma mensagem de erro', done => {
    const project = {}
    chai
      .request(app)
      .post('/api/v1/project')
      .set('Content-Type', 'application/json')
      .send(project)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        done()
      })
  })

  it('Dado que estou a cadastrar um novo projeto, mas não preencho todos os parametros, então devo receber uma mensagem de erro', done => {
    const project = {
      name: 'Teste com jest',
      description: 'Descrição do projeto tal',
    }
    chai
      .request(app)
      .post('/api/v1/project')
      .set('Content-Type', 'application/json')
      .send(project)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        done()
      })
  })

  it('Dado que estou a buscar produtos, então devo receber uma lista de todos os projetos cadastrados', done => {
    chai
      .request(app)
      .get('/api/v1/project')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        res.body.data[0].should.have.property('id')
        res.body.data[0].should.have.property('name')
        res.body.data[0].should.have.property('description')
        res.body.data[0].should.have.property('start')
        done()
      })
  })

  it('Dado que estou buscando informações de um determinado projeto, então devo receber corretamente as informações', done => {
    const id = 1
    chai
      .request(app)
      .get(`/api/v1/project/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        res.body.data.should.have.property('id')
        res.body.data.should.have.property('name')
        res.body.data.should.have.property('description')
        res.body.data.should.have.property('start')
        done()
      })
  })

  it('Dado que estou a editar as informações do projeto, informo um id válido, mas não existente no banco. Então devo receber uma mensagem de erro', done => {
    const id = 213213
    chai
      .request(app)
      .get(`/api/v1/project/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have
          .property('message')
          .eql(`Não é possível encontrar o projeto com o id ${id}`)
        done()
      })
  })

  it('Dado que estou atualizando um projeto, informo um id inválido, então devo receber uma mensagem de erro', done => {
    const id = 'aaa'
    chai
      .request(app)
      .get(`/api/v1/project/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have
          .property('message')
          .eql('Por favor insira um valor numérico válido')
        done()
      })
  })

  it('Dado que estou atualizando informações de um projeto, informo os campos válidos então devo receber uma mensagem de sucesso', done => {
    const id = 1
    const project = {
      name: 'Teste de projeto editado',
      description: 'Descrição do projeto tal',
      start: '2020-08-12T00:00:00.000Z',
    }
    chai
      .request(app)
      .put(`/api/v1/project/${id}`)
      .set('Content-Type', 'application/json')
      .send(project)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.status).equal('success')
        expect(res.body.message).equal('Projeto atualizado')
        done()
      })
  })

  it('Dado que estou a atualizar um projeto, informo um id inválido, então recebo uma mensagem de erro', done => {
    const id = '9999'
    chai
      .request(app)
      .put(`/api/v1/project/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have
          .property('message')
          .eql(`Não é possível encontrar o projeto com o id: ${id}`)
        done()
      })
  })

  it('Dado que estou deletando projetos, informo um id do tipo inválido, então devo receber uma mensagem', done => {
    const id = 'bbb'
    chai
      .request(app)
      .delete(`/api/v1/project/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have
          .property('message')
          .eql('Por favor, forneça um valor numérico')
        done()
      })
  })

  it('Dado que estou a deletando projetos, e não informo um id, então devo receber uma mensagem', done => {
    const id = ''
    chai
      .request(app)
      .delete(`/api/v1/project/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404)

        done()
      })
  })

  it('Dado que estou a remover projetos, informo um id válido, mas que não existe. Então devo receber uma mensagem', done => {
    const id = 777
    chai
      .request(app)
      .delete(`/api/v1/project/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have
          .property('message')
          .eql(`projeto com o id  ${id} não pode ser encontrado`)
        done()
      })
  })

  it('Dado que estou a remover projetos, informo um id válido, então o usuário e removido', done => {
    const id = 1
    chai
      .request(app)
      .delete(`/api/v1/project/${id}`)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.data).to.include({})
        done()
      })
  })
})
