FROM httpd:2.4
COPY index.html /usr/local/apache2/htdocs/
EXPOSE 80
CMD ["httpd-foreground"]

# FROM signfica que vamos começar a construção desta imagem a partir da imagem docker já existente
# CMD mostra qual comando deve ser utilizado ao iniciar a imagem como um container
# Próximo passo para construir a imagem é utilizar o docker build <flag> -t <nome-da-imagem> <contexto>
# docker build -t primeira-imagem .
