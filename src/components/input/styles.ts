import { colors } from "@/styles/colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
   conteiner: {
      height: 65,
      width: "100%",
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.gray[900],
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.gray[800],
      padding: 10,
      fontSize: 16
   },
   inputBox: {
      width: "90%",
      color: colors.gray[100],
      height: 'auto'
   },
   closeIcon: {
      marginLeft: 'auto'
   },
})