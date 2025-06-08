# 📘 Portfolio Blog – por @fabricio-fn

Este é o meu antigo portfólio/blog pessoal, criado com tecnologias modernas como **Next.js**, **Sanity CMS**, **Tailwind CSS** e **TypeScript**.

---

## 🚀 Tecnologias

- **[Next.js 14](https://nextjs.org/)**
- **[React 18](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Sanity CMS v3](https://www.sanity.io/)**
- **[Tailwind CSS](https://tailwindcss.com/)** 
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** 

---

## 🧑‍💻 Sanity Studio (/studio)

O projeto conta com uma rota especial já configurada automaticamente pelo Sanity ao iniciar o projeto:

### ➤ `/studio`

Essa rota dá acesso ao **Sanity Studio**, a interface administrativa onde você pode:

- Criar e editar **posts do blog**
- Fazer login com sua conta **GitHub**
- Gerenciar dados estruturados (ex: título, slug, corpo, tags, imagem)

🔐 O acesso pode ser autenticado via GitHub, conforme configuração padrão do Sanity.

🛠 O conteúdo criado aqui é consumido na aplicação por meio da **Sanity API** utilizando a linguagem **GROQ** (Graph-Relational Object Queries)

---

### 📦 Exemplo de query GROQ

```
*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  body,
  "coverImage": mainImage.asset->url
}

```
### ⚙️ Como rodar localmente

```
git clone https://github.com/fabricio-fn/portfolio-blog.git
cd portfolio-blog

# Instalar dependências
npm install

# Rodar o projeto Next + Sanity Studio
npm run dev

# Acesse:
http://localhost:3000        → App principal
http://localhost:3000/studio → Admin do Sanity

