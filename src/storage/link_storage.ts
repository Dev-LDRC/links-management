import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "links-storage"

export interface LinkStorage {
   id: string
   name: string
   url: string
   category: string
}

async function get(): Promise<LinkStorage[]> {

   const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY)
   const res = storage ? JSON.parse(storage) : []

   return res

}

async function save(new_link: LinkStorage) {

   try {

      const storage = await get()
      const updated_storage = JSON.stringify([...storage, new_link])

      await AsyncStorage.setItem(LINKS_STORAGE_KEY, updated_storage)


   } catch (err) {

      throw err

   }

}

// Add a function for edit a link
async function edit(linkToUpdate: LinkStorage) {
   try {
      const storage = await get();
      const updatedStorage = storage.map(link =>
         link.id === linkToUpdate.id ? linkToUpdate : link
      );

      await AsyncStorage.setItem(
         LINKS_STORAGE_KEY,
         JSON.stringify(updatedStorage)
      );
   } catch (err) {
      throw err;
   }
}

async function remove(id: string) {

   const storage = await get()

   const storage_update_without_the_chosen_for_delete = storage.filter((link) => link.id !== id)

   await AsyncStorage.setItem(
      LINKS_STORAGE_KEY,
      JSON.stringify(storage_update_without_the_chosen_for_delete)
   )

}

export const link_storage = { get, save, edit, remove }