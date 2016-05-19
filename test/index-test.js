var test = require("tape");
var Mensajes = require("../index");

var ITEM_NAME = "item";
var ITEMS_NAME = "items";
var mensajes = Mensajes(ITEM_NAME, ITEMS_NAME);

test("index - paginado - invalid params", function (assert) {
	assert.ok(mensajes.paginado() === null, "Invalid params returns null");
	assert.end();
});

test("index - paginado - showing all", function (assert) {
	assert.equal(mensajes.paginado(5, 5), "Mostrando todos los "+ ITEMS_NAME, "Showing all message");
	assert.end();
});

test("index - paginado - showing more than one", function (assert) {
	assert.equal(mensajes.paginado(5, 10), "Mostrando 5 "+ ITEMS_NAME +" de 10", "Showing some message");
	assert.end();
});

test("index - paginado - showing only one from many", function (assert) {
	assert.equal(mensajes.paginado(1, 10), "Mostrando un "+ ITEM_NAME +" de 10", "Showing one from many");
	assert.end();
});

test("index - paginado - showing the only one", function (assert) {
	assert.equal(mensajes.paginado(1, 1), "Mostrando el único "+ ITEM_NAME, "Showing de only one");
	assert.end();
});
