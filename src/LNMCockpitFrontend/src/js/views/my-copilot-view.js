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
                                <div class="col-12 d-flex justify-content-evenly">
                                    <button class="btn btn-success btn-lg m-5" @click="${this._onBuyBtnClick}">BUY</button>
                                    <button class="btn btn-danger btn-lg m-5" @click="${this._onSellBtnClick}">SELL</button>
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
                    hidden: true
                }, {
                    type: 'line',
                    data: [],
                    borderWidth: 0,
                    // borderColor: 'blue',
                    backgroundColor: 'orange',
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
                            hidden: true,
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
                    }

                    if (this._chart2.config.data.datasets.filter(x => x.id === 'range-ohlc').length) {
                        const last = this._chart2.config.data.datasets.filter(x => x.id === 'range-ohlc')[0].data.slice(-1)[0];
                        const before = this._chart2.config.data.datasets.filter(x => x.id === 'range-ohlc')[0].data.slice(-2)[0];
                        if (last.x === before.x)
                            this._onBuyBtnClick();
                    }

                    // console.log(range[0].x);
                    this._chart2.config.data.datasets[1].data =
                        this._chart2.config.data.datasets[1].data
                            .filter(x => x.x >= range[0].x);

                    this._chart2.update();
                    await timer(60);
                }
            }
        }

        this._chart2.config.data.datasets[0].data = processedData.slice(window * -1);
        this._chart2.update();
    };

    _onBuyBtnClick = e => {
        e?.preventDefault();
        const asd = this._chart2.config.data.datasets[0].data.slice(-1)[0];
        this._chart2.config.data.datasets[1].data.push({
            x: asd.x,
            y: asd.c
        });
        console.log(`buy at ${asd.c} on ${asd.x}`,);
    };

    _onSellBtnClick = e => {
        e.preventDefault();
        const asd = this._chart2.config.data.datasets[0].data.slice(-1)[0];
        this._chart2.config.data.datasets[1].data.push({
            x: asd.x,
            y: asd.c
        });
        console.log(`sell at ${asd.c} on ${asd.x}`,);
    };
}

customElements.define('my-copilot-view', MyCopilotView);