# 🎮 GamePlay

<p align="center">
  <img src="./src/assets/play.png" alt="GamePlay Logo" width="100" />
</p>

<p align="center">
  Aplicativo mobile desenvolvido em <strong>React Native</strong> com <strong>Expo</strong> para conectar jogadores, organizar grupos e agendar partidas de seus games favoritos com amigos no Discord.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-0.86-blue?style=for-the-badge&logo=react" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-v57-black?style=for-the-badge&logo=expo" alt="Expo" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript" />
</p>

---

## 📱 Telas da Aplicação

O aplicativo foi desenvolvido fielmente com base no protótipo do **Figma (NLW GamePlay)**, contemplando as seguintes telas:

- **🚀 Splash**: Tela inicial de abertura interativa com logotipo estilizado do aplicativo.
- **🔐 Login**: Apresentação da proposta de valor com ilustração gráfica do gamer e botão de acesso via Discord.
- **🏠 Home**:
  - Exibição do perfil do usuário com modal de confirmação para sair do app.
  - Seleção horizontal de categorias de jogos (*Ranqueada*, *Duelo 1x1*, *Diversão*).
  - Listagem de partidas agendadas com dados de data, horário e indicador de anfitrião/visitante.
- **🛡️ Detalhes do Servidor**:
  - Banner de capa do servidor/guilda (*Lendários*).
  - Botão de compartilhamento e navegação de retorno.
  - Lista de jogadores participantes com indicadores de status visual (*Disponível* / *Ocupado*).
  - Botão de ação direta para entrar na partida.
- **📅 Agendar Partida**:
  - Servidor selecionado (*Valorosos*).
  - Seleção dinâmica de categoria com caixinha de marcação visual (*checkbox*).
  - Campos numéricos para dia/mês e horário (hora/minuto).
  - Campo de texto multilinha para descrição da jogatina (limite de 100 caracteres).
  - Tratamento de teclado com `KeyboardAvoidingView` para rolagem fluida em dispositivos móveis.

---

## 🧩 Componentes Reutilizáveis

Para manter o código modular e evitar repetições, foram criados componentes na pasta `src/components`:

- **`ButtonIcon`**: Botão com layout em linha, fundo vermelho estilizado, caixa divisória vertical à esquerda com a logo do Discord e texto centralizado.
- **`CategorySelect`**: Barra horizontal que lista as categorias disponíveis, gerenciando o estado de seleção e exibindo o checkbox opcional.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)**: Biblioteca base para construção da interface declarativa.
- **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento de aplicações móveis multiplataforma (Android e iOS).
- **[Expo](https://expo.dev/)**: Plataforma e conjunto de ferramentas para acelerar o ciclo de desenvolvimento mobile.
- **[StyleSheet](https://reactnative.dev/docs/stylesheet)**: Estilização nativa com nomes simples e intuitivos em inglês, seguindo boas práticas de performance e Clean Code (sem estilos *inline*).

---

## 📂 Estrutura de Pastas

```text
GamePlay/
├── src/
│   ├── assets/          # Imagens, capas, avatares e ícones dos jogos
│   ├── components/      # Componentes reutilizáveis (ButtonIcon, CategorySelect)
│   └── screens/         # Telas da aplicação
│       ├── Splash.jsx
│       ├── Login.jsx
│       ├── Home.jsx
│       ├── DetalhesServidor.jsx
│       └── Agendar.jsx
├── App.js               # Gerenciador de navegação e ponto de entrada
├── app.json             # Configuração do projeto Expo
├── package.json         # Dependências e scripts do projeto
└── README.md
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Ter o **Node.js** instalado em seu computador.
- Ter o aplicativo **Expo Go** instalado no seu celular (Android ou iOS) ou um emulador configurado.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ySamantha/GamePlay.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd GamePlay
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npx expo start
   ```

5. **Execute no dispositivo:**
   - Abra o aplicativo **Expo Go** no celular.
   - Escaneie o **QR Code** exibido no terminal ou no navegador para abrir o app.

---

## 👩‍💻 Autora

Desenvolvido por **Samantha Yumi** 👋  
🔗 [GitHub: @ySamantha](https://github.com/ySamantha)