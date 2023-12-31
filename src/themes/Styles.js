import { StyleSheet } from 'react-native';

import { Colors } from './Colors';

export const Styles = StyleSheet.create({
	appBarContainer: {
		backgroundColor: Colors.primary2,
		padding: 15,
		flexDirection: 'row'
	},
	appBarTitle: { fontSize: 18, fontWeight: '500', color: Colors.white },
	appBarTitleVersion: { fontSize: 12, fontWeight: '500', color: Colors.white },
	appBarSubtitle: {
		fontSize: 14,
		fontWeight: '500',
		color: Colors.white,
		fontStyle: 'italic'
	},
	contentContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		marginTop: 20
	},
	contentContainerMobile: {
		marginTop: 20,
		marginBottom: 20
	},
	inputOutputBox: {
		marginHorizontal: 25,
		padding: 10,
		borderWidth: 2,
		borderColor: Colors.primary1,
		borderBottomEndRadius: 4,
		borderBottomStartRadius: 4,
		height: 400
	},
	inputOutputBoxTitle: {
		marginHorizontal: 25,
		backgroundColor: Colors.primary1,
		padding: 10,
		borderTopStartRadius: 4,
		borderTopEndRadius: 4,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	inputOutputBoxTitleText: {
		color: Colors.white,
		fontSize: 16
	},
	buttonConvertContainer: {
		backgroundColor: Colors.primary2,
		padding: 5,
		borderRadius: 25,
		width: 50,
		height: 50,
		alignSelf: 'center',
		marginVertical: 10
	},
	inputText: { textAlignVertical: 'top', fontSize: 16, color: Colors.text },
	outputText: { fontSize: 16, color: Colors.primary2 },
	buttonConvertImage: { width: 30, height: 30 },
	authorText: { fontSize: 12, color: Colors.white }
});
