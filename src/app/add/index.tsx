import { View, TouchableOpacity, Text, Alert } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { router } from "expo-router"
import { Categories } from "@/components/categories"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { useState } from "react"
import { link_storage } from "@/storage/link_storage"

export default function Add() {

   const [category, set_category] = useState("")
   const [name, set_name] = useState("")
   const [url, set_url] = useState("")

   async function handle_add() {

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

         await link_storage.save({
            id: new Date().getTime().toString(),
            category, 
            name,
            url
         })

         
         Alert.alert(
            "FEITO",
            "Novo link adicionado com sucesso!",
            [
               {
                  text: "Ok",
                  onPress: () => router.back()
               }
            ]
         )

      } catch (err) {

         Alert.alert("Erro", "Não foi possivel salvar o link")

         console.log(err)

      }

   }

   return (

      <View style={styles.conteiner}>

         <View style={styles.header}>

            <TouchableOpacity onPress={() => router.back()}>

               <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />

            </TouchableOpacity>

            <Text style={styles.title}>
               Novo
            </Text>

         </View>

         <Text style={styles.label}>
            Selecione uma categoria:
         </Text>

         <Categories category_selected={category} change_category={set_category} />

         <View style={styles.form}>

            <Input placeholder="name" clean_input={set_name} value={name} onChangeText={set_name} autoCorrect={false} />
            <Input placeholder="url" clean_input={set_url} value={url} onChangeText={set_url} autoCorrect={false} />
            <Button title="Adicionar" onPress={handle_add} />

         </View>

      </View>

   )
} 