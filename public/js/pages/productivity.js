var productivity = echarts.init(document.getElementsByClassName('productivity')[0]);

option = {
    color: ['#ff7b21'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Ciclo 01', 'Ciclo 02', 'Ciclo 03', 'Ciclo 04', 'Ciclo 05', 'Ciclo 06', 'Ciclo 07'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'CNs',
            type: 'bar',
            barWidth: '60%',
            data: [4950, 23948, 45679, 60473, 269489, 499689, 750698]
        }
    ]
};

productivity.setOption(option);