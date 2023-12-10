import { LitElement, html } from 'lit';
import { Chart, registerables } from 'chart.js';
import { LNMCUtilities } from '../LNMCUtilities.js';
import {
    OhlcElement,
    OhlcController,
    CandlestickElement,
    CandlestickController
} from 'chartjs-chart-financial';
import 'chartjs-adapter-luxon';
import zoomPlugin from 'chartjs-plugin-zoom';

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
                            <div class="row">
                                <div class="col-12">
                                    <canvas class="c-1"></canvas>
                                </div>
                                <div class="col-12">
                                    <canvas class="c-0"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    };

    firstUpdated = async () => {
        const window = 60 * 24;
        const timer = ms => new Promise(res => setTimeout(res, ms));
        const scaleDown = (ohlc, min, max) => {
            return {
                ...ohlc,
                o: LNMCUtilities.FeatureScaling.scaleDown(ohlc.o, min, max),
                h: LNMCUtilities.FeatureScaling.scaleDown(ohlc.h, min, max),
                l: LNMCUtilities.FeatureScaling.scaleDown(ohlc.l, min, max),
                c: LNMCUtilities.FeatureScaling.scaleDown(ohlc.c, min, max),
                maxRange: LNMCUtilities.FeatureScaling.scaleDown(ohlc.maxRange, min, max),
                minRange: LNMCUtilities.FeatureScaling.scaleDown(ohlc.minRange, min, max),
            };
        };
        const scaleUp = (ohlc, min, max) => {
            return {
                o: LNMCUtilities.FeatureScaling.scaleUp(ohlc.o, min, max),
                h: LNMCUtilities.FeatureScaling.scaleDown(ohlc.h, min, max),
                l: LNMCUtilities.FeatureScaling.scaleDown(ohlc.l, min, max),
                c: LNMCUtilities.FeatureScaling.scaleDown(ohlc.c, min, max),
                maxRange: LNMCUtilities.FeatureScaling.scaleDown(ohlc.maxRange, min, max),
                minRange: LNMCUtilities.FeatureScaling.scaleDown(ohlc.minRange, min, max),
            };
        };

        Chart.register(
            ...registerables,
            zoomPlugin,
            OhlcElement,
            OhlcController,
            CandlestickElement,
            CandlestickController);
        const ctx = this.querySelector('canvas.c-0');
        this._chart = new Chart(ctx, {
            type: 'line',
            options: {
                plugins: {
                    title: { display: false },
                    subtitle: { display: false },
                    legend: { display: false },
                },
            },
            data: {
                datasets: [{
                    data: [],
                    borderWidth: 0,
                    backgroundColor: (x) => {
                        if (x.parsed?.y > 0) return 'green';
                        return 'red';
                    },
                }, {
                    data: [],
                    borderWidth: 0,
                    backgroundColor: 'blue',
                }, {
                    data: [],
                    borderWidth: 0,
                    backgroundColor: 'blue',
                }, {
                    data: [],
                    borderWidth: 0,
                    backgroundColor: 'blue',
                }, {
                    data: [],
                    borderWidth: 0,
                    backgroundColor: 'blue',
                }, {
                    data: [
                        { x: 0, y: 1.0 },
                        { x: window - 1, y: 1.0 },
                        { x: 0, y: 0 },
                        { x: window - 1, y: 0 },
                        { x: 0, y: -1.0 },
                        { x: window - 1, y: -1.0 }],
                    borderWidth: 0,
                    backgroundColor: 'red',
                }]
            },
        });
        this._chart2 = new Chart(this.querySelector('canvas.c-1').getContext('2d'), {
            type: 'ohlc',
            options: {
                plugins: {
                    title: { display: false },
                    subtitle: { display: false },
                    legend: { display: false },
                },
            },
            data: {
                datasets: [{
                    data: [],
                    hidden: false
                }, {
                    type: 'line',
                    data: [],
                    borderWidth: 0,
                    backgroundColor: 'blue',
                }, {
                    type: 'line',
                    data: [],
                    borderWidth: 0,
                    backgroundColor: 'blue',
                },]
            },
        });

        let response = await fetch('/api/copilot/test');
        let data = await response.json();
        let processedData = [];
        for (let i = 0; i < data.length; ++i) {
            processedData.push({
                ...data[i],
                ma: LNMCUtilities.Indicators.ma(processedData, 200)
            });
            const range = processedData.slice(window * -1);
            if (range.length === window) {
                processedData.slice(-1)[0].maxRange = Math.max(...range.map(x => x.c));
                processedData.slice(-1)[0].minRange = Math.min(...range.map(x => x.c));
                let scaledRange = range.map(x => scaleDown(x, processedData.slice(-1)[0].minRange, processedData.slice(-1)[0].maxRange));




                let s = scaledRange.filter(x => x.c < 0.25);
                let b = scaledRange.filter(x => x.c > 0.75);
                //console.log(`s: ${s.length} b: ${b.length}`);



                let last = scaledRange.slice(-1)[0];
                const target = 0.0;
                const maxRange = 0.2;
                const minRange = 0.1;
                scaledRange = scaledRange.map(x => {
                    const maxTempRange = x.maxRange ? x.maxRange : maxRange;
                    const minTempRange = x.minRange ? x.minRange : minRange;
                    return {
                        ...x,
                        maxRange: maxTempRange + (target - last.maxRange ? last.maxRange : maxRange),
                        minRange: minTempRange + (target - last.minRange ? last.minRange : minRange),
                    };
                });

                // console.log(scaledRange.slice(-1)[1]);










                /*this._chart.config.data.labels = scaledRange.map((x, i) => i);
                this._chart.config.data.datasets[0].data = scaledRange.map((x, i) => { return { x: i, y: x.c }; });
                this._chart.config.data.datasets[1].data = scaledRange.map((x, i) => { return { x: i, y: x.maxRange }; });
                this._chart.config.data.datasets[4].data = scaledRange.map((x, i) => { return { x: i, y: x.minRange }; });
                this._chart.update();

                this._chart2.config.data.datasets[0].data = range;
                this._chart2.config.data.datasets[1].data = range.map(x => { return { x: x.x, y: x.maxRange } });
                this._chart2.config.data.datasets[2].data = range.map(x => { return { x: x.x, y: x.minRange } });
                this._chart2.update();*/

                processedData[processedData.length - 1].maxRange = LNMCUtilities.FeatureScaling
                    .scaleUp(scaledRange.slice(-1)[0].maxRange,
                        processedData.slice(-1)[0].minRange,
                        processedData.slice(-1)[0].maxRange);
                processedData[processedData.length - 1].maxRangeConst = LNMCUtilities.FeatureScaling
                    .scaleUp(maxRange, processedData.slice(-1)[0].minRange, processedData.slice(-1)[0].maxRange);

                processedData[processedData.length - 1].minRange = LNMCUtilities.FeatureScaling
                    .scaleUp(scaledRange.slice(-1)[0].minRange,
                        processedData.slice(-1)[0].minRange,
                        processedData.slice(-1)[0].maxRange);
                processedData[processedData.length - 1].minRangeConst = LNMCUtilities.FeatureScaling
                    .scaleUp(minRange, processedData.slice(-1)[0].minRange, processedData.slice(-1)[0].maxRange);

                if (true) {
                    this._chart2.config.data.datasets[0].data = processedData.slice(window * -1);
                    //this._chart2.config.data.datasets[1].data = processedData.slice(window * -1).map(x => { return { x: x.x, y: x.maxRange } });
                    //this._chart2.config.data.datasets[2].data = processedData.slice(window * -1).map(x => { return { x: x.x, y: x.minRange } });

                    //LNMCUtilities.Indicators.maTest(this._chart2, window, processedData.slice(window * -1));

                    // if (!this._chart2.config.data.datasets.filter(x => x.id === 'ma').length) {
                    //     this._chart2.config.data.datasets.push({
                    //         id: 'ma',
                    //         type: 'line',
                    //         data: [],
                    //         borderWidth: 0,
                    //         backgroundColor: 'green',
                    //     });
                    // }
                    // else {
                    //     this._chart2.config.data.datasets.filter(x => x.id === 'ma')[0].data = processedData
                    //         .slice(window * -1)
                    //         .map(x => {
                    //             return {
                    //                 x: x.x,
                    //                 y: x.ma
                    //             }
                    //         });
                    // }

                    const rangeMax = [...range].sort((a, b) => a.h - b.h);
                    const rangeMin = [...range].sort((a, b) => a.l - b.l);
                    const asd = [, rangeMax.slice(-1)[0], rangeMin[0]].sort((a, b) => a.x - b.x);
                    if (!this._chart2.config.data.datasets.filter(x => x.id === 'range-ohlc').length) {
                        this._chart2.config.data.datasets.push({
                            id: 'range-ohlc',
                            type: 'line',
                            data: [{
                                x: range[0].x,
                                y: range[0].c
                            }, {
                                x: asd[0].x,
                                y: asd[0].c
                            }, {
                                x: range.slice(-1)[0].x,
                                y: range.slice(-1)[0].c
                            }],
                            borderWidth: 5,
                            borderColor: 'green',
                            backgroundColor: 'green',
                        });
                    }
                    else {
                        const steps = 4;
                        const length = window / steps;
                        let start = 0;
                        const geteilteTeile = [];
                        this._chart2.config.data.datasets.filter(x => x.id === 'range-ohlc')[0].data = [];
                        for (let i = 0; i < steps; ++i) {
                            const teil = range.slice(start, start + length);
                            geteilteTeile.push(teil);
                            start += length;

                            const open = teil[0];
                            const close = teil.slice(-1)[0];
                            const high = teil.sort((a, b) => a.h - b.h);
                            const low = teil.sort((a, b) => a.l - b.l);

                            // console.log(high.slice(-1)[0].h);
                            // console.log(low[0].l);

                            // this._chart2.config.data.datasets.filter(x => x.id === 'range-ohlc')[0].data.push({
                            //     x: open.x,
                            //     y: open.c,
                            // });

                            if (high.slice(-1)[0].x < low[0].x) {
                                this._chart2.config.data.datasets.filter(x => x.id === 'range-ohlc')[0].data.push({
                                    x: high.slice(-1)[0].x,
                                    y: high.slice(-1)[0].h,
                                });
                                this._chart2.config.data.datasets.filter(x => x.id === 'range-ohlc')[0].data.push({
                                    x: low[0].x,
                                    y: low[0].l,
                                });
                            } else {
                                this._chart2.config.data.datasets.filter(x => x.id === 'range-ohlc')[0].data.push({
                                    x: low[0].x,
                                    y: low[0].l,
                                });
                                this._chart2.config.data.datasets.filter(x => x.id === 'range-ohlc')[0].data.push({
                                    x: high.slice(-1)[0].x,
                                    y: high.slice(-1)[0].h,
                                });
                            }
                            this._chart2.config.data.datasets.filter(x => x.id === 'range-ohlc')[0].data.push({
                                x: close.x,
                                y: close.c,
                            });
                        }

                        // this._chart2.config.data.datasets.filter(x => x.id === 'range-ohlc')[0].data = [{
                        //     x: range[0].x,
                        //     y: range[0].c
                        // }, {
                        //     x: asd[0].x,
                        //     y: asd[0].c
                        // }, {
                        //     x: asd[1].x,
                        //     y: asd[1].c
                        // }, {
                        //     x: range.slice(-1)[0].x,
                        //     y: range.slice(-1)[0].c
                        // }]
                    }



                    this._chart2.update();
                    await timer(60);
                }
            }
        }

        this._chart2.config.data.datasets[0].data = processedData.slice(window * -1);
        //this._chart2.config.data.datasets[1].data = processedData.slice(window * -1).map(x => { return { x: x.x, y: x.maxRangeConst } });
        //this._chart2.config.data.datasets[2].data = processedData.slice(window * -1).map(x => { return { x: x.x, y: x.minRangeConst } });
        this._chart2.update();
    };

    _2_firstUpdated = async () => {
        const scaleDown = (step, lowest, highest) => {
            return {
                ...step,
                o: (step.o - lowest) / (highest - lowest),
                h: (step.h - lowest) / (highest - lowest),
                l: (step.l - lowest) / (highest - lowest),
                c: (step.c - lowest) / (highest - lowest),
                x: step.x,
            };
        };
        const scaleUp = (step, lowest, highest) => {
            return {
                o: step.o * (highest - lowest) + lowest,
                h: step.h * (highest - lowest) + lowest,
                l: step.l * (highest - lowest) + lowest,
                c: step.c * (highest - lowest) + lowest,
                x: step.x,
            };
        };

        let response = await fetch('/api/copilot/test');
        let data = await response.json();
        let processedData = [];
        let testRanges = [];
        for (let i = 0; i < data.length; ++i) {
            processedData.push(data[i]);
            const range = processedData.slice(-60);
            if (range.length == 60) {
                const maxRange = Math.max(...range.map(x => x.c));
                const minRange = Math.min(...range.map(x => x.c));
                const scaledRange = range.map(x => scaleDown(x, minRange, maxRange));
                const first = scaledRange[0];
                const last = scaledRange[scaledRange.length - 1];
                const lastScaledUp = scaleUp(last, minRange, maxRange);
                const futureData = data.filter(x => x.x > lastScaledUp.x).slice(0, 60);
                const maxFutureH = Math.max(...futureData.map(x => x.h));
                const minFutureL = Math.min(...futureData.map(x => x.l));
                if (first.c === 0 && last.c >= 0.5 && maxFutureH <= lastScaledUp.c) {
                    testRanges.push({
                        input: scaledRange.map(x => x.c),
                        output: [1, 0] // short
                    });
                } else if (first.c === 1 && last.c <= 0.5 && minFutureL >= lastScaledUp.c) {
                    testRanges.push({
                        input: scaledRange.map(x => x.c),
                        output: [0, 1] // long
                    });
                }
            }
        }
        console.log('testRanges', testRanges);
        const network = new brain.NeuralNetwork({
            inputSize: 60,
            inputRange: 60,
            hiddenLayers: [60, 30, 20],
            outputSize: 2,
        });
        const stats = await network.trainAsync(testRanges, {
            log: x => console.log(x)
        });
        console.log('traning is done...', stats);

        Chart.register(...registerables);
        const ctx = this.querySelector('canvas');
        this._chart = new Chart(ctx, {
            type: 'line',
            options: {
                // plugins: {
                //     title: { display: false },
                //     subtitle: { display: false },
                //     legend: { display: false },
                //     tooltip: { enabled: false, }
                // },
                // scales: {
                //     x: { display: false },
                //     y: { display: false, beginAtZero: true }
                // },
            },
            data: {
                datasets: [{
                    data: [],
                    borderWidth: 0,
                    backgroundColor: 'black',
                }]
            },
        });


        const fetchData = async () => {
            response = await fetch('/api/copilot/test');
            data = await response.json();
            processedData = [];
            const signals = [];
            let output;
            for (let i = 0; i < data.length; ++i) {
                processedData.push(data[i]);
                const range = processedData.slice(-60);
                if (range.length == 60) {
                    const maxRange = Math.max(...range.map(x => x.c));
                    const minRange = Math.min(...range.map(x => x.c));
                    const scaledRange = range.map(x => scaleDown(x, minRange, maxRange)).map(x => x.c);
                    output = network.run(scaledRange);
                    if (output[0] >= 0.9 && signals[signals.length - 1]?.s !== 's') {
                        signals.push({ s: 's', c: data[i].c })
                    } else if (output[1] >= 0.9 && signals[signals.length - 1]?.s !== 'b') {
                        signals.push({ s: 'b', c: data[i].c })
                    }
                    this._chart.config.data.labels = scaledRange.map((x, i) => i);
                    this._chart.config.data.datasets[0].data = range.map(x => scaleDown(x, minRange, maxRange)).map(x => { return { x: x.x, y: x.c }; });
                    // console.log(this._chart.config.data.datasets[0].data);
                }
            }

            // this._chart.config.data.datasets[0].data = processedData.slice(-60).map(x => { return { x: x.x, y: x.c }; });
            // console.log(this._chart.config.data.datasets[0].data)
            this._chart.update();


            var msg = new SpeechSynthesisUtterance();
            msg.text = '';
            if (output[0] >= 0.9) {
                console.log('SHORT');
                msg.text = 'SHORT';
                window.speechSynthesis.speak(msg);
            } else if (output[1] >= 0.9) {
                console.log('LONG');
                msg.text = 'LONG';
                window.speechSynthesis.speak(msg);
            } else {
                console.log('WAIT', `SHORT: ${output[0]} LONG: ${output[1]}`);
            }
        };

        const intervalId = setInterval(fetchData, 60000);
        await fetchData();
    }

    _1_firstUpdated = async () => {
        const timer = ms => new Promise(res => setTimeout(res, ms));
        const scaleDown = (step, lowest, highest) => {
            return {
                ...step,
                o: (step.o - lowest) / (highest - lowest),
                h: (step.h - lowest) / (highest - lowest),
                l: (step.l - lowest) / (highest - lowest),
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

        let response = await fetch('/api/copilot/test');
        let data = await response.json();
        let processedData = [];
        let testRanges = [];
        for (let i = 0; i < data.length; ++i) {
            processedData.push(data[i]);
            const range = processedData.slice(-60);
            if (range.length == 60) {
                const maxRange = Math.max(...range.map(x => x.c));
                const minRange = Math.min(...range.map(x => x.c));
                const scaledRange = range.map(x => scaleDown(x, minRange, maxRange));
                const first = scaledRange[0];
                const last = scaledRange[scaledRange.length - 25];
                if (first.c === 0 && last.c === 1) {
                    let testRange = processedData.filter(x => x.x < last.x).slice(-120);
                    if (testRange.length === 120) {
                        testRange = testRange.map((x, trI) => {
                            return {
                                ...x,
                                output: {
                                    openLong: trI < range.length ? trI / range.length : 0.1,
                                    closeLong: trI / testRange.length,
                                }
                            };
                        });
                        testRanges.push(testRange);
                    }
                }
            }
        }

        const testData = [];
        for (let i = 0; i < testRanges.length; ++i) {
            for (let j = 0; j < testRanges[i].length; ++j) {
                const testFrame = testRanges[i][j];
                const range = processedData.filter(x => x.x <= testFrame.x).slice(-60);
                if (range.length === 60) {
                    const maxRange = Math.max(...range.map(x => x.c));
                    const minRange = Math.min(...range.map(x => x.c));
                    testData.push({
                        input: Object.assign({}, range.map(x => scaleDown(x, minRange, maxRange)).map(x => x.c)),
                        output: testFrame.output
                    });
                }
            }
        }

        const networkType = 'NeuralNetwork';
        const inputSize = 60;
        const outputSize = 2;
        const size = [inputSize, 60, 30, 60, outputSize]; // 24, 23, 22, // 60, 30, 15, 5
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
        const network = networkTypes[networkType](networkConfig);

        const stats = network.train(testData.slice(-500), {
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
        console.log(stats);

        response = await fetch('/api/copilot/test');
        data = await response.json();
        processedData = [];
        let signals = [];
        let output;
        for (let i = 0; i < data.length; ++i) {
            processedData.push(data[i]);
            const range = processedData.slice(-60);
            if (range.length === 60) {
                const minRange = Math.min(...range.map(x => x.c));
                const maxRange = Math.max(...range.map(x => x.c));
                const input = Object.assign({}, range.map(x => scaleDown(x, minRange, maxRange)).map(x => x.c));
                output = network.run(input);
                if (output.openLong > 0.9 || output.closeLong > 0.9)
                    signals.push({
                        ...output,
                        time: new Date(data[i].x).toLocaleString(),
                        c: data[i].c
                    });
            }
        }

        let trades = [];
        for (let i = 0; i < signals.length; ++i) {
            let signal = signals[i];

            // open new pos
            if (signal.openLong > 0.9 && signal.closeLong < 0.9) {
                let last = trades.slice(-1)[0];
                // check last post
                if (last?.openLong < 0.9 && last?.closeLong > 0.9) {
                    trades.push(signal);
                } else if (!last) { trades.push(signal) }

            } else if (signal.openLong < 0.9 && signal.closeLong > 0.9) {
                let last = trades.slice(-1)[0];
                if (last?.openLong > 0.9 && last?.closeLong < 0.9) {
                    trades[trades.length - 1].pl = signal.c - last.c;
                    trades.push(signal);
                }
            }
        }


        // console.table(signals);
        console.table(trades);
        console.log(trades.map(x => x.pl).filter(x => x).reduce((x, y) => x + y, 0), output);
    };

    _0_firstUpdated = async () => {
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

                await timer(25);
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
                            trade = {
                                side: 's',
                                entryPrice: data[i].c,
                                entryTime: data[i].x
                            };
                        }
                    }


                    //await timer(5);
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

        const intervalId = setInterval(fetchData, 60000);
        await fetchData();
    };
}

customElements.define('my-copilot-view', MyCopilotView);