import { Modal } from "bootstrap";
import { LitElement, html } from "lit";

export default class LnmcBrainBtn extends LitElement {
  static properties = {
    _modal: Object,
    _neuralNetwork: Object,
    _data: Object
  };

  _renderModal = () => html`
  <div class="modal" tabindex="-1">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Copilot</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="result"></div>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>
`;

  createRenderRoot = () => this;
  render = () => html`
    ${this._renderModal()}
    <button class="btn btn-sm btn-link" @click="${this._onBoxBtnClick}">
        <i class="bi bi-box-fill"></i>
    </button>
    `;

  firstUpdated = () => {
    this._modal = new Modal(this.querySelector('.modal'));
    this._neuralNetwork = new brain.NeuralNetwork({
      // hiddenLayers: [],
    });
  }

  setData = data => {
    const networkType = 'NeuralNetwork';
    const inputSize = 60;
    const outputSize = 2;
    const size = [inputSize, 30, 20, 10, outputSize];
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

    const upTraningData = [
      {
        input: {
          0: 0.0, 1: 0.05, 2: 0.10, 3: 0.15, 4: 0.20, 5: 0.25, 6: 0.30, 7: 0.35, 8: 0.40, 9: 0.45, 10: 0.50, 11: 0.55, 12: 0.60, 13: 0.65, 14: 0.70, 15: 0.75, 16: 0.80, 17: 0.85, 18: 0.90, 19: 0.95,
        }, output: { b: 1.0, s: 0.0 }
      },
      {
        input: {
          0: 1.0, 1: 0.95, 2: 0.90, 3: 0.85, 4: 0.80, 5: 0.75, 6: 0.70, 7: 0.65, 8: 0.60, 9: 0.55, 10: 0.50, 11: 0.45, 12: 0.40, 13: 0.35, 14: 0.30, 15: 0.25, 16: 0.20, 17: 0.15, 18: 0.10, 19: 0.05,
        }, output: { b: 0.0, s: 1.0 }
      },
      {
        input: {
          0: 0.5, 1: 0.5, 2: 0.5, 3: 0.5, 4: 0.5, 5: 0.5, 6: 0.5, 7: 0.5, 8: 0.5, 9: 0.5, 10: 0.5, 11: 0.5, 12: 0.5, 13: 0.5, 14: 0.5, 15: 0.5, 16: 0.5, 17: 0.5, 18: 0.5, 19: 0.5,
        }, output: { b: 0.5, s: 0.5 }
      },
    ];
    const stats = network.train(upTraningData, {
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
    //const output = network.run({ 0: 0.1, 1: 0.2, 2: 0.3, 3: 0.0, 4: 0.0, 5: 0.0, 6: 0.0, 7: 0.0, 8: 0.0, 9: 0.0, });
    console.log('stats', stats);
    // console.log('output', output);



















    const { chartData: { ohlcChartData }, tradesData: { closedTradesData } } = data;
    const highest = Math.max(...ohlcChartData.map(x => x.h));
    const lowest = Math.min(...ohlcChartData.map(x => x.l));

    const scaleDown = (step) => {
      return {
        o: (step.o - lowest) / (highest - lowest),
        h: (step.h - lowest) / (highest - lowest),
        l: (step.l - lowest) / (highest - lowest),
        c: (step.c - lowest) / (highest - lowest),
        x: step.x,
      };
    };
    const scaleUp = (step) => {
      return {
        o: step.o * (highest - lowest) + lowest,
        h: step.h * (highest - lowest) + lowest,
        l: step.l * (highest - lowest) + lowest,
        c: step.c * (highest - lowest) + lowest,
        x: step.x,
      };
    };
    //console.log(ohlcChartData);

    const arr = [];
    const scaledData = ohlcChartData.map(scaleDown);
    let trade = null;
    const trades = [];
    let output;
    scaledData.forEach((x) => {
      arr.push(x);
      if (arr.length >= inputSize) {
        const input = {};
        [...arr].splice(-inputSize).forEach(((y, i) => {
          input[i] = y.c;
        }))
        output = network.run(input);
        // console.log(output)
        const price = scaleUp(x);
        if (output.b > 0.6) {
          switch (trade?.side) {
            case 'buy':
              break;
            case 'sell': // close sell trade
              let a = new Date(price.x);
              let b = new Date(trade.entryTime);
              let c = new Date(a - b);
              console.log(c)
              if (c.getHours() >= 1) {
                trade.exit = price.c;
                trade.exitTime = price.x;
                trade.pl = trade.entry - trade.exit;
                //console.log('c', trade);
                trades.push(trade);
                trade = null
              }
              break;
            default:
              trade = {
                side: 'buy',
                entry: price.c,
                entryTime: price.x,
                exit: price.c,
                pl: 0
              };
              //console.log('o', trade);
              break;
          }
        }
        else if (output.s > 0.6) {
          switch (trade?.side) {
            case 'sell':
              break;
            case 'buy': // close buy trade
              let a = new Date(price.x);
              let b = new Date(trade.entryTime);
              let c = new Date(a - b);
              console.log(c)
              if (c.getHours() >= 1) {
                trade.exit = price.c;
                trade.exitTime = price.x;
                trade.pl = trade.exit - trade.entry;
                //console.log('c', trade);
                trades.push(trade);
                trade = null;
              }
              break;
            default:
              trade = {
                side: 'sell',
                entry: price.c,
                entryTime: price.x,
                exit: price.c,
                pl: 0
              };
              //console.log('o', trade);
              break;
          }
        }
        else {
          //trade.exit = price.c;
          switch (trade?.side) {
            case 'buy':
              trade.pl = trade.exit - trade.entry;
            default:
              break;
          }
          //console.log('h', trade);
        }

      }
      // if (arr.length === 5)
      //   console.log(arr.slice(Math.max(arr.length - 5, i)));
    });
    let sum = 0;
    trades.forEach(x => sum += x.pl);
    console.log('output', output);
    console.log('trades', trades.length, trades);
    console.log('PL', sum);
    console.log('trades/PL', trades.length / sum);


    this.querySelector('#result').innerHTML = brain.utilities.toSVG(network, options);
  };


































  ____setData = data => {
    const { chartData: { ohlcChartData }, tradesData: { closedTradesData } } = data;

    let asd = {};
    ohlcChartData.map(x => x.c).forEach((x, i) => asd[i] = x);
    console.log(asd);



    const net = new brain.NeuralNetwork({});

    net.train([
      { input: asd, output: { r: 0 } },
      { input: asd, output: { r: 1 } }]);

    console.log(net.run(asd));
    console.log(net.run(asd));

    this.querySelector('#result').innerHTML = brain.utilities.toSVG(net);

  };

  ___setData = data => {
    const colors = [
      { a: 0.1, b: 0.2, c: 0.3 },
      { a: 0.1, b: 0.2, c: 0.3 },
      { a: 0.1, b: 0.2, c: 0.3 },
      { a: 0.1, b: 0.2, c: 0.3 },
    ];

    const brignesses = [
      { x: 0.1, y: 0.2, z: 0.3 },
      { x: 0.1, y: 0.2, z: 0.3 },
      { x: 0.1, y: 0.2, z: 0.3 },
      { x: 0.1, y: 0.2, z: 0.3 },
      { x: 0.1, y: 0.2, z: 0.3 },
    ];

    const traningData = [];
    colors.forEach((x) => {
      traningData.push({
        input: [/**/],
        output: { asd: 1, dsa: 0 }
      });
    });

    const net = new brain.NeuralNetwork({
      hiddenLayers: [4]
    });

    const stats = net.train(traningData);
    console.log('stats', stats);

    const runOutput = net.run([/**/]);
    console.log(runOutput);
    this.querySelector('#result').innerHTML = brain.utilities.toSVG(net);

  };

  __setData = data => {
    const { chartData: { ohlcChartData }, tradesData: { closedTradesData } } = data;
    const highest = Math.max(...ohlcChartData.map(x => x.h));
    const lowest = Math.min(...ohlcChartData.map(x => x.l));

    const scaleDown = (step) => {
      return {
        o: (step.o - lowest) / (highest - lowest),
        h: (step.h - lowest) / (highest - lowest),
        l: (step.l - lowest) / (highest - lowest),
        c: (step.c - lowest) / (highest - lowest),
      };
    };

    const scaleUp = (step) => {
      return {
        o: step.o * (highest - lowest) + lowest,
        h: step.h * (highest - lowest) + lowest,
        l: step.l * (highest - lowest) + lowest,
        c: step.c * (highest - lowest) + lowest,
      };
    };

    const scaledData = ohlcChartData.map(scaleDown);
    const traningData = [
      scaledData.slice(0, 5),
      scaledData.slice(5, 10),
      scaledData.slice(10, 15),
      scaledData.slice(15, 20),
    ];

    const net = new brain.NeuralNetwork({
      inputSize: 4,
      hiddenLayers: [8, 8],
      outputSize: 4
    });

    net.train(traningData, {
      learningRate: 0.005,
      errorThresh: 0.02,
      //log: (stats) => console.log(stats)
    });

    console.log(scaleUp(net.run(traningData[traningData.length - 1])));
    this.querySelector('#result').innerHTML = brain.utilities.toSVG(net);
  };

  _setData = (data) => {
    //console.log(data);
    const asdTrainData = [];
    const input = [];
    data.chartData.ohlcChartData.map(x => {
      // console.log(x.dateTime);
      input.push(x);
      const pTrades = data.chartData.closedTradesChartData
        .filter(y => y.x === x.x);
      //.filter(z => z.data.pl > 0);

      let open = 0;
      let close = 0;
      let long = 0;
      let short = 0;
      let wait = pTrades.length > 0 ? 1 : 0;
      const uniqueTrades = [...new Map(pTrades.map(v => [v.id, v])).values()];
      const runningTrades = [...new Map(data.chartData.runningTradesChartData.filter(y => y.x === x.x && y.type === 'price' && y.start).map(v => [v.id, v])).values()];
      if (uniqueTrades.length) {
        open = uniqueTrades[0].start ? 1 : 0;
        close = uniqueTrades[0].start ? 0 : 1;
        if (uniqueTrades[0].data.pl > 0) {

          long = uniqueTrades[0].data.side === 'b' ? 1 : 0;
          short = uniqueTrades[0].data.side === 's' ? 1 : 0;
        }
        else {
          long = uniqueTrades[0].data.side === 's' ? 1 : 0;
          short = uniqueTrades[0].data.side === 'b' ? 1 : 0;
        }
        wait = 0;
      } else if (runningTrades.length) {
        open = 0.5;
        close = 0;
        if (runningTrades[0].data.pl > 0) {

          long = runningTrades[0].data.side === 'b' ? 1 : 0;
          short = runningTrades[0].data.side === 's' ? 1 : 0;
        }
        else {
          long = runningTrades[0].data.side === 's' ? 1 : 0;
          short = runningTrades[0].data.side === 'b' ? 1 : 0;
        }
        wait = 0;
      }

      const output = { open, close, long, short, wait };
      asdTrainData.push({
        input: { data: [...input] },
        output: output
      });
      if (open != 0 || close != 0 || long != 0 || short != 0 || wait != 0) {
        //console.log(x.c, output);
      }
    });

    this._neuralNetwork.train(asdTrainData);
    const output = this._neuralNetwork.run([...input]);
    let sortable = [];
    for (var vehicle in output) {
      sortable.push([vehicle, output[vehicle]]);
    }
    sortable.sort(function (a, b) {
      return a[1] - b[1];
    });

    var msg = new SpeechSynthesisUtterance();
    msg.text = '';

    const checkOpenPositions = (side) => {
      switch (side) {
        case 'long':
          if (!data.tradesData.runningTradesData.filter(x => {
            var offset = new Date(Date.now() - new Date(x.market_filled_ts));
            const hh = Math.floor(offset / (1000 * 60 * 60));
            const result = x.side === 'b' && (x.pl <= 0 || hh < 1);
            // console.log(`hh: ${hh} side: ${x.side} pl: ${x.pl}`, result);
            return result;
          }).length) {
            msg.text = 'open long position';
            console.log('open long');
          }
          else
            console.log('wait.. to open long', sortable);
          break;
        case 'short':
          if (!data.tradesData.runningTradesData.filter(x => {
            var offset = new Date(Date.now() - new Date(x.market_filled_ts));
            const hh = Math.floor(offset / (1000 * 60 * 60));
            const result = x.side === 's' && (x.pl <= 0 || hh < 1);
            // console.log(`hh: ${hh} side: ${x.side} pl: ${x.pl}`, result);
            return result;
          }).length) {
            msg.text = 'open short position';
            console.log('open short');
          }
          else
            console.log('wait.. to open short', sortable);
          break;
        default:
          break;
      }
    };

    const checkClosePositions = (side) => {
      switch (side) {
        case 'long':
          if (data.tradesData.runningTradesData.filter(x => x.side === 'b' && x.pl > 0).length) {
            msg.text = 'close long position';
            console.log('close long');
          }
          break;
        case 'short':
          if (data.tradesData.runningTradesData.filter(x => x.side === 's' && x.pl > 0).length) {
            msg.text = 'close short position';
            console.log('close short');
          }
          break;
        default:
          console.log('wait... close')
          break;
      }
    };

    switch (sortable[4][0]) {
      case 'open':
        checkOpenPositions(sortable[3][0])
        break;
      case 'close':
        checkClosePositions(sortable[3][0]);
        break;
      case 'short':
      case 'long':
        switch (sortable[3][0]) {
          case 'open':
            checkOpenPositions(sortable[4][0]);
            break;
          case 'close':
            checkClosePositions(sortable[4][0]);
            break;
          default:
            break;
        }
        break;
      default:
        console.log(`wait... ${sortable[4][0]} ${sortable[3][0]}`, sortable)
        break;
    }

    if (msg.text) {
      console.log(msg.text, sortable);
      window.speechSynthesis.speak(msg);
    }
    // console.log(`${sortable[4][0]} ${sortable[3][0]} ${sortable[2][0]}`, sortable);

    this.querySelector('#result').innerHTML = brain.utilities.toSVG(
      this._neuralNetwork,
      {

      }
      //options
    );
  };

  _onBoxBtnClick = e => {
    e.preventDefault();
    this._modal.toggle();
  };
}

customElements.define('lnmc-brain-btn', LnmcBrainBtn);