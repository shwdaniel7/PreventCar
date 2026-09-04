# Casos de Uso — PreventCar

## Atores

**Usuário** — Pessoa responsável por utilizar o sistema para gerenciamento e acompanhamento das informações relacionadas aos veículos e às manutenções. Possui acesso às funcionalidades básicas do sistema: cadastro, autenticação e consulta de informações registradas.

**Administrador** — Usuário com privilégios administrativos. Além de todas as funcionalidades do ator Usuário, é responsável pelo gerenciamento das informações e procedimentos administrativos da aplicação.

**Sistema de Notificação** — Serviço responsável pelo envio e gerenciamento das notificações automáticas do sistema. Monitora a durabilidade das peças e envia alertas aos usuários.

## Especificação dos casos de uso

### UC01 — Realizar login
- **Ator principal:** Usuário
- **Atores secundários:** Administrador
- **Resumo:** Etapas percorridas por um usuário para realizar login no sistema.
- **Pré-condições:** Ter uma conta.
- **Pós-condições:** É necessário realizar o cadastro de um veículo.
- **Fluxo:**
  1. Ator: Realizar login.
  2. Sistema: Verificar login.
  3. Sistema: Autenticar usuário.

### UC02 — Realizar cadastro
- **Ator principal:** Usuário
- **Atores secundários:** Administrador
- **Resumo:** Etapas percorridas por um usuário para cadastrar uma nova conta.
- **Pré-condições:** Não ter uma conta.
- **Pós-condições:** É necessário realizar o cadastro de um veículo.
- **Fluxo:**
  1. Ator: Cadastrar conta.
  2. Sistema: Verificar login caso exista.
  3. Sistema: Registrar conta.

### UC03 — Cadastrar veículo
- **Ator principal:** Usuário
- **Atores secundários:** Administrador
- **Resumo:** Etapas percorridas por um usuário para cadastrar um novo veículo.
- **Pré-condições:** Ter uma conta.
- **Pós-condições:** Gerenciar os veículos cadastrados.
- **Fluxo:**
  1. Ator: Cadastrar veículo.
  2. Sistema: Verificar veículo caso exista.
  3. Sistema: Registrar veículo.

### UC04 — Inativar veículo
- **Ator principal:** Usuário
- **Atores secundários:** Administrador
- **Resumo:** Etapas percorridas por um usuário para inativar um veículo.
- **Pré-condições:** Ter um veículo cadastrado.
- **Pós-condições:** Gerenciar os veículos cadastrados.
- **Fluxo:**
  1. Ator: Inativar o veículo.
  2. Sistema: Verificar se o veículo já está inativado.
  3. Sistema: Inativa o veículo para o usuário.

### UC05 — Verificar tempo de uso do item
- **Ator principal:** Usuário
- **Atores secundários:** Administrador
- **Resumo:** Etapas percorridas por um usuário para verificar o tempo de uso de um item.
- **Pré-condições:** Ter um item cadastrado.
- **Pós-condições:** Verificar o tempo de uso dos itens cadastrados.
- **Fluxo:**
  1. Ator: Verifica os itens.
  2. Sistema: Consulta o tempo de uso dos itens.
  3. Sistema: Retorna ao usuário.

### UC06 — Visualizar o histórico de manutenções
- **Ator principal:** Usuário
- **Atores secundários:** Administrador
- **Resumo:** Etapas percorridas por um usuário para visualizar o histórico de manutenções de seus veículos.
- **Pré-condições:** Ter um veículo cadastrado.
- **Pós-condições:** Visualizar o histórico de manutenções.
- **Fluxo:**
  1. Ator: Visualiza o histórico.
  2. Sistema: Consulta o histórico de manutenção de um veículo.
  3. Sistema: Retorna ao usuário.

### UC07 — Visualizar o histórico de problemas
- **Ator principal:** Usuário
- **Atores secundários:** Administrador
- **Resumo:** Etapas percorridas por um usuário para visualizar o histórico de problemas de seus veículos.
- **Pré-condições:** Ter um veículo cadastrado.
- **Pós-condições:** Visualizar o histórico de manutenções.
- **Fluxo:**
  1. Ator: Visualiza o histórico.
  2. Sistema: Consulta o histórico de problemas de um veículo.
  3. Sistema: Retorna ao usuário.

### UC08 — Realizar login (Administrador)
- **Ator principal:** Administrador
- **Atores secundários:** Usuário
- **Resumo:** Etapas percorridas por um administrador para realizar login no sistema.
- **Pré-condições:** Ter uma conta.
- **Pós-condições:** Ter o acesso de administrador.
- **Fluxo:**
  1. Ator: Realiza login.
  2. Sistema: Verificar login.
  3. Sistema: Autenticar usuário.

### UC09 — Gerenciar usuários
- **Ator principal:** Administrador
- **Atores secundários:** Usuário
- **Resumo:** Etapas percorridas por um administrador para gerenciar usuários do sistema.
- **Pré-condições:** Ter uma conta.
- **Pós-condições:** Ter o acesso de administrador.
- **Fluxo:**
  1. Ator: Gerencia usuários.
  2. Sistema: Verificar acesso de administrador.
  3. Sistema: Permite o gerenciamento.

### UC10 — Gerenciar procedimentos
- **Ator principal:** Administrador
- **Atores secundários:** Usuário
- **Resumo:** Etapas percorridas por um administrador para gerenciar procedimentos do sistema.
- **Pré-condições:** Ter uma conta.
- **Pós-condições:** Ter o acesso de administrador.
- **Fluxo:**
  1. Ator: Gerencia procedimentos.
  2. Sistema: Verificar acesso de administrador.
  3. Sistema: Permite o gerenciamento.

### UC11 — Gerenciar durabilidade de peças
- **Ator principal:** Sistema de Notificação
- **Atores secundários:** Usuário
- **Resumo:** Etapas percorridas pelo sistema de notificação para gerenciar a durabilidade de peças.
- **Pré-condições:** Ter peças cadastradas.
- **Pós-condições:** Verificar a durabilidade das peças.
- **Fluxo:**
  1. Ator: Gerencia durabilidade das peças.
  2. Sistema: Consultar a durabilidade.
  3. Sistema: Retorna ao usuário e sistema.

### UC12 — Emitir alertas automáticos
- **Ator principal:** Sistema de Notificação
- **Atores secundários:** Usuário
- **Resumo:** Etapas percorridas pelo sistema de notificação para emitir alertas automáticos.
- **Pré-condições:** Ter veículos cadastrados por usuários.
- **Pós-condições:** Notificar em caso de atraso.
- **Fluxo:**
  1. Ator: Notifica pendências do usuário.
  2. Sistema: Verifica pendências.
  3. Sistema: Notifica ao usuário e sistema.

### UC13 — Emitir alertas de confirmação
- **Ator principal:** Sistema de Notificação
- **Atores secundários:** Usuário
- **Resumo:** Etapas percorridas pelo sistema de notificação para emitir alertas de confirmação.
- **Pré-condições:** Realizar ações que exijam confirmação.
- **Pós-condições:** Notificar se a ação realmente deve ser realizada.
- **Fluxo:**
  1. Ator: Pede confirmação ao usuário.
  2. Sistema: Verifica a confirmação do usuário.
  3. Sistema: Realiza ação.

## Pendências

- Diagrama de casos de uso do sistema (representação gráfica).
- Modelo de domínio (diagrama de classes) e modelo ER.
- Diagramas de atividades, sequência e máquina de estados.
