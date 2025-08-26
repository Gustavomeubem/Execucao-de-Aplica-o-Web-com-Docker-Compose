FROM httpd:2.4

# Copiar configurações personalizadas do Apache
COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf

# Instalar ferramentas úteis para debugging
RUN apt-get update && apt-get install -y \
    curl \
    vim \
    && rm -rf /var/lib/apt/lists/*

# Expor a porta 80
EXPOSE 80

# Health check para verificar se o servidor está respondendo
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
