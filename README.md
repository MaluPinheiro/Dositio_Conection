This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Começando

Baixe os arquivo do github e faça a instalação do node modules `npm install`.

Depois, rode o servidor:
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador de preferência. Nessa página será mostrado a página incial, onde é feita a introdução da aplicação e logo após um uma navegação que direciona para página de login.

## Página de *Login*

Após efetuar a navegação para o login, suas credências serão pedidas para que ocorra a autentificação acossiada com o backend antes de acessar a página com a listagem dos produtos.
Para que essa autentificação ocorra corretamente basta inserir as seguintes informações:
*Usuário:* `Maria` <br>
*Senha:* `Abcd@1234` <br>
Fazer o check do admin. <br>
Ao clicar no botão de acessar a navegação é validada de acordo com os parâmetros já estabelecidos no backend e é feito o fetch dos produtos presentes na API.

## Página de *Produtos*
