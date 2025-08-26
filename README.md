# Projeto: Aplicação Web com Docker Compose

Este projeto demonstra a execução de uma aplicação web completa utilizando Docker Compose com o servidor Apache.

## Funcionalidades

- Interface moderna para sistema de gestão de farmácia
- Dashboard com estatísticas em tempo real
- Design responsivo para mobile e desktop
- Navegação suave entre seções
- Simulação de dados dinâmicos

## Tecnologias Utilizadas

- HTML5
- CSS3 (com Flexbox e Grid)
- JavaScript (ES6)
- Apache HTTP Server
- Docker
- Docker Compose

## Como Executar

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/projeto-apache-docker.git
cd projeto-apache-docker


## Execute o Docker Compose:

bash
docker-compose up -d
## Acesse a aplicação no navegador:

text
http://localhost:8080
## Estrutura do Projeto
text
projeto-apache-docker/
├── docker-compose.yml    # Definição dos serviços Docker
├── Dockerfile           # Configuração da imagem Docker
├── my-httpd.conf        # Configuração personalizada do Apache
├── src/                 # Código fonte da aplicação
│   ├── index.html       # Página principal
│   ├── css/
│   │   └── style.css    # Estilos da aplicação
│   ├── js/
│   │   └── script.js    # Interatividade da aplicação
│   └── images/          # Imagens e recursos
└── README.md            # Documentação do projeto

## Comandos Úteis
Parar os containers: docker-compose down

Ver logs: docker-compose logs

Reconstruir imagens: docker-compose up --build

Acessar container: docker exec -it apache-web-server bash

Personalização
Para personalizar a aplicação, edite os arquivos na pasta src/. As alterações serão refletidas automaticamente no container graças ao volume mapeado.
