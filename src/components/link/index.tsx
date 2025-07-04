import { MaterialIcons } from "@expo/vector-icons"
import { View, TouchableOpacity, Text, ScrollView } from "react-native"
import { styles } from "./styles";
import { colors } from "@/styles/colors";

interface LinkProps {
   name: string;
   url: string;
   onDetails: () => void
}

export function Link({ name, url, onDetails }: LinkProps) {

   return (

      <View style={styles.conteiner}>

         <View style={styles.details}>

            <ScrollView horizontal={true}>

               <Text style={styles.name} numberOfLines={1}>
                  {name}
               </Text>

            </ScrollView>

            <ScrollView horizontal={true}>

               <Text style={styles.url} numberOfLines={1}>
                  {url}
               </Text>

            </ScrollView>

         </View>

         <TouchableOpacity onPress={onDetails}>

            <MaterialIcons name="more-horiz" size={28} color={colors.gray[400]} />

         </TouchableOpacity>

      </View>

   )
}