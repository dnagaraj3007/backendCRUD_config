const request = require('supertest');
const esmImport = require('esm')(module)
const server = esmImport('../../server.js')


describe('Test the notes GET path', () =>{
	test('It should respond the GET method',() =>{
		return request(server).get('/api/notes').then(response =>{
			expect(response.statusCode).toBe(200);
		})
	})
})

describe('Test the notes POST path', () =>{
	test('It should respond the POST method',() =>{
		return request(server).post('/api/notes').send({
			title:"1", description:'1'}).then(response =>{
			expect(response.statusCode).toBe(200);
		})
	})
})

