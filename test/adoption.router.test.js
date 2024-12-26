import request from 'supertest'; 
import { expect } from 'chai';  
import app from '../src/app.js'; 



describe('Adoption Router Tests', () => {
    // DATOS PARA VALIDAR TEST//
const validAdoptionId = '676dd3aff18fc241e3d38e8f';
  const validUserId = '67411dc37a249e8a8f047419';
  const validPetId = '67411dc37a249e8a8f04741c';
  const invalidId = '111111111111111111111111';
  
               // PRUEBAS PARA METODO GET //
  describe('GET /api/adoptions', () => {
    it('Todas las adopciones con status 200', (done) => {
      request(app) 
        .get('/api/adoptions')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200); 
          expect(res.body.payload).to.be.an('array'); 
          done();
        });
    });

    it('La adopción debe contener propiedades Usuario y Mascota', (done) => {
      request(app) 
        .get('/api/adoptions')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200); 
          if (res.body.payload.length > 0) {
            expect(res.body.payload[0]).to.have.property('owner'); 
            expect(res.body.payload[0]).to.have.property('pet');   
          }
          done();
        });
    });
  });

  describe('GET /api/adoptions/:aid', () => {
    it('Devuelve una adopción por llamada de ID', (done) => {
      request(app) 
        .get(`/api/adoptions/${validAdoptionId}`)
        .end((err, res) => {
          if (err) return done(err);
          if (res.status === 404) {
            return done();
          }
          expect(res.status).to.equal(200);
          expect(res.body.payload).to.be.an('object'); 
          done();
        });
    });

    it('Devuelve error 404 para adopción inexistente', (done) => {
      request(app) 
        .get(`/api/adoptions/${invalidId}`)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(404); 
          done();
        });
    });

    it('Error 400 para ID de adopción inválido', (done) => {
      request(app) 
      .get(`/api/adoptions/${invalidId}`)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.be.oneOf([400, 404]); 
          done();
        });
    });
  });


                 // PRUEBAS PARA METODO POST // 
  describe('POST /api/adoptions/:uid/:pid', () => {
    it('Crea una nueva adopción validando IDs de Pet y Usuario', (done) => {
      request(app)
        .post(`/api/adoptions/${validUserId}/${validPetId}`)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.be.oneOf([200,201,400]); 
          if (res.status === 201) {
            expect(res.body.payload).to.be.an('object'); 
            expect(res.body.payload).to.have.property('owner');
            expect(res.body.payload).to.have.property('pet');   
          }
          done();
        });
    });

    it('Devuelve error 404 para usuario inexistente', (done) => {
      request(app)
        .post(`/api/adoptions/${invalidId}/${validPetId}`)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.be.oneOf([404, 400]); 
          done();
        });
    });

    it('Devuelve error 404 para mascota inexistente', (done) => {
      request(app) 
        .post(`/api/adoptions/${validUserId}/${invalidId}`)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.be.oneOf([404, 400]); 
          done();
        });
    });
  });
});
