var averageTimeChart = echarts.init(document.getElementsByClassName('average-time-chart')[0]);
var averageTimeChartFunnel = echarts.init(document.getElementsByClassName('average-time-chart-funnel')[0]);
var averageTimeChartCycle = echarts.init(document.getElementsByClassName('average-time-chart-cycle')[0]);

var colors = ['#5793f3', '#d14a61', '#675bba'];


optionAVG = {
    color: colors,

    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: ['Ciclo 16', 'Clico 17']
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return 'Setor ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: [
                "Ciclo 1", "Ciclo 2", "Ciclo 3", "Ciclo 4", "Ciclo 5", "Ciclo 6",
                "Ciclo 7", "Ciclo 8", "Ciclo 9", "Ciclo 10", "Ciclo 11", "Ciclo 12"
            ]
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return 'Evento ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: [
                "Nosso Encontro", "Minha Natura", "Nosso Encontro", "Minha Natura", "Nosso Encontro", "Minha Natura",
                "Nosso Encontro", "Minha Natura", "Nosso Encontro", "Minha Natura", "Nosso Encontro", "Minha Natura",
            ]
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Tempo Médio Setor 01',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: 'Tempo Médio Setor 02',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [4.3, 2.8, 6.9, 31.8, 43.4, 57.33, 86.6, 58.0, 77.2, 28.8, 36.0, 42.3]
        }
    ]
};

optionAVGFunnel = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        data: ['Semente', 'Bronze', 'Prata', 'Ouro', 'Diamante']
    },
    calculable: true,
    series: [
        {
            name: 'Nível',
            type: 'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                },
                emphasis: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data: [
                {value: 60, name: 'Ouro'},
                {value: 45, name: 'Prata'},
                {value: 20, name: 'Semente'},
                {value: 34, name: 'Bronze'},
                {value: 85, name: 'Diamante'}
            ]
        }
    ]
};

optionAVGCycle = {
    angleAxis: {
        type: 'category',
        data: ['Ciclo 1', 'Ciclo 2', 'Ciclo 3', 'Ciclo 4', 'Ciclo 5', 'Ciclo 6', 'Ciclo 7'],
        z: 10
    },
    radiusAxis: {},
    polar: {},
    series: [
        {
            type: 'bar',
            data: [12.5, 15.3, 20.2, 37.0, 23.1, 36.4, 23.2],
            coordinateSystem: 'polar',
            name: 'Semente',
            stack: 'semente'
        },
        {
            type: 'bar',
            data: [23.5, 45.3, 17.2, 11.5, 29.9, 43.4, 19.2],
            coordinateSystem: 'polar',
            name: 'Bronze',
            stack: 'bronze'
        },
        {
            type: 'bar',
            data: [32.5, 25.3, 22.2, 43.5, 43.9, 28.4, 29.2],
            coordinateSystem: 'polar',
            name: 'Prata',
            stack: 'prata'
        },
        {
            type: 'bar',
            data: [25.5, 17.3, 42.2, 32.5, 31.9, 21.4, 32.2],
            coordinateSystem: 'polar',
            name: 'Ouro',
            stack: 'ouro'
        },
        {
            type: 'bar',
            data: [40.5, 21.3, 15.2, 14.5, 19.9, 40.4, 32.2],
            coordinateSystem: 'polar',
            name: 'Diamante',
            stack: 'diamante'
        }
    ],
    legend: {
        show: true,
        data: ['Semente', 'Bronze', 'Prata', 'Ouro', 'Diamante']
    }
};

averageTimeChart.setOption(optionAVG);
averageTimeChartFunnel.setOption(optionAVGFunnel);
averageTimeChartCycle.setOption(optionAVGCycle);