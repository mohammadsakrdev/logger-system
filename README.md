# logger-system
# Logging System  One of the most important parts of any system is **logs**. It helps to detect issues, bugs or crashes. Also, it helps to explain the system performance and the expected changes.  #### THE CHALLENGE  simple logging system which should have an API endpoints to send logs and dashboard to view those logs. 
> The log object should contain a log title, description, status code, log path and created at date. 
###### PART 1: API Endpoints  
> 3 API endpoints to create, view, and list logs.  
1. [POST] `api/log` to create log. 
2. [GET] `api/log` to view logs. 
3. [GET] `api/log/{id}` to get log details.  

###### PART 2: Simple Admin Dashboard  
> a simple admin dashboard to view logs in a table view.  
1. paginated and viewed in a descending way. 
2. Searchable by title, description, and status code.  

#### HOW TO RUN  To start a Docker Compose and spin the three containers with three services, we need to simply execute the below two commands from the directory where the Docker Compose File (YAML file) is present:  
1. docker-compose build  
2. docker-compose up
