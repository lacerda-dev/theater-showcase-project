
# Galeria de Eventos

## Objetivo

Criar uma galeria onde visitantes possam visualizar os eventos realizados pela companhia através de álbuns de fotos organizados.

A página deve ser simples, elegante, responsiva e manter a identidade visual da Home.

---

# Fluxo do Usuário

Home

↓

Página Galeria

↓

Lista de Eventos

↓

Página do Evento

↓

Visualização das Fotos (Lightbox)

---

# Fluxo do Administrador

Login

↓

Painel Administrativo

↓

Criar Álbum

↓

Editar Álbum

↓

Adicionar Fotos

↓

Editar Informações

↓

Excluir Fotos

↓

Excluir Álbum

---

# Estrutura das Páginas

/pages

- Gallery
- EventGallery
- Admin
- Login

---

# Componentes

/components/gallery

- HeroGallery
- IntroGallery
- AlbumCard
- AlbumGrid
- EventHeader
- PhotoGrid
- PhotoCard
- Lightbox

/components/admin

- AlbumForm
- PhotoUploader
- AlbumList
- ConfirmDialog

---

# Estrutura de Pastas

src/

components/
gallery/
admin/

pages/
Gallery/
EventGallery/
Admin/
Login/

services/

firebase/
galleryService.js
storageService.js
authService.js

assets/

hooks/

---

# Fluxo dos Dados

Administrador

↓

Preenche formulário

↓

Upload das imagens

↓

Salva informações do álbum

↓

Usuário acessa a galeria

↓

React busca os álbuns

↓

Renderiza os cards

↓

Usuário abre um evento

↓

React busca as fotos

↓

Exibe no Grid

---

# Estrutura do Firebase (planejada)

Firestore

albums

- id
- title
- subtitle
- coverImage
- createdAt

Storage

gallery/

album-id/

foto01.jpg

foto02.jpg

foto03.jpg

---

# Fluxo de Upload

Selecionar imagens

↓

Enviar para Storage

↓

Receber URLs

↓

Salvar URLs no Firestore

---

# Fluxo de Leitura

Buscar álbuns

↓

Exibir cards

↓

Buscar fotos do álbum

↓

Renderizar Grid

---

# Fluxo de Edição

Editar informações

↓

Atualizar Firestore

↓

Atualizar interface

---

# Fluxo de Exclusão

Excluir foto

↓

Remover Storage

↓

Atualizar Firestore

↓

Atualizar tela

---

# Melhorias Futuras

- Busca
- Categorias
- Paginação
- Lazy Loading
- Compressão automática
- Compartilhamento
- Vídeos

---

# Boas Práticas

- Componentes pequenos
- Serviços separados
- Não acessar Firebase diretamente nos componentes
- Reutilizar componentes
- Nomes consistentes
- Mobile First

---

# Checklist

## Interface

- Hero
- Introdução
- Grid
- Página do Evento
- Lightbox
- Responsividade

## Administração

- Login
- CRUD de Álbuns
- Upload
- Exclusão

## Firebase

- Firestore
- Storage
- Authentication
- Security Rules

---

# Testes

- Criar álbum
- Editar álbum
- Excluir álbum
- Upload
- Exclusão de foto
- Navegação
- Responsividade

---

# Problemas Comuns

Imagem não aparece

→ Verificar URL

Upload falha

→ Verificar Storage Rules

Dados não carregam

→ Verificar Firestore Rules

Erro de autenticação

→ Verificar usuário logado