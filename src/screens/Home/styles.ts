import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 900,
    },
    contentArea: {
        paddingLeft: 20,
        paddingRight: 20
    },
    productRow: {
        height: 450,
        justifyContent: "center",
        marginTop: 20,
        gap: 10
    },
    categoryTitle: {
        fontFamily: "NotoSansJP_700Bold",
        fontSize: 24,
        color: "#525659"
    },
    productList: {
        height: 350,
        flexDirection: "row",
        gap: 16,
    }
})