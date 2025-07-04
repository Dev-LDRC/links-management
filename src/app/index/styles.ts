import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   conteiner: {
      flex: 1,
      paddingTop: 62
      // justifyContent: "center",
      // alignItems: "center"
   },
   app_name: {
      color: colors.green[300],
      fontSize: 20
   },
   header: {
      paddingHorizontal: 24,
      width: "100%",
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 32
   },
   logo: {
      height: 32,
      width: 38
   },
   links: {
      borderTopWidth: 1,
      borderTopColor: colors.gray[600]
   },
   linksContent: {
      gap: 20,
      padding: 24,
      paddingBottom: 100
   },
   modal: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: "#000000BF",
   },
   modalContent: {
      backgroundColor: colors.gray[900],
      borderTopWidth: 1,
      borderTopColor: colors.gray[800],
      paddingBottom: 32,
      padding: 24
   },
   modalHeader: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 32
   },
   modalCategory: {
      flex: 1,
      fontSize: 16,
      fontWeight: '500',
      color: colors.gray[400]
   },
   modalLinkName: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.gray[600]
   },
   modalUrl: {
      fontSize: 14,
      color: colors.gray[400]
   },
   modalConteinerInfosLink: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 16
   },
   modalScrollViewForBigTitlesOrLinks: {
      maxHeight: 200,
      borderWidth: 3,
      borderRadius: 8,
      padding: 10,
      borderColor: colors.green[300],
   },
   modalFooter: {
      flexDirection: 'row',
      marginTop: 32,
      width: '100%',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderTopColor: colors.gray[600],
      paddingVertical: 14
   },
})