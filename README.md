# 📓 Diário de Bordo

Aplicação web do tipo **PWA (Progressive Web App)** para registrar anotações pessoais com título, descrição e data. Desenvolvida com HTML, CSS e JavaScript puro, sem dependências externas.

## Funcionalidades

- Adicionar anotações com título, descrição e data
- Visualizar todas as anotações registradas
- Excluir anotações individualmente
- Persistência de dados via `localStorage`
- Funciona offline graças ao **Service Worker**
- Pode ser instalada como app no dispositivo (botão "Instalar app")

## Tecnologias

| Tecnologia       | Uso                          |
| ---------------- | ---------------------------- |
| HTML5            | Estrutura da página          |
| CSS3             | Estilização                  |
| JavaScript       | Lógica da aplicação          |
| Service Worker   | Cache e suporte offline      |
| Web App Manifest | Configuração do PWA          |
| localStorage     | Persistência local dos dados |

## Estrutura do Projeto

```
meu-diario/
├── index.html         # Página principal
├── style.css          # Estilos
├── script.js          # Lógica da aplicação
├── service-worker.js  # Cache e suporte offline
├── manifest.json      # Configuração do PWA
└── icons/             # Ícones do app (192x192 e 512x512)
```

## Como usar

1. Abra o arquivo `index.html` no navegador (ou sirva com um servidor local)
2. Preencha o título, a descrição e a data
3. Clique em **Salvar** para registrar a anotação
4. Para excluir, clique no botão **X** na anotação desejada

## Instalação como PWA

Ao acessar a aplicação em um navegador compatível (Chrome, Edge, etc.), o botão **"Instalar app"** aparecerá no cabeçalho, permitindo instalar o Diário de Bordo diretamente no dispositivo.

---

## Autor

Desenvolvido por Anne Carolayne - Aluno de Desenvolvimento Full Stack em Python
