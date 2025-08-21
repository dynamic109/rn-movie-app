import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/appNavigation';

export function useAppNavigation() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList, 'Movie'>>();
}
