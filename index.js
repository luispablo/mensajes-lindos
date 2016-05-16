
module.exports = function (nombreItems) {

	function paginado (cantidadMostrada, cantidadTotal) {
		if (cantidadMostrada && cantidadTotal) {
			return (cantidadMostrada === cantidadTotal) ? "Mostrando todos los "+ nombreItems :
						"Mostrando "+ cantidadMostrada.toLocaleString() +" "+
							nombreItems +" de "+ cantidadTotal.toLocaleString();
		} else {
			return null;
		}
	}

	return { paginado: paginado };
};
