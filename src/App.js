import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import InfoPanel from "./InfoPanel.js";
import NEOsContainer from "./NEOsContainer.js";
import Loader from "react-loader-advanced";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

import { fetchNEOsSaga } from "./actioncreators.js";

class App extends React.Component {

    componentDidMount() {
        this.props.initForToday();
    }

    render() {

        const carregando = (
            <span>
                <span>Carregando...</span>

            </span>

        );

        return (

            <div class="container">
                <div class="row" >
                    <div class="col" >

                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <InfoPanel />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Loader show={this.props.isFetching}
                            message={carregando}
                            foregroundStyle={{ color: "white" }}
                            messageStyle={{ verticalAlign: "top" }}    >
                            <NEOsContainer />
                        </Loader>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetchingNEOs,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initForToday: () => dispatch(fetchNEOsSaga(todayDate())),
    }
}

const todayDate = () => {
    // obtem o dia de hoje
    let dateObj = new Date();
    let year, month, date;
    year = dateObj.getFullYear().toString();
    month = (dateObj.getMonth() + 1).toString();
    date = dateObj.getDate().toString();

    //se já existe data então altera
    month = (month.length === 1) ? (0 + month) : month;
    date = (date.length === 1) ? (0 + date) : date;

    //formato YYYY-MM-DD
    return `${year}-${month}-${date}`;

}

const AppLogic = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppLogic;