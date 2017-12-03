var presence = echarts.init(document.getElementsByClassName('presence')[0]);

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Setor 01', 'Setor 02', 'Setor 03', 'Setor 04', 'Setor 05']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['Semente','Bronze','Prata','Ouro','Diamante']
    },
    series: [
        {
            name: 'Setor 01',
            type: 'bar',
            data: [182003, 213489, 295034, 104970, 131744]
        },
        {
            name: 'Setor 02',
            type: 'bar',
            data: [193225, 233438, 310020, 734584, 724574]
        },
        {
            name: 'Setor 03',
            type: 'bar',
            data: [324645, 263438, 315000, 121594, 134141]
        },
        {
            name: 'Setor 04',
            type: 'bar',
            data: [876542, 723345, 685124, 256893, 135734]
        },
        {
            name: 'Setor 05',
            type: 'bar',
            data: [630055, 635057, 433735, 485235, 467345]
        }
    ]
};

presence.setOption(option);