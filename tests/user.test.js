const request = require('supertest');
const app = require('../src/server'); // Certifique-se de que o caminho está correto

describe('Testando rotas do servidor', () => {
  test('Deve responder com status 200 na rota raiz', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});