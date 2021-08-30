import Chart, {
    ArgumentAxis, Export, Label, Legend,
    Series, Tick, ValueAxis
} from 'devextreme-react/chart';
import 'devextreme/dist/css/dx.light.css';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../../firebase/clientApp';
import styles from '../../styles/Home.module.css';

const Home = () => {
    const collectionRef = firebase.firestore().collection('agendas');
    const query = collectionRef.orderBy('id');
    const [dados] = useCollectionData(query, { idField: 'id' });

    const buildGrafico = (json) => {
        return (
            <Chart
                key='id'
                title="Teste Totalmente excelente"
                dataSource={json}
                rotated={true}
                id="chart">

                <ArgumentAxis>
                    <Label customizeText={(e) => e.value} />
                </ArgumentAxis>

                <ValueAxis>
                    <Tick visible={false} />
                    <Label visible={false} />
                </ValueAxis>

                <Series
                    valueField="quantidade"
                    argumentField="situacao"
                    type="bar"
                    color="#79cac4">

                    <Label visible={true} backgroundColor="#c18e92" />
                </Series>

                <Legend visible={false} />

                <Export enabled={true} />
            </Chart>
        );
    }

    return (
        <div className={styles.body}>
            <Head>
                <title>Teste de Gráfico</title>
                <meta name="description" content="Testando REACT com NEXT.JS e DevExtreme" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {dados && dados.map(e => buildGrafico(e.registros))}

            <br />
            <div className={styles.container}>
                <Link href="/">
                    <a>Voltar</a>
                </Link>
            </div>
        </div>
    );
}

export default Home;