## Gestão de nutrientes de alimentos

Essa aplicação React TS acessa o servidor disponível em https://github.com/arleysouza/server-nutrient. A aplicação permite ao usuário acessar o cadastro de nutrientes dos alimentos e fazer registros diários dos alimentos consumidos.
Os alimentos são divididos em:
- Alimentos disponíveis na tabela TACO (Tabela Brasileira de Composição de Alimentos);
- Alimentos que o usuário cadastra a tabela de nutrientes.

### Instruções de uso
Utilize os comandos a seguir para clonar o projeto e instalar as dependências.
```
git clone https://github.com/arleysouza/front-nutrient.git front
cd front
npm i
```
Antes de subir a aplicação é necessário subir o aplicação servidora https://github.com/arleysouza/server-nutrient.

Na variável `REACT_APP_SERVER_URL` do arquivo `.env` está a URL de conexão com o servidor.

### Estrutura da aplicação
A aplicação possui as seguintes pastas:
- assets: logo da Fatec;
- components: componentes React estilizados usando _Styled components_. Esses componentes são utilizados na composição das páginas;
- contexts: definição dos contextos. Os contextos mantém as propriedades de estado (_useState_) e as operações que são propagadas para os componentes aninhados no componente. Os serviços são consumidos exclusivamente pelos contextos;
- hooks: utilizado para propagar as operações e propriedades dos contextos;
- pages: possui os componentes que são roteados para páginas. As páginas utilizam os componentes da pasta _components_;
- routes: arquivos de definição de rotas. Existem rotas para usuários "não logados", "usuários logados com o perfil de usuário" e "usuários logados com o perfil de administrador". Cada rota endereça um componente da pasta _pages_. Desta forma, o usuário só poderá acessar uma página que possui rota para o seu perfil de acesso;
- services: possui as classes responsáveis pela conexão com o servidor. Todas as conexões com o servidor são mantidas sometne nesta pasta e todos os métodos dessa pasta são consumidos exclusivamente pelos contextos da pasta _contexts_;
- types: definição de tipos. Aqui todos os tipos foram definidos usando interfaces;
- utils: possui funções de uso geral, assim como formatação de datas.




