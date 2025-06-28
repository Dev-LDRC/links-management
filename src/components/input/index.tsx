import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View, PressableProps, TextInput, TextInputProps, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
   clean_input: (value: string) => void
}

export function Input({ clean_input, ...rest }: InputProps) {

   function handle_clean_input() {
      clean_input('')
   }

   return (

      <View style={styles.conteiner}>

         <TextInput
            style={styles.inputBox}
            placeholderTextColor={colors.gray[400]}
            {...rest}
         />

         <TouchableOpacity
            style={styles.closeIcon}
            onPress={handle_clean_input}
         >

            <MaterialIcons name="close" size={25} color={colors.gray[400]} />

         </TouchableOpacity>


      </View>


   )
}