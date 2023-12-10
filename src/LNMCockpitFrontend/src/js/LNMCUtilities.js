const LNMCUtilities = {
    FeatureScaling: {
        scaleDown: (x, min, max) => (x - min) / (max - min),
        scaleUp: (x, min, max) => x * (max - min) + min,
        linearInterpolation: (x, y, z) => x + (y - z)
    },
    Indicators: {
        ma: (data, window) => {
            return data.slice(window * -1).reduce((partialSum, x) => partialSum + x.c, 0) / window;
        },
        maTest: (chart, window, data) => {
            if (!chart.config.data.datasets.filter(x => x.id === 'ma').length) {
                chart.config.data.datasets.push({
                    id: 'ma',
                    type: 'line',
                    data: data.slice(window * -1).map(x => { return { x: x.x, y: x.ma }; }),
                    borderWidth: 0,
                    backgroundColor: 'green',
                });
            }
            else {
                chart.config.data.datasets.filter(x => x.id === 'ma')[0].data = data
                    .slice(window * -1)
                    .map(x => {
                        return {
                            x: x.x,
                            y: x.ma
                        }
                    });
            }
        },
        appendMovingAverage: (chart, window, data) => {
            const asd = data.slice(window * -1).reduce((partialSum, x) => partialSum + x.c, 0) / window;
        }
    }
};

export { LNMCUtilities };