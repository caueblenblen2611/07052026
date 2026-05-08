#  Sistema de Gestão de Rede de Cinemas

##  Aluno
**Caue B. Blenblen**

---

##  Descrição
Sistema para gerenciamento de uma rede de cinemas, permitindo o controle de filmes em cartaz, sessões e público de forma centralizada.

---

##  Funcionalidades
- Cadastro de cinemas
- Cadastro de filmes
- Cadastro de sessões
- Registro de público por sessão
- Consulta de filmes em cartaz
- Relatórios de público

---

##  Requisitos Funcionais
- Cadastrar cinemas  
- Cadastrar filmes  
- Cadastrar sessões  
- Registrar público por sessão  
- Consultar filmes em cartaz  
- Visualizar total de público por sessão e por filme  

---

##  Regras de Negócio
- Sessões devem respeitar a duração do filme  
- Deve existir intervalo mínimo entre sessões  
- O público não pode exceder a capacidade do cinema  
- Cada sessão está vinculada a um único filme  
- Um cinema pode possuir várias sessões e filmes  

 RF — Requisitos Funcionais
RF01 – Permitir cadastrar cinemas
RF02 – Permitir cadastrar filmes
RF03 – Permitir cadastrar sessões
RF04 – Permitir registrar público em uma sessão
RF05 – Permitir consultar filmes em cartaz
RF06 – Permitir visualizar total de público por sessão
RF07 – Permitir visualizar total de público por filme
RF08 – Permitir listar sessões por cinema
 RN — Regras de Negócio
RN01 – A duração da sessão deve respeitar o tempo do filme
RN02 – Deve existir intervalo mínimo entre sessões
RN03 – O público registrado não pode exceder a capacidade do cinema
RN04 – Cada sessão pertence a um único filme
RN05 – Cada sessão pertence a um único cinema
RN06 – Um cinema pode possuir várias sessões simultâneas
RN07 – Não é permitido registrar público em sessão inexistente
RN08 – O público total de uma sessão deve ser atualizado a cada registro
---

##  Diagrama de Casos de Uso

<img width="387" height="561" alt="image" src="https://github.com/user-attachments/assets/3054a2b9-db30-4123-8c2c-190aad286d41" />

##  Diagrama de Classes 

<img width="200" height="310" alt="image" src="https://github.com/user-attachments/assets/4ea60801-257d-4d99-a675-c5d3899b81d4" />

## Diagrama de Atividade

<img width="237" height="367" alt="image" src="https://github.com/user-attachments/assets/b872e4ff-6144-4ab6-9e16-eaa841243b89" />

## Diagrama de Sequência

<img width="636" height="427" alt="image" src="https://github.com/user-attachments/assets/8548b839-c571-4ee7-8cf5-0f880fa0e7ce" />

## Diagrama de Atividade — Registrar Público

<img width="293" height="422" alt="image" src="https://github.com/user-attachments/assets/6f938fb2-1d51-4009-b6d4-f12b28a932ae" />

## Diagrama de Atividade — Cadastrar Sessão

<img width="245" height="422" alt="image" src="https://github.com/user-attachments/assets/51784c13-4ff5-4dcf-95f5-a523b2efb2a9" />




