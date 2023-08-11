import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/index';
import mock from './src/mocks/cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}