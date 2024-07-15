## Exibe dados da tabela TACO

A tabela TACO (Tabela Brasileira de Composição de Alimentos) contém informações precisas e detalhadas sobre a composição nutricional de uma ampla variedade de alimentos, incluindo frutas, vegetais, carnes, cereais, leguminosas, produtos industrializados, entre outros. Esses dados incluem valores de macronutrientes (proteínas, carboidratos, lipídios), micronutrientes (vitaminas e minerais), e outros componentes como fibras alimentares, colesterol e energia (calorias).

Essa aplicação faz a conexão com o servidor disponível em https://github.com/arleysouza/taco-backend. Esse servidor é consumido para exibir a lista de alimentos da tabela TACO e exibir a lista de nutrientes do alimento selecionado pelo usuário.

A composição de nutrientes dos alimentos está para 100 g de parte comestível (pág. 26 - https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf).

### Instruções de uso
Utilize os comandos a seguir para clonar o projeto e instalar as dependências.
```
git clone https://github.com/arleysouza/taco-frontend.git server
cd server
npm i
```
Antes de subir a aplicação é necessário subir o aplicação servidora ( https://github.com/arleysouza/taco-backend).

Na variável `REACT_APP_SERVER_URL` do arquivo `.env` está a URL de conexão com o servidor.


