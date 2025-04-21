# Postgres DB Docker setup
---
## Start containers
  - docker-compose -p test-postgres up -d
  
## Stop containers and network
  - docker-compose -p test-postgres down


## List and find volumes created for postgres
  - docker volume ls

## Delete attached volumes
  - docker volume rm test-postgres_postgres_data
  - docker volume rm test-postgres_pgadmin_data
