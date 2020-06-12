# Quizzically

A web app to customise your own quiz and share them with your friends. Built with Angular and Java Spring.

[Sounds cool? Try it out for yourself here!](https://myscribbler.herokuapp.com/)


## Technologies and Frameworks

- Front-end:
  - Angular
- Back-end:
  - Java Spring Boot
  - PostgreSQL
  
  
## Screenshots


## Useful notes

1. Encrypting secrets in application.yml. The encrypted value for the secret can be generated using the following code.
```
java -cp ~/.m2/repository/org/jasypt/jasypt/1.9.2/jasypt-1.9.2.jar org.jasypt.intf.cli.JasyptPBEStringEncryptionCLI input=”Topsecret@123" password=dev-env-secret algorithm=PBEWITHMD5ANDDES
```
If the jasypt-1.9.2.jar executable is located somewhere else, fret not. Open your IDE and under the External Libraries folder locate the org.jasypt:jasypt:1.9.2 folder. Expand this folder, right click on the jasypt-1.9.2.jar file, and select "Directory Path". Use this directory path to execute the JAR file. For me, my JAR was located in /mnt/c/...

## Useful Links

- [Storing secrets in the application.yml file.](https://medium.com/@sun30nil/how-to-secure-secrets-and-passwords-in-springboot-90c952961d9)
