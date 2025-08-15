# Create table and setupdata

## Connect to DB
  - If pg-admin or IDE can't connect to postgres instance running in docker.
  - Then instead of localhost use docker instance IP to connect.
    - Run following command in terminal.
      - *docker inspect container-id*

## Create table
  - Capitals table
  ```sql
        CREATE TABLE capitals (
            id SERIAL PRIMARY KEY,
            country CHAR(45),
            capital CHAR(45)
        );
  ```

  - Flags table
  ```sql
        CREATE TABLE flag (
            id SERIAL PRIMARY KEY,
            name CHAR(45) NOT NULL,
            flag TEXT NOT NULL
        );
  ```

## Import CSV data
  - While in this example we are using pg-admin in docker container. The import UI is not listing the client machine files.
  - Hence use other IDEs like DBeaver to connect and 