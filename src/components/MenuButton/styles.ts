import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems:"center",
    },
    Text:{
        color:theme.colors.white,
        fontFamily:theme.fontFamily.medium,
        fontSize: 14 ,
        marginTop:10,
    },
    icon:{
        padding:24,
        backgroundColor:theme.colors.gray[700],
        borderRadius:22,
    },
  
});