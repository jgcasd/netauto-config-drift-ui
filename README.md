# NetAuto ConfigDrift UI
A UI that allows network operators to manager their network

# Motivation
This project serves as a demonstration of how to implement a UI for managing your network

# Build Status

# Screenshots
![Dashboard](https://github.com/jgcasd/netauto-config-drift-ui/blob/main/docs/dashboard.png)
![Send Command](https://github.com/jgcasd/netauto-config-drift-ui/blob/main/docs/send_command.png)
![Requested](https://github.com/jgcasd/netauto-config-drift-ui/blob/main/docs/requested.png)
![Output](https://github.com/jgcasd/netauto-config-drift-ui/blob/main/docs/output.png)

# Tech/framework
* VueJS 2.x
* AWS S3


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Contribute
1) Fork this repository
2) Create a branch: ```git checkout -b <branch name>```
3) Make your changes and commit them: ```git commit -m <commit message>```
4) Push to the original branch: ```git push origin <project_name>/<location>```
5) Create the pull request.

# Todo
* Add code to deploy to AWS S3
* Implement authentication and authorization
* Add support for retrieving device vars from API
* Add support for managing device inventory from UI
* Add support for running scripts or templates of configs
* Implement workflows for managing groups of devices
* Display task results on same screen as send config/get config
* Improve error handling