import { LitElement, html } from "lit";

export default class LnmcBrainBtn extends LitElement {
  static properties = {
    _data: Object
  };
  createRenderRoot = () => this;
  render = () => html`
    <button class="btn btn-sm btn-link disabled">
        <i class="bi bi-box-fill"></i>
    </button>
    `;

  firstUpdated = () => {

  }

  setData = (data) => {
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

    const net = new brain.NeuralNetwork();
    net.train(asdTrainData);
    const output = net.run([...input]);
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
  };
}

customElements.define('lnmc-brain-btn', LnmcBrainBtn);