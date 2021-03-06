import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'pie3d',
    // width: '500',
    // height: '500',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Languages',
        numberSuffix: '%',
        decimals: 0,
        pieRadius: '45%',
        theme: 'fusion',
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
