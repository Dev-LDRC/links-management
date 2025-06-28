import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View, PressableProps } from "react-native";
import { styles } from "./styles";

interface CategorieProps extends PressableProps {
   category_name: string;
   isSelected: boolean;
   icon_name: keyof typeof MaterialIcons.glyphMap;
}

export function Category({ category_name, icon_name, isSelected, ...rest }: CategorieProps) {

   const color = isSelected === true ? colors.green[300] : colors.gray[400]

   return (

      <Pressable style={styles.conteiner} {...rest}>

         <MaterialIcons name={icon_name} size={16} color={color} />

         <Text style={[styles.name, { color }]}>{category_name}</Text>

      </Pressable>

   )
}