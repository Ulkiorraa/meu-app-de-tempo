# Previsão do Tempo App

## Descrição
Este é um aplicativo de previsão do tempo desenvolvido em React. Ele permite aos usuários pesquisar a previsão do tempo para diferentes cidades utilizando a API OpenWeatherMap.

## Tecnologias Utilizadas
- React
- Material-UI
- OpenWeatherMap API

## Instalação e Execução
Para instalar e executar o projeto localmente, siga estes passos:
1. Clone o repositório: `git clone [URL do seu repositório]`
2. Instale as dependências: `npm install`
3. Crie um arquivo `config.js` na raiz do projeto seguindo o modelo abaixo:
   ```javascript
   const API_KEY = 'sua_api_key_aqui';
   export default API_KEY;
   ```
   Substitua 'sua_api_key_aqui' com a sua chave da API OpenWeatherMap.

4. Obtenha sua chave da API gratuita no site da OpenWeatherMap em openweathermap.org/api.

## Uso
Digite o nome de uma cidade na barra de pesquisa e pressione 'Buscar' para ver a previsão do tempo atual para essa localidade.

## Contribuições
Contribuições são sempre bem-vindas! Para contribuir:
1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-nova-feature`
3. Faça suas alterações e commit: `git commit -am 'Adiciona alguma feature'`
4. Envie para a branch original: `git push origin minha-nova-feature`
5. Crie uma nova Pull Request.

## Licença
Este projeto está licenciado sob a [Licença MIT](LICENSE). Sinta-se à vontade para usar e modificar o código de acordo com suas necessidades.