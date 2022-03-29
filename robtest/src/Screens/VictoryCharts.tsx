import React from 'react';
import {View} from 'react-native';
import {VictoryAxis, VictoryBar, VictoryChart} from 'victory-native';

const data = [
  {quarter: 1, earnings: 13000, label: 'hi'},
  {quarter: 2, earnings: 16500, label: 'hi'},
  {quarter: 3, earnings: 14250, label: 'hi'},
  {quarter: 4, earnings: 19000, label: 'hi'},
];

export function VictoryCharts() {
  return (
    <View>
      <VictoryChart width={400}>
        <VictoryBar
          width={200}
          colorScale={['warm']}
          barWidth={50}
          style={{data: {fill: 'red'}}}
          // labelComponent={
          //   <VictoryLabel verticalAnchor="middle" textAnchor="middle" />
          // }
          data={data}
          x="quarter"
          y="earnings"
        />
        <VictoryAxis width={800} />
      </VictoryChart>
    </View>
  );
}
