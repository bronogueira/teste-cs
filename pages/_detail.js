import { Column, DataGrid } from 'devextreme-react/data-grid';
import { Item, TabPanel } from 'devextreme-react/tab-panel';
import React from 'react';

const url = 'http://csweb00.cserp.com.br:8080/csdesenv/faturamento/carregamentos/';

class Detail extends React.Component {
    constructor(props) {
        super(props);

        let data = props?.data?.data;

        this.state = {
            logIsLoaded: false,
            veiculosIsLoaded: false,
            idAgenda: data?.id_carragenda,
            itemsLog: [],
            itemsVeiculos: [],
        };
    }

    componentDidMount() {
        const headers = { 'id_carragenda': this.state.idAgenda };

        fetch(`${url}log/`, { headers })
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    logIsLoaded: true,
                    itemsLog: result.items,
                });
            });

        fetch(`${url}veiculos/`, { headers })
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    veiculosIsLoaded: true,
                    itemsVeiculos: result.items,
                });
            });
    }

    render() {
        return (
            <TabPanel>
                <Item title="Log" render={() => this.renderLog(this.state.logIsLoaded)} />
                <Item title="Veículos" render={() => this.renderVeiculos(this.state.veiculosIsLoaded)} />
            </TabPanel>
        );
    }

    renderLog(logIsLoaded) {
        if (!logIsLoaded) return <div>Carregando...</div>;

        return (
            <DataGrid
                allowColumnResizing={true}
                dataSource={this.state.itemsLog}
                showBorders={true}
                columnAutoWidth={true}>
                <Column dataField="data_hora" dataType="date" caption="Data Hora" />
                <Column dataField="logon" Caption="Usuário" />
                <Column dataField="operacao" Caption="Operação" />
                <Column dataField="propriedade" Caption="Propriedade" />
                <Column dataField="old_value" Caption="Dê" />
                <Column dataField="new_value" Caption="Para" />
            </DataGrid>
        );
    }

    renderVeiculos(veiculosIsLoaded) {
        if (!veiculosIsLoaded) return <div>Carregando...</div>;

        return (
            <DataGrid
                allowColumnResizing={true}
                dataSource={this.state.itemsVeiculos}
                showBorders={true}
                columnAutoWidth={true}>
                <Column dataField="marca" caption="Marca" />
                <Column dataField="modelo" Caption="Modelo" />
                <Column dataField="ano" Caption="Ano" />
                <Column dataField="placa" Caption="Placa" />
                <Column dataField="uf" Caption="UF" />
                <Column dataField="capacidade" Caption="Capacidade" />
                <Column dataField="multiseta" Caption="Multiseta" />
                <Column dataField="tipo" Caption="Tipo" />
                <Column dataField="tipo_veiculo" Caption="Tipo Reboque" />
            </DataGrid>
        );
    }
}

export default Detail;
