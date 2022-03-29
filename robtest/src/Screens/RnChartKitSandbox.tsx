import React from 'react';
import {Text, View} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

export default function RnChartKitSandboxScreen() {
  const sampleData = {
    labels: ['This Week', 'Last Week', '2 weeks ago'],
    datasets: [
      {
        data: [10000, 20000, 30000],
      },
    ],
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text>Earnings</Text>
      <BarChart
        style={{borderRadius: 10}}
        withHorizontalLabels={false}
        showBarTops={false}
        data={sampleData}
        width={340} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="K"
        showValuesOnTopOfBars={true}
        fromZero={true}
        chartConfig={{
          barPercentage: 1,
          propsForBackgroundLines: {
            strokeDasharray: '',
            strokeWidth: 1,
            stroke: 'grey',
            x1: 40,
            x2: 300,
            y1: 180,
            y2: 180,
          },
          formatTopBarValue: topBarValue => {
            return `$${topBarValue}`;
          },
          backgroundColor: '#ece7e3',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: () => '#FF495C',
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
      />
    </View>
  );
}
