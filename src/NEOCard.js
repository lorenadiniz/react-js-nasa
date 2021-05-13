import React from "react";

import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class NEOCard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showNEODetailModal: false
		};
	}

	toggleNEODetailModal = () => {
		this.setState({ showNEODetailModal: !this.state.showNEODetailModal });
	}

	render() {

		let neo_props = this.props.neo;
		let neo_object = {
			name: this.props.neo.name,
			id: this.props.neo.id,
			close_approach_date: neo_props.close_approach_data["0"].close_approach_date,
			close_approach_date_full: neo_props.close_approach_data["0"].close_approach_date_full,
			relative_velocity_kmph: parseFloat(neo_props.close_approach_data["0"].relative_velocity.kilometers_per_hour).toFixed(2),
			relative_velocity_kmps: parseFloat(neo_props.close_approach_data["0"].relative_velocity.kilometers_per_second).toFixed(2),
			miss_distance_kms: parseFloat(neo_props.close_approach_data["0"].miss_distance.kilometers).toFixed(2),
			miss_distance_au: parseFloat(neo_props.close_approach_data["0"].miss_distance.astronomical).toFixed(3),
			miss_distance_lunar: parseFloat(neo_props.close_approach_data["0"].miss_distance.lunar).toFixed(0),
			diameter_max_kms: parseFloat(neo_props.estimated_diameter.kilometers.estimated_diameter_max).toFixed(2),
			diameter_min_kms: parseFloat(neo_props.estimated_diameter.kilometers.estimated_diameter_min).toFixed(2),
			potential_hazardous: neo_props.is_potentially_hazardous_asteroid,
			first_observation_date: neo_props.orbital_data.first_observation_date,
			orbital_period: parseFloat(neo_props.orbital_data.orbital_period).toFixed(0),
			orbit_class_type: (neo_props.orbital_data.orbit_class) ? (neo_props.orbital_data.orbit_class.orbit_class_type) : null,
			orbit_class_description: (neo_props.orbital_data.orbit_class) ? (neo_props.orbital_data.orbit_class.orbit_class_description) : null,
			nasa_jpl_url: neo_props.nasa_jpl_url,
		};


		return (
			<>
				<div class="col-lg-6 inline-block">
					<div class="card mt-2 mb-2 border bg-fff0fa">
						<div class="card-body">
							<h5 class="title">
								Asteróide {neo_object.name}
							</h5>
							<p class="card-text">
								ID de referência: <span class="text-6d0000">{neo_object.id}</span>
							</p>
							<p class="card-text">
								Velocidade relativa: <span class="text-6d0000">{neo_object.relative_velocity_kmph} kmph</span>
							</p>
							<p class="card-text">
								Diatância da terra: <span class="text-6d0000">{neo_object.miss_distance_kms} kms OU {neo_object.miss_distance_lunar} LD **</span>
							</p>
							<p class="card-text">
								Diâmetro estimado: <span class="text-6d0000">{neo_object.diameter_min_kms} - {neo_object.diameter_max_kms} kms</span>
							</p>
							<p class="card-text">
								É potencialmente perigoso: <span class="text-6d0000">{(neo_object.potential_hazardous) ? "Sim" : "Não"}</span>
							</p>
							<p class="card-text">
								Data de aproximação mais próximo da Terra: <span class="text-6d0000">{neo_object.close_approach_date_full}</span>
							</p>
							<p class="card-text">
								Data da primeira observação: <span class="text-6d0000">{neo_object.first_observation_date}</span>
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default NEOCard;