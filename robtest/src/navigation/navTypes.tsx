import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamlist = {
  Home: undefined;
  Settings: undefined;
  RnChartKit: undefined;
};

export type RootStackParamListType<Screen extends keyof RootStackParamlist> =
  NativeStackScreenProps<RootStackParamlist, Screen>;

export const RootStack = createNativeStackNavigator<RootStackParamlist>();
