import { LitElement, html } from 'lit';
import { Chart, registerables } from 'chart.js';

export default class MyCopilotView extends LitElement {
    static properties = {
        _chart: Object
    };
    createRenderRoot = () => this;
    render = () => {
        return html`
        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <div class="card mt-5">
                        <div class="card-body">
                            <canvas></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    };

    firstUpdated = async () => {
        Chart.register(...registerables);

        const scaleDown = (step, lowest, highest) => {
            return {
                c: (step.c - lowest) / (highest - lowest),
                x: step.x,
            };
        };

        const scaleUp = (step, lowest, highest) => {
            return {
                c: step.c * (highest - lowest) + lowest,
                x: step.x,
            };
        };

        let processedData = [];
        const traningData = [];
        const traningData_0 = [];
        const ctx = this.querySelector('canvas');
        this._chart = new Chart(ctx, {
            type: 'line',
            options: {
                plugins: {
                    title: { display: false },
                    subtitle: { display: false },
                    legend: { display: false },
                    tooltip: { enabled: false, }
                },
                scales: {
                    x: { display: false },
                    y: { display: false, beginAtZero: true }
                },
            },
            data: {
                datasets: [{
                    data: [],
                    borderWidth: 0,
                    backgroundColor: 'black',
                }, {
                    data: [],
                    borderWidth: 0,
                    backgroundColor: (x) => {
                        if (x.raw) {
                            if (x.index < 1) {
                                if (x.raw.y > 0.8) {
                                    const asd = this._chart.config.data.datasets[1].data
                                        .slice(-20)
                                        .filter(y => y.y < 0.2 && y.x > x.raw.x);
                                    if (asd.length) {
                                        const short = 1 - (x.index / 60);
                                        const input = processedData.filter(y => y.x < x.raw.x).slice(-60);
                                        if (input.length === 60) {
                                            const min = Math.min(...input.map(x => x.c));
                                            const max = Math.max(...input.map(x => x.c));
                                            traningData_0.push({
                                                input: Object.assign({}, input.map(x => scaleDown(x, min, max)).map(x => x.c)),
                                                output: { short }
                                            });
                                            return 'red';
                                        }
                                    }
                                }
                                if (x.raw.y < 0.2) {
                                    const asd = this._chart.config.data.datasets[1].data
                                        .slice(-20)
                                        .filter(y => y.y > 0.8 && y.x > x.raw.x);
                                    if (asd.length) {
                                        const long = 1 - (x.index / 60);
                                        const input = processedData.filter(y => y.x < x.raw.x).slice(-60);
                                        if (input.length === 60) {
                                            const min = Math.min(...input.map(x => x.c));
                                            const max = Math.max(...input.map(x => x.c));
                                            traningData_0.push({
                                                input: Object.assign({}, input.map(x => scaleDown(x, min, max)).map(x => x.c)),
                                                output: { long }
                                            });
                                            return 'green';
                                        }
                                    }
                                }
                            }
                            if (x.index > 58) {
                                if (x.raw.y > 0.8) {
                                    const asd = this._chart.config.data.datasets[1].data
                                        .slice(20)
                                        .filter(y => y.y < 0.2 && y.x < x.raw.x);
                                    if (asd.length)
                                        return 'darkred';
                                }
                                if (x.raw.y < 0.2) {
                                    const asd = this._chart.config.data.datasets[1].data
                                        .slice(20)
                                        .filter(y => y.y > 0.8 && y.x < x.raw.x);
                                    if (asd.length)
                                        return 'darkgreen';
                                }
                            }
                        }


                        return 'transparent';

                        if (x.raw?.y === 1) {
                            const asd = this._chart.config.data.datasets[1].data.filter(y => y.y === 0 && y.x > x.raw.x)[0];
                            if (asd) {
                                //console.log(x.index, asd);
                            }
                        }

                        switch (x.parsed?.y) {
                            case 1:
                                if (x.index === 0) { // entry short
                                    const data = processedData.filter(y => y.x >= x.raw.x).slice(-60);

                                    console.table(processedData);

                                    const highest = Math.max(...data.map(x => x.c));
                                    const lowest = Math.min(...data.map(x => x.c));
                                    const scaledData = data.map(x => scaleDown(x, lowest, highest));
                                    //console.log(data, scaledData, lowest, highest)
                                    const input = {};
                                    scaledData.forEach(((y, i) => {
                                        input[i] = y.c
                                    }));


                                    const exitShort = scaledData.filter(y => y.c === 0)[0];
                                    const entryDate = new Date(x.raw.x);
                                    const exitDate = new Date(exitShort.raw.x);
                                    const entryPrice = scaleUp({ x: x.raw.x, c: x.raw.y }, lowest, highest).c;
                                    const exitPrice = scaleUp(exitShort, lowest, highest).c;
                                    const pl = entryPrice - exitPrice;
                                    console.log(`short: ${pl}`);

                                    traningData.push({
                                        input,
                                        output: { s: 1, b: 0, }
                                    });
                                }
                                return 'red';
                            case 0:
                                if (x.index === 0) {
                                    const data = processedData.filter(y => y.x <= x.raw.x).slice(-60);
                                    const highest = Math.max(...data.map(x => x.c));
                                    const lowest = Math.min(...data.map(x => x.c));
                                    const scaledData = data.map(x => scaleDown(x, lowest, highest));
                                    const input = {};
                                    scaledData.forEach(((y, i) => {
                                        input[i] = y.c
                                    }));
                                    traningData.push({
                                        input,
                                        output: { s: 0, b: 1 }
                                    });
                                }
                                return 'green';
                            default:
                                return '';
                        }
                    },
                    pointRadius: (a) => {
                        return 15;
                        const down = a.parsed?.y === 0;
                        const up = a.parsed?.y === 1;
                        if (up || down) return 15;
                    }
                }, {
                    data: [],
                    borderWidth: 0,
                    backgroundColor: (x) => {
                        if (x.raw?.short > 0.9) return 'red';
                        if (x.raw?.long > 0.9) return 'green';
                        return 'orange';
                    },
                    pointRadius: (a) => {
                        if (a.index === 59)
                            return 15;
                        return 0;

                        const down = a.parsed?.y === 0;
                        const up = a.parsed?.y === 1;
                        if (up || down) return 15;
                        return 0;
                    }
                }]
            },
        });

        let response = await fetch('/api/copilot/test');
        let data = await response.json();

        const timer = ms => new Promise(res => setTimeout(res, ms));

        for (let i = 0; i < data.length; ++i) {
            processedData.push(data[i]);
            const dataRange = processedData.slice(-60);
            if (dataRange.length === 60) {
                const highest = Math.max(...dataRange.map(x => x.c));
                const lowest = Math.min(...dataRange.map(x => x.c));
                const scaledData = dataRange.map(x => scaleDown(x, lowest, highest));
                this._chart.config.data.labels = scaledData.map((x, i) => i);
                this._chart.config.data.datasets[0].data = scaledData.map(x => { return { x: x.x, y: x.c }; });
                this._chart.config.data.datasets[1].data = scaledData.map((x, i) => { return { x: x.x, y: x.c }; });

                await timer(5);
                this._chart.update();
            }
        }

        console.log('traningData:', traningData_0);

        const networkType = 'NeuralNetwork';
        const inputSize = 60;
        const outputSize = 2;
        const size = [inputSize, 60, 30, 15, 5, outputSize]; // 24, 23, 22, // 60, 30, 15, 5
        const networkConfig = {
            inputSize: size[0],
            inputRange: size[0],
            hiddenLayers: size.slice(1, size.length - 1),
            outputSize: size[size.length - 1],
        };
        const networkTypes = {
            NeuralNetwork: (config) => {
                return new brain.NeuralNetwork(config);
            },
            RNN: (config) => {
                return new brain.recurrent.RNN(config);
            },
            RNNTimeStep: (config) => {
                return new brain.recurrent.RNNTimeStep(config);
            },
            FeedForward: (config) => {
                // constructor shim
                const { input, feedForward, target } = brain.layer;
                return new brain.FeedForward({
                    inputLayer: () => input({ height: config.inputSize }),
                    hiddenLayers: config.hiddenLayers.map((l) => (inputLayer) =>
                        feedForward({ height: l }, inputLayer)
                    ),
                    outputLayer: (inputLayer) =>
                        target({ height: config.outputSize }, inputLayer),
                });
            },
            Recurrent: (config) => {
                // constructor shim
                const { input, RNN, output } = brain.layer;
                return new brain.Recurrent({
                    inputLayer: () => input({ height: config.inputSize }),
                    hiddenLayers: config.hiddenLayers.map((layerHeight) => {
                        return (inputLayer, recurrentInput) => {
                            return new RNN(
                                { height: layerHeight },
                                inputLayer,
                                recurrentInput
                            );
                        };
                    }),
                    outputLayer: (inputLayer) =>
                        output({ height: config.outputSize }, inputLayer),
                });
            },
        };
        const constructOptions = () => ({
            height: 600,
            width: 800,
            radius: 6,
            line: {
                width: 0.5,
                color: 'black',
            },
            inputs: {
                color: 'rgba(0, 128, 0, 0.5)',
                labels: [...Array(inputSize)].map((x, i) => i),
            },
            hidden: {
                color: 'rgba(255, 127, 80, 0.5)',
            },
            outputs: {
                color: 'rgba(100, 149, 237, 0.5)',
            },
            recurrentLine: {
                color: 'red',
            },
            fontSize: '14px',
        });
        const options = constructOptions();
        const network = networkTypes[networkType](networkConfig);

        const stats = network.train(traningData_0.splice(0, 500), {
            // learningRate: 0.005,
            // errorThresh: 0.02,
            //log: (stats) => console.log('train log')
            // Defaults values --> expected validation
            iterations: 20000, // the maximum times to iterate the training data --> number greater than 0
            errorThresh: 0.005, // the acceptable error percentage from training data --> number between 0 and 1
            log: false, // true to use console.log, when a function is supplied it is used --> Either true or a function
            logPeriod: 10, // iterations between logging out --> number greater than 0
            learningRate: 0.3, // scales with delta to effect training rate --> number between 0 and 1
            momentum: 0.1, // scales with next layer's change value --> number between 0 and 1
            //callback: null, // a periodic call back that can be triggered while training --> null or function
            callbackPeriod: 10, // the number of iterations through the training data between callback calls --> number greater than 0
            //timeout: number, // the max number of milliseconds to train for --> number greater than 0. Default --> Infinity
        });
        console.log('stats', stats);

        const fetchData = async () => {
            response = await fetch('/api/copilot/test');
            data = await response.json();

            let trade = null;
            const trades = [];
            processedData = [];
            let output;
            for (let i = 0; i < data.length; ++i) {
                processedData.push(data[i]);
                const dataRange = processedData.slice(-60);
                if (dataRange.length === 60) {

                    const highest = Math.max(...dataRange.map(x => x.c));
                    const lowest = Math.min(...dataRange.map(x => x.c));
                    const scaledData = dataRange.map(x => scaleDown(x, lowest, highest));
                    const input = {};
                    scaledData.forEach((x, i) => {
                        input[i] = x.c;
                    });
                    output = network.run(input);
                    this._chart.config.data.labels = scaledData.map((x, i) => i);
                    this._chart.config.data.datasets[0].data = scaledData.map(x => { return { x: x.x, y: x.c }; });
                    this._chart.config.data.datasets[1].data = [];
                    this._chart.config.data.datasets[2].data = scaledData.map((x, i) => { return { x: x.x, y: x.c, short: output.short, long: output.long }; });

                    if (trade /*&& data[i].x >= 1701601200*/) {
                        switch (trade.side) {
                            case 'b':
                                if (output.short > 0.96 && trade.exitPrice - trade.entryPrice > 0) {
                                    trade.exitPrice = data[i].c;
                                    trade.exitTime = data[i].x;
                                    trade.pl = trade.exitPrice - trade.entryPrice;
                                    trades.push(trade);
                                    trade = null;
                                    let sum = 0;
                                    trades.forEach(x => sum += x.pl);
                                }
                                break;
                            case 's':
                            default:
                                if (output.long > 0.96 && trade.entryPrice - trade.exitPrice > 0) {
                                    trade.exitPrice = data[i].c;
                                    trade.exitTime = data[i].x;
                                    trade.pl = trade.entryPrice - trade.exitPrice;
                                    trades.push(trade);
                                    trade = null;
                                    let sum = 0;
                                    trades.forEach(x => sum += x.pl);
                                }
                                break;
                        }
                    } else {
                        if (output.long > 0.96) {
                            trade = {
                                side: 'b',
                                entryPrice: data[i].c,
                                entryTime: data[i].x
                            };
                        } else if (output.short > 0.96) {

                            // trade = {
                            //     side: 's',
                            //     entryPrice: data[i].c,
                            //     entryTime: data[i].x
                            // };
                        }
                    }


                    await timer(5);
                    this._chart.update();
                }
            }

            console.table(trades.map(x => {
                x.start = new Date(x.entryTime).toLocaleString();
                x.ende = new Date(x.exitTime).toLocaleString();
                x.duration = new Date(new Date(x.exitTime) - new Date(x.entryTime)).toLocaleTimeString();
                return x;
            }));
            let sum = 0;
            trades.forEach(x => sum += x.pl);
            console.log(sum, output, trade);
        };

        const intervalId = setInterval(fetchData, 60000 * 2);
        await fetchData();
    }
}

customElements.define('my-copilot-view', MyCopilotView);