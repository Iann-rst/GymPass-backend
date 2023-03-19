# App

GymPass style app.

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostreSQL;
- [x] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);


## Design Patterns & Testes

- [x] Caso de uso de registro;
- [x] Repository Pattern;

- [x] Vitest;
- [x] In-Memory Databases;
- [x] Coverage de testes;
- [x] UI do Vitest;

- [x] Factory Pattern;

- [x] TTD -> Test-driven development;

## Autenticação

- [x] JWT - JSON Web Token;
- [x] Fastify/jwt;

## Testes E2E

- [x] Test Environment do Prisma;
- [x] Teste E2E de rotas de usuário;
- [x] Teste E2E de rotas de academia;
- [x] Teste E2E de rotas de check-ins;

## Refresh Token & RBAC

- [x] Estratégia de refresh de token;
- [x] Implementação do refresh token;
- [x] Autorização por cargos (RBAC);
- [x] Testes de RBAC;

## CI/CD da aplicação

- [x] Executando testes unitários no CI;
- [x] Executando testes E2E no CI;
- [x] GitHub Actions;