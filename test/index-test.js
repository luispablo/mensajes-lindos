var test = require("tape");
var Mensajes = require("../index");

var ITEMS_NAME = "items";
var mensajes = Mensajes(ITEMS_NAME);

test("index - paginado - invalid params", function (assert) {
	assert.ok(mensajes.paginado() === null, "Invalid params returns null");
	assert.end();
});

test("index - paginado - showing all", function (assert) {
	assert.equal(mensajes.paginado(5, 5), "Mostrando todos los "+ ITEMS_NAME, "Showing all message");
	assert.end();
});

test("index - paginado - showing some", function (assert) {
	assert.equal(mensajes.paginado(5, 10), "Mostrando 5 "+ ITEMS_NAME +" de 10", "Showing some message");
	assert.end();
});
