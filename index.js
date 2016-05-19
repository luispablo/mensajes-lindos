
module.exports = function (nombreItem, nombreItems) {

	function paginado (cantidadMostrada, cantidadTotal) {
		if (cantidadMostrada && cantidadTotal) {
			if (cantidadMostrada === 1 && cantidadTotal === 1) {
				return "Mostrando el único "+ nombreItem;
			} else if (cantidadMostrada === 1 && cantidadTotal > cantidadMostrada) {
				return "Mostrando un "+ nombreItem +" de "+ cantidadTotal.toLocaleString();
			} else if (cantidadMostrada === cantidadTotal) {
				return "Mostrando todos los "+ nombreItems;
			} else {
				return "Mostrando "+ cantidadMostrada.toLocaleString() +" "+
							nombreItems +" de "+ cantidadTotal.toLocaleString();
			}
		} else {
			return null;
		}
	}

	return { paginado: paginado };
};
