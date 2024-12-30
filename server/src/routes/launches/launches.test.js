const request = require('supertest')
const {app} =require('../../app')

describe('Test GET /launches', () => {
  test('should respond with 200 success',async () => {
    const response =await request(app).get('/launches').expect(200).expect('Content-Type',/json/);
    expect(response.statusCode).toBe(200);
  })
})

describe('Test POST /launch', () => {
  test('should respond with 201 created',async () => {
    const response = await request(app)
        .post('/launches')
        .send({
            mission: 'Uss enterprise',
            rocket: 'Ncc 1701-D',
            target: 'Kepler-186 f',
            launchDate:'January 4,2004'
        })
        .expect('Content-Type',/json/)
        .expect(201)
      
      

      expect(response.body).toMatchObject({
        mission: 'Uss enterprise',
        rocket: 'Ncc 1701-D',
        target: 'Kepler-186 f'        
      })
  })
  test('should catch missing required properties',async () => {
    const response =await request(app)
      .post('/launches')
      .send({ mission: 'Uss enterprise',
        rocket: 'Ncc 1701-D',
        target: 'Kepler-186 f'
        })
      .expect('Content-Type',/json/)
      .expect(400);
    expect(response.body).toStrictEqual({
      error: 'Missing required launch property'
    })  
  })
})

