# 🗺️ Coordenadas Terminus - Easter Egg Zombies (Call of Duty: BO6)

## 📖 Resumo
Este repositório foi criado para facilitar a resolução do enigma de coordenadas no Easter Egg do mapa **Terminus** no modo Zombies do Call of Duty: Black Ops 6. Ao invés de calcular manualmente as coordenadas, você pode utilizar este script para obter automaticamente a posição correta.

## ⚙️ Como Funciona
O código utiliza uma função para calcular as coordenadas baseando-se em valores iniciais que você insere. É uma solução para não gastar 5000 pontos durante a partida e não precisar calcular manualmente.

## 📋 Requisitos
Para rodar o código, você precisa de:
- **Node.js** (versão 12 ou superior)
- Git (Opcional, mas recomendado)
- Familiaridade com o terminal/console para rodar o script

## 📥 Instalação
Você pode baixar o projeto de duas maneiras:

### 1. 🔗 Clonando o repositório via Git (Recomendado)
1. Clone o repositório para sua máquina:
    ```bash
    git clone hhttps://github.com/DanielMarcelino65/TerminusCoordinatesStepSolver.git
    ```
2. Entre na pasta do projeto:
    ```bash
    cd TerminusCoordinatesStepSolver
    ```
3. Instale as dependências (Necessário antes da primeira execução):
    ```bash
    npm install
    ```

### 2. 📦 Baixando o ZIP do repositório
1. Acesse a página do repositório no GitHub e clique em "Code" > "Download ZIP".
2. Extraia o conteúdo do ZIP em uma pasta de sua escolha.
3. Abra o terminal, navegue até a pasta extraída e instale as dependências.

## 🚀 Uso
1. No arquivo principal, você pode definir as coordenadas iniciais do enigma:

    ```javascript
    import { Coordinates, getCoordinates } from './functions';

    const nonCalculatedCoordinates: Coordinates = {
      x: 20,
      y: 21,
      z: 11,
    };

    const calculatedCoordinates = getCoordinates(nonCalculatedCoordinates);
    console.log(calculatedCoordinates);
    ```

2. Em seguida, execute o código no terminal:
    ```bash
    npm run start
    ```
   As coordenadas calculadas serão exibidas no console, indicando os valores corretos para prosseguir com o Easter Egg.

## 🤝 Contribuição
Sinta-se à vontade para abrir issues ou contribuir com sugestões e melhorias. Este repositório foi feito com o intuito de facilitar a comunidade!

## 📜 Licença
Este projeto é licenciado sob a MIT License. Para mais detalhes, veja o arquivo [LICENSE](LICENSE).
