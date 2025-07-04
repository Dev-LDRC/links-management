import { View, TouchableOpacity, Text, Alert } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { router, useFocusEffect, useLocalSearchParams } from "expo-router"
import { Categories } from "@/components/categories"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { useCallback, useState } from "react"
import { link_storage } from "@/storage/link_storage"
import validator from 'validator';

export default function Edit() {

   const { id_link } = useLocalSearchParams();

   const [category, set_category] = useState("")
   const [name, set_name] = useState("")
   const [url, set_url] = useState("")

   async function get_link() {

      try {

         const res = await link_storage.get()

         const link_request = res.filter((link) => link.id === id_link)[0]

         // console.log(link_request)
         
         set_category(link_request.category)
         set_name(link_request.name)
         set_url(link_request.url)

      } catch (err) {

         Alert.alert('Erro', 'Não foi possivel pegar as informações do link')
         console.log(err)

      }
   }

   async function handle_edit() {

      try {

         if (!category) {
            return Alert.alert('Categoria', "Selecione uma categoria")
         }

         if (!name.trim()) {
            return Alert.alert('Nome', "Digite um nome")
         }

         if (!url.trim()) {
            return Alert.alert('Url', "Digite uma url")
         }

         if (!validator.isURL(url.trim())) {
            return Alert.alert('Url', "O formato da url é inválido.")
         }

         await link_storage.edit({
            id: id_link as string,
            category,
            name,
            url
         })


         Alert.alert(
            "FEITO",
            "Link editado com sucesso!",
            [
               {
                  text: "Ok",
                  onPress: () => router.back()
               }
            ]
         )

      } catch (err) {

         Alert.alert("Erro", "Não foi possivel editar o link")

         console.log(err)

      }

   }

   useFocusEffect(
      useCallback(() => {

         get_link();

      }, [])
   )

   return (

      <View style={styles.conteiner}>

         <View style={styles.header}>

            <TouchableOpacity onPress={() => router.back()}>

               <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />

            </TouchableOpacity>

            <Text style={styles.title}>
               Editando
            </Text>

         </View>

         <Text style={styles.label}>
            Selecione uma categoria:
         </Text>

         <Categories category_selected={category} change_category={set_category} />

         <View style={styles.form}>

            <Input placeholder="nome" clean_input={set_name} value={name} onChangeText={set_name} autoCorrect={false} />
            <Input placeholder="url" clean_input={set_url} value={url} onChangeText={set_url} autoCorrect={false} />
            <Button title="Editar" onPress={handle_edit} />

         </View>

      </View>

   )
} 