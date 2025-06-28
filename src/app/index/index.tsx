import { View, Image, TouchableOpacity, FlatList, Modal, Text, Alert, Linking } from "react-native"

import { categories } from "@/utils/categories"

import { styles } from "./styles"
import { colors } from "@/styles/colors"

import { link_storage, LinkStorage } from "@/storage/link_storage"

import { Categories } from "@/components/categories"
import { Link } from "@/components/link"
import { Option } from "@/components/option"


import { MaterialIcons } from "@expo/vector-icons"
import { router, useFocusEffect } from "expo-router"

import { useCallback, useState } from "react"

export default function Index() {

   const [show_modal, set_show_modal] = useState(false)
   const [category, set_category] = useState(categories[0].name)
   const [links, set_links] = useState<LinkStorage[]>([])
   const [link, set_link] = useState<LinkStorage>({} as LinkStorage)

   function handle_onDetails(selected: LinkStorage) {

      set_show_modal(!show_modal)

      set_link(selected)

   }

   function handle_remove_link(id_link_selected: string) {

      try {

         Alert.alert(
            "Excluir",
            "Deseja mesmo deletar este link?",
            [
               {
                  text: "Sim",
                  onPress: async () => {
                     await link_storage.remove(id_link_selected)
                     get_links()
                     set_show_modal(!show_modal)
                  },
                  style: "destructive"
               },
               {
                  text: "Não",
                  style: "cancel"
               },
            ]
         )

      } catch (err) {

         Alert.alert('Erro', 'Não foi possivel deletar o link')
         console.log(err)


      }

   }

   async function handle_open_link() {

      try {

         await Linking.openURL(link.url)

         set_show_modal(!show_modal)

      } catch (err) {

         Alert.alert('Erro', 'Não foi possivel abrir o link')
         console.log(err)


      }

   }

   async function get_links() {

      try {

         const res = await link_storage.get()

         const filter_links = res.filter((link) => link.category === category)

         set_links(filter_links)

      } catch (err) {

         Alert.alert('Erro', 'Não foi possivel listar os links')
         console.log(err)

      }
   }

   useFocusEffect(
      useCallback(() => {

         get_links()

      }, [category])
   )

   return (

      <View style={styles.conteiner}>

         <View style={styles.header}>

            <Image source={require("@/assets/logo.png")} style={styles.logo} />

            <TouchableOpacity onPress={() => router.navigate('/add')}>

               <MaterialIcons name="add" size={32} color={colors.green[300]} />

            </TouchableOpacity>

         </View>

         <Categories category_selected={category} change_category={set_category} />

         <FlatList
            data={links}
            keyExtractor={(index) => index.id}
            renderItem={({ item }) => (
               <Link
                  name={item.name}
                  url={item.url}
                  onDetails={() => handle_onDetails(item)}
               />
            )}
            style={styles.links}
            contentContainerStyle={styles.linksContent}
            showsVerticalScrollIndicator={false}
         />

         <Modal transparent animationType="fade" visible={show_modal}>

            <View style={styles.modal}>

               <View style={styles.modalContent}>

                  <View style={styles.modalHeader}>

                     <Text style={styles.modalCategory}>
                        {link.category}
                     </Text>

                     <TouchableOpacity onPress={() => set_show_modal(!show_modal)}>

                        <MaterialIcons name="close" size={25} color={colors.gray[400]} />

                     </TouchableOpacity>

                  </View>

                  <Text style={styles.modalLinkName}>
                     {link.name}
                  </Text>

                  <Text style={styles.modalUrl}>
                     {link.url}
                  </Text>

                  <View style={styles.modalFooter}>

                     <Option name="Excluir" onPress={() => handle_remove_link(link.id)} icon={"delete"} variant="secondary" />
                     <Option name="Abrir" onPress={handle_open_link} icon={"language"} />

                  </View>

               </View>

            </View>

         </Modal>

      </View>

   )
} 