import React from 'react';
import ReactEcharts from 'components/ReactECharts';
import CHARTCONFIG from 'constants/ChartConfig';

const line = {};

line.options = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Events', 'Donations', 'Fundraising', 'Others'],
    textStyle: {
      color: CHARTCONFIG.color.text
    }
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {show: true, title: 'save'}
    }
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisLabel: {
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      },
      splitLine: {
        lineStyle: {
          color: CHARTCONFIG.color.splitLine
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      },
      splitLine: {
        lineStyle: {
          color: CHARTCONFIG.color.splitLine
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: CHARTCONFIG.color.splitArea
        }
      }
    }
  ],
  series: [
    {
      name: 'Events',
      type: 'line',
      data: [50, 73, 104, 129, 146, 176, 139, 149, 218, 220, 230, 250]
    },
    {
      name: 'Donations',
      type: 'line',
      data: [82, 77, 98, 94, 105, 81, 104, 104, 92, 83, 107, 91]
    },
    {
      name: 'Fundraising',
      type: 'line',
      data: [50, 39, 35, 41, 47, 49, 59, 59, 52, 64, 59, 51]
    },
    {
      name: 'Others',
      type: 'line',
      data: [45, 35, 35, 39, 53, 76, 56, 59, 48, 40, 48, 21]
    }
  ]
};


const Line = () => (
  <ReactEcharts style={{height: '400px'}} option={line.options} showLoading={false} />
);

module.exports = Line;
