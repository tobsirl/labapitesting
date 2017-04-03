var supertest = require("supertest");
var should = require("should");
//var contact = require('./api/contacts/index');

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:8000");

// UNIT test begin

describe("Contacts GET unit test",function(){
  // #1 should return contacts representation in json
  it("Should return collection of JSON documents",function(done){

    // calling home page api
    server
    .get("/api/contacts/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

});

// #2 add a contact
it("Should add a new contact",function(done){

  // post to /api/contacts
  server.post('/api/contacts')
  .send({name:"Contact 99",address:"123 Strand St",age: 27,email: "Sambloggs@hotmail.com"})
  .expect("Content-type",/json/)
  .expect(201)
  .end(function(err,res){
    res.status.should.equal(201);
    done();
  });
});
