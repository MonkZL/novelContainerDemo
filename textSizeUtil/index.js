import {NativeModules} from 'react-native';

export const getTextWidth = (str, fontSize, start, end) => {
	return NativeModules.TextSizeUtil.getTextWidth(str, fontSize, start, end)
}
