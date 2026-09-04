# Requisitos — PreventCar

Este documento consolida a Engenharia de Requisitos do projeto: requisitos funcionais, requisitos não funcionais e regras de negócio, levantados por meio de entrevistas semiestruturadas e sessões de brainstorming com os stakeholders.

## Requisitos Funcionais

| Código | Nome | Descrição |
|---|---|---|
| RF01 | Cadastro de usuário | O sistema deve permitir o cadastro de usuários. |
| RF02 | Cadastro de itens | O sistema deve permitir o cadastro de itens. |
| RF03 | Informar tempo de uso do item | O sistema deve permitir que o usuário informe o tempo de uso de um item. |
| RF04 | Alertas | O sistema deve permitir que alertas automáticos sejam enviados antes, durante e após o prazo. |
| RF05 | Informar durabilidade de peças | O sistema deve extrair informações sobre o tempo de durabilidade de peças automotivas. |
| RF06 | Históricos de manutenções | O sistema deve permitir que o usuário visualize os históricos de manutenções. |
| RF07 | Cadastro de veículos | O sistema deve permitir o cadastro de veículos. |
| RF08 | Excluir veículos | O sistema deve permitir que o usuário inative veículos. |
| RF09 | Excluir itens | O sistema deve permitir que o usuário inative itens. |
| RF10 | Cadastro de procedimentos | O sistema deve permitir que o usuário cadastre procedimentos pendentes. |
| RF11 | Históricos de problemas | O sistema deve permitir que o usuário visualize os históricos de problemas com o veículo. |

## Requisitos Não Funcionais

| Código | Nome | Descrição |
|---|---|---|
| RNF01 | Segurança | Criptografia de senhas e dados dos usuários/veículos. |
| RNF02 | Usabilidade | O sistema deve funcionar bem em celulares (ideal para mecânicos/motoristas). |
| RNF03 | Desempenho | Consultas aos históricos (RF06/RF11) devem carregar em menos de 2 segundos. |
| RNF04 | Disponibilidade | O sistema deve estar disponível 99% do tempo para consulta de alertas (RF04). |
| RNF05 | Confiabilidade | Backup diário para garantir que históricos de manutenção nunca sejam perdidos. |
| RNF06 | Integridade | As informações de durabilidade (RF05) devem ser atualizadas via fontes confiáveis. |

## Regras de Negócio

O modelo de negócio do PreventCar é híbrido: assinatura recorrente para motoristas e frotas, combinada com comissão sobre agendamentos concluídos em oficinas parceiras. As regras abaixo traduzem esse modelo em restrições que o sistema deve respeitar.

- **RN01** — O sistema deve oferecer três níveis de plano: Free (1 veículo, alertas básicos), Premium (veículos ilimitados, alertas preditivos, relatórios) e Frota (painel multiusuário, gestão por modelo de veículo).
- **RN02** — Usuários do plano Free têm acesso limitado a 1 veículo cadastrado; o cadastro de veículos adicionais exige upgrade de plano.
- **RN03** — Ao emitir um alerta de manutenção (RF04), o sistema pode sugerir uma oficina parceira previamente cadastrada e avaliada.
- **RN04** — Quando um agendamento sugerido é confirmado e o serviço concluído dentro da plataforma, deve ser registrada uma comissão percentual (8% a 12%, sujeita a validação comercial) sobre o valor do serviço para a PreventCar.
- **RN05** — Apenas oficinas parceiras cadastradas e aprovadas podem receber direcionamentos de agendamento pelo sistema.
- **RN06** — Dados agregados e anonimizados de durabilidade de peças podem ser disponibilizados para licenciamento a terceiros (ex.: seguradoras), desde que não identifiquem usuários individuais.
- **RN07** — Usuários do plano Premium com programa de indicação ativo têm direito a benefício definido pela área comercial (ex.: desconto ou período gratuito).

## Escopo inicial (referência)

Incluído no escopo do projeto:

- Cadastro de usuários, veículos e itens/peças a serem monitorados.
- Registro do tempo de uso dos itens cadastrados e cálculo da durabilidade estimada.
- Emissão de alertas automáticos e de confirmação relacionados às manutenções pendentes.
- Histórico de manutenções e de problemas de cada veículo (registro cronológico, itens próximos do limite de durabilidade, sugestão de oficinas parceiras).
- Painel administrativo para gerenciamento de usuários, procedimentos e durabilidade de peças.

## Pendências

- Matriz de rastreabilidade entre requisitos funcionais e regras de negócio.
- Diagrama de casos de uso de análise.
- Modelo de domínio (diagrama de classes) e modelo ER.
- Diagramas de atividades, sequência e máquina de estados.

Ver especificação detalhada dos casos de uso em [CASOS_DE_USO.md](docs/CASOS_DE_USO.md).
