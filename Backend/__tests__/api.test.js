const request = require('supertest')
const app = require('../index')

describe('Tags Endpoints', () => {
  describe('Tags', () => {
    it('[GET] should "findAll" statusCode to be "200"', async () => {
      const res = await request(app)
        .get('/api/tags')
        .send()
      expect(res.statusCode).toEqual(200)
    })
  
    it('[GET] should "findAll" length of body to be "339"', async () => {
      const res = await request(app)
        .get('/api/tags')
        .send()
      expect(res.body.length).toBe(339)
    })
  
    it('[GET] should "findByName" return statusCode to be "400"', async () => {
      const res = await request(app)
        .get('/api/tags/findByName')
        .query({})
      expect(res.statusCode).toEqual(400)
    })
  
    it('[GET] should "findByName" return tag "Indie"', async () => {
      const res = await request(app)
        .get('/api/tags/findByName')
        .query({ tags: "indie"})
      expect(res.body[0]).toHaveProperty("id")
    })
  })

  describe('Home', () => {
    it('[GET] should "getInfos" statusCode to be "200"', async () => {
      const res = await request(app)
        .get('/api/home')
        .send()
      expect(res.statusCode).toEqual(200)
    })
  })

  describe('Games', () => {
    it('[GET] should "findAll" length of body to be "100"', async () => {
      const res = await request(app)
        .get('/api/games')
        .send()
        .query()
      expect(res.body.length).toBe(100)
    })
  })
})