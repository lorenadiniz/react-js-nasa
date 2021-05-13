import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

import { connect } from "react-redux";

const InfoPanel = (props) => {

	let errorText = (props.errorFetchingNEOs) ? "Error fetching NEO list" : null;
	let hideDisplay = (props.errorFetchingNEOs) ? null : "display-none";

	return (
		<>
			<h6 class="intro p-3">
				A seguir está a lista de Objetos Próximos à Terra (NEOs) - Asteróides que estão próximos da Terra na data de hoje.
			</h6>
			<p>
				<i>** LD significa distância lunar, ou seja, distância entre a Terra e a Lua - aproximadamente 384.400 kms ou 1,3 segundos-luz</i>
				<br />
				<i>** UA significa unidade astronômica, ou seja, distância entre a Terra e o Sol - aproximadamente 150 milhões de kms ou 8 minutos-luz</i>
			</p>

		</>
	);
}

const mapStateToProps = state => {
	return {
		errorFetchingNEOs: state.errorFetchNEOS,
	}
}

const InfoPanelLogic = connect(mapStateToProps, null)(InfoPanel);

export default InfoPanelLogic;