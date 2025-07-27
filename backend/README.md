Nodezinho com Type, utilizei o axios pras chamadas de http pra api

routes: Onde ficam as rotas da aplicação

Controllers: Responsáveis por receber as requisições e direcioná-las.
Services: Onde está a lógica de negócio incluindo integração com APIs externas. 

integração com API do Monday: 
monday.service busca o board no monday; consulta os itens e sprints e trata minimamente os dados. ex: Se a API do Monday retorna 50 campos, aqui ele me retorna só os necessários, como status, due_date....

dashboard.service junta os dados e trata pro frontend ex: agrupa por status (lógica de quantos passaram e falharam); prepara métricas pros graphs como pizza e barra.
a ideia aqui é que não seja necessário fazer calculos no frontend.

monday.routes eu usei pra definir as rotas principais que até agr eu CONSEGUI fazer o monday/boards + que me lista todos eles e o monday/items que busca os itens que eu quero.
isso aqui ta ligado ao monday.controller, que faz ponte com o service


WHAT WE HAVE

conexão com o monday pra dados reais
organizar esses dados e gerar métricas
base de back

What we need
integração com o front hehe.


//PASSOS PRO BACK - ESTUDAR {X}
Routes (monday.routes.ts) → Define os endpoints HTTP. {X}

Controller (monday.controller.ts) → Recebe as requisições, chama o service correto e retorna a resposta. {X}

Services:
monday.service.ts → Faz a integração com a API do Monday. {X}

dashboard.service.ts → Consolida os dados e aplica cálculos para o dashboard. {X}