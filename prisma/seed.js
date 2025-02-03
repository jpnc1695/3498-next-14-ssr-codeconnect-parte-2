import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const author = {
    name: "Ana Beatriz",
    userName: "anabeatriz_dev",
    avatar:
      "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png",
  };

  const ana = await prisma.user.upsert({
    where: { userName: author.userName },
    update: {},
    create: author,
  });

  console.log("Author created", ana);

  const posts = [
    {
      cover:
        "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
      title: "Introdução ao React",
      slug: "introducao-ao-react",
      body:
        "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
      markdown:
        "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
      authorId: ana.id,
      authorName: ana.name
    },
    {
      cover:
        "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/css-grid-na-pratica.png",
      title: "CSS Grid na Prática",
      slug: "css-grid-na-pratica",
      body:
        "Aprenda a criar layouts responsivos com CSS Grid. Este post aborda desde a definição de grid até a criação de layouts complexos de forma simples e eficaz.",
      markdown:
        "```css\n.grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n```",
      authorId: ana.id,
      authorName: ana.name

    },
    {
      cover:
        "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/vuejs-para-iniciantes.png",
      title: "Vue.js para Iniciantes",
      slug: "vuejs-para-iniciantes",
      body:
        "Vue.js é um framework progressivo para a construção de interfaces de usuário. Este guia inicial cobre as funcionalidades essenciais do Vue.",
      markdown:
        "```javascript\nnew Vue({\n  el: '#app',\n  data: {\n    message: 'Olá Vue!'\n  }\n})\n```",
      authorId: ana.id,
      authorName: ana.name

    },
    {
      cover:
        "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/dicas-de-acessibilidade-web.png",
      title: "Dicas de Acessibilidade Web",
      slug: "dicas-de-acessibilidade-web",
      body:
        "Explorando a importância da acessibilidade na web, este post oferece dicas práticas para tornar seus sites mais acessíveis a todos os usuários.",
      markdown:
        '```html\n<a href="#" aria-label="Saiba mais sobre acessibilidade">Saiba mais</a>\n```',
      authorId: ana.id,
      authorName: ana.name

    },
    {
      cover:
        "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-typescript.png",
      title: "Introdução ao TypeScript",
      slug: "introducao-ao-typescript",
      body:
        "Este post é um guia introdutório ao TypeScript, explicando como ele aumenta a produtividade e melhora a manutenção do código JavaScript.",
      markdown:
        "```typescript\nfunction greeter(person: string) {\n  return 'Hello, ' + person;\n}\n```",
      authorId: ana.id,
      authorName: ana.name

    },
    {
      cover:
        "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/otimizacao-de-performance-no-react.png",
      title: "Otimização de Performance no React",
      slug: "otimizacao-de-performance-no-react",
      body:
        "Discutindo técnicas avançadas para otimizar a performance de aplicações React, este post aborda conceitos como memoização e lazy loading.",
      markdown:
        "```javascript\nconst MemoizedComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n```",
      authorId: ana.id,
      authorName: ana.name

    },
    
    
  ];
  //   posts.forEach(async (post) => {
  //     await prisma.post.upsert({
  //         where:{slug: post.slug},
  //         update: post,
  //         create: post
  //     })
  //   })
  await Promise.all(
    posts.map(async (post) => {
      await prisma.post.upsert({
        where: {
          slug: post.slug,
        },
        update: post,
        create: post,
      });
    })
  );

  console.log("Seed ok");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
