import React from 'react';
import {Dimensions, Text, View} from 'react-native';
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
    <View>
      <Text>Earnings</Text>
      <BarChart
        withHorizontalLabels={false}
        showBarTops={true}
        data={sampleData}
        width={Dimensions.get('window').width - 15} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisInterval={1} // optional, defaults to 1
        showValuesOnTopOfBars={true}
        chartConfig={{
          labels: ['hi'],
          backgroundColor: '#ece7e3',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: () => '#FF495C',
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        style={{
          padding: 10,
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
