# Full Cycle 3.0
## Desafio Docker - Nginx/Node

Esse desafio consiste em aplicar os conhecimentos de docker utilizando nginx como proxy reverso. Ao executar:
```
docker compose up -d
```
3 containers serão criados:
- nginx
- node
- db

O container nginx será responsável por fazer o proxy reverso para o container node, que por sua vez irá se comunicar com o container db.

Após a execução do comando, acesse o endereço http://localhost:8080 e veja o resultado.