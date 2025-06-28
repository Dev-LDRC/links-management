import { categories } from "@/utils/categories"
import { FlatList } from "react-native"
import { Category } from "../category"
import { styles } from "./styles"

interface CategoriesProps {
   category_selected: string;
   change_category: (category: string) => void
}

export function Categories({ category_selected, change_category }: CategoriesProps) {

   return (

      <FlatList
         data={categories}
         keyExtractor={(categorie) => categorie.id}
         renderItem={({ item }) => (
            <Category
               category_name={item.name}
               icon_name={item.icon}
               isSelected={category_selected === item.name}
               onPress={() => change_category(item.name)}
            />
         )}
         style={styles.conteiner}
         contentContainerStyle={styles.content}
         horizontal
         // showsHorizontalScrollIndicator
      />

   )
}