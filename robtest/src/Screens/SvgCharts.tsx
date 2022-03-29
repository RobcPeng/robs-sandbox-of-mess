import React from 'react';
import {Text, View} from 'react-native';
import {BarChart} from 'react-native-svg-charts';

export function SVGCharts() {
  const sampleData = {
    labels: ['This Week', 'Last Week', '2 weeks ago'],
    datasets: [
      {
        data: [10000, 20000, 30000],
      },
    ],
  };

  return (
    <View>
      <Text>Apparently this is struggling for maintain</Text>
      <BarChart data={sampleData.datasets[0].data} />
    </View>
  );
}
