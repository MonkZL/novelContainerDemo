import {ScrollView, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

const TestApp = () => {

	const [arr, setArr] = useState([{color: 'blue'}]);

	return <>


		<TouchableOpacity
			onPress={() => {
				setArr([{color: 'pink'}].concat(arr))
			}}
			style={{width: 20, height: 20, backgroundColor: 'black'}}/>

		<TouchableOpacity
			onPress={() => {
				setArr(arr.concat([{color: 'green'}]))
			}}
			style={{width: 20, height: 20, backgroundColor: 'red'}}/>


		<ScrollView>
			{
				arr.map((item) => {
					return <View style={{width: 100, height: 20, backgroundColor: item.color, marginBottom: 10}}/>
				})
			}
		</ScrollView>
	</>

}

export default TestApp
