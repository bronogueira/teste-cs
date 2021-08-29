import DataGrid, { Column, FilterRow, Grouping, GroupPanel, MasterDetail } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import Head from 'next/head';
import React from 'react';
import 'whatwg-fetch';
import styles from '../styles/Home.module.css';
import Detail from './_detail.js';

const url = 'http://csweb00.cserp.com.br:8080/csdesenv/faturamento/carregamentos/agendas/';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    const headers = {
      'cod_grupoempresa': 1,
      'cod_empresa': 1,
      'cod_filial': 1,
    };

    fetch(url, { headers })
      .then(response => response.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result.items,
        });
      });
  }

  render() {

    if (!this.state.isLoaded) return <div>Carregando...</div>;

    return (
      <div className={styles.body}>
        <Head>
          <title>Teste CS</title>
          <meta name="description" content="Testando REACT com NEXT.JS e DevExtreme" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.container}>
          <DataGrid id="grid-container"
            dataSource={this.state.items}
            keyExpr="id_carragenda"
            showBorders={true}>

            <GroupPanel visible={true} emptyPanelText='Testando REACT com NEXT.JS e DevExtreme' />

            <FilterRow visible={false} applyFilter="auto" />

            <Grouping autoExpandAll={true} contextMenuEnabled='true' />

            <MasterDetail enabled={true} component={Detail} />

            <Column dataField="id_carragenda" width={90} caption="Nº" />
            <Column dataField="nr_pedido" width={100} caption="Nº Pedido" />
            <Column dataField="desc_item" min-width={270} caption="Produto" />
            <Column dataField="nome_fornecedor" min-width={270} caption="Fornecedor" />
            <Column dataField="nome_pessoa" min-width={200} caption="Motorista" />
            <Column dataField="data" dataType="date" width={120} caption="Data" />
            <Column dataField="periodo" width={120} caption="Período" />
            <Column dataField="duracao" width={100} caption="Duração" />
          </DataGrid>
        </main>
      </div>
    );
  }
}

export default App;
