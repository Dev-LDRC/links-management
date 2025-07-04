# Links Management

Um projeto simples e eficiente para gerenciar e armazenar seus links externos em um único lugar. Desenvolvido com React Native e Expo, este aplicativo permite que você adicione, salve e acesse seus links importantes de forma rápida e organizada.

## 🎓 Sobre o Projeto
Este projeto foi desenvolvido como parte do curso introdutório **"React Native com Expo"** da [Rocketseat](https://www.rocketseat.com.br/). O objetivo foi aplicar os conceitos fundamentais de desenvolvimento mobile com React Native e Expo, criando uma aplicação funcional do zero com algumas modificações e funcionalidades extras que adicionei.

Você pode encontrar o curso [aqui](https://app.rocketseat.com.br/journey/expo-com-react-native-curso-introdutorio/).

## ✨ Funcionalidades

  * **Adicionar Links:** Crie e adicione novos links com um título descritivo.
  * **Armazenamento Local:** Seus links são salvos de forma segura no dispositivo para acesso offline.
  * **Lista de Links:** Visualize todos os seus links salvos em uma lista clara e organizada.
  * **Acesso Rápido:** Abra os links diretamente no navegador do seu dispositivo com um único toque.
  * **Multiplataforma:** Execute o aplicativo em dispositivos Android, iOS e na Web, graças ao Expo.

## 📲 APK para Android

Se preferir, você pode instalar o aplicativo diretamente no seu dispositivo Android baixando o arquivo APK.

  * **[Baixe a última versão do APK aqui](https://drive.usercontent.google.com/download?id=1lmTGEc-FTGShAOqG5Q2ZKb2zJ1ninfMi&export=download&confirm=t&uuid=4526e220-4291-4e8b-be83-896597a51248)**

**OBS:**
  - Você pode precisar habilitar a opção "Instalar de fontes desconhecidas" nas configurações do seu Android para instalar o arquivo.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias modernas para o desenvolvimento de aplicativos móveis e web:

  * **Core:**
      * [React 19.0.0](https://react.dev/)
      * [React Native 0.79.2](https://reactnative.dev/)
      * [Expo \~53.0.9](https://expo.dev/)
  * **Navegação:**
      * [Expo Router \~5.0.6](https://docs.expo.dev/router/introduction/)
      * [React Navigation ^7.1.6](https://reactnavigation.org/)
  * **UI & UX:**
      * [Expo Vector Icons ^14.1.0](https://docs.expo.dev/guides/icons/)
      * [React Native Reanimated \~3.17.4](https://docs.swmansion.com/react-native-reanimated/)
  * **Armazenamento:**
      * [Async Storage 2.1.2](https://react-native-async-storage.github.io/async-storage/)
  * **Desenvolvimento e Testes:**
      * [TypeScript \~5.8.3](https://www.typescriptlang.org/)
      * [Jest ^29.2.1](https://jestjs.io/)
      * [Jest Expo \~53.0.5](https://docs.expo.dev/develop/unit-testing/)

## 📦 Como rodar localmente

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

  * [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
  * [Yarn](https://yarnpkg.com/) ou npm (que vem com o Node.js)
  * [Expo Go app](https://expo.dev/go) no seu dispositivo móvel (Android ou iOS) para testar

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Dev-LDRC/links-management.git
    cd links-management
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

    ou, se você usa Yarn:

    ```bash
    yarn install
    ```

### Executando o Projeto

Após a instalação, você pode usar os seguintes scripts para iniciar o aplicativo:

  * **Para iniciar o servidor de desenvolvimento:**

    ```bash
    npm start
    ```

    Isso iniciará o Metro Bundler e exibirá um QR Code. Escaneie o QR Code com o aplicativo Expo Go no seu celular.

  * **Para iniciar no Android:**

    ```bash
    npm run android
    ```

  * **Para iniciar no iOS (apenas em macOS):**

    ```bash
    npm run ios
    ```

  * **Para iniciar no navegador web:**

    ```bash
    npm run web
    ```