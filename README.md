
![image](https://user-images.githubusercontent.com/71537090/167278997-56d6c6a9-e477-4910-b512-23feb2fff54f.png)

## 🚀 Info

Na NLW #8 foi desenvolvido uma aplicação que coleta os feedbacks dos usuarios e os armazena em um banco de dados, alem de envia-los por email com sua descrição, screenshot da tela.

O Backend da aplicação foi construído com NodeJs, onde foram utilizadas as melhores praticas e clean code facilitando a manutenção, essa caracteristica foi utilizada tanto no backend, como no frontend e mobile, foram ainda utilizados testes unitarios com Jest e o banco de dados foi o Prisma.

O Frontend foi utilizado ReactJS utilizando do Vite para agilizar e facilitar toda a configuração inicial, ainda foram utilizados os conceitos de acessibilidade e sua estilização foi a base do tailwindCSS.

O Mobile foi construído com React Native, na situação foi utilizado a Expo com caracteristicas semelhantes ao Vite para lidar com toda a configuração iniciais e agilizar o processo nas configurações do ambiente de desenvolvimento, porém no caso da Expo foram bem mais contundentes, pois a facilidade de ler apenas um QRCODE com o seu aparelho e começar a codar facilita bastante.


## 👨‍💻 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Tailwindcss](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Express](https://expressjs.com/pt-br)
- [Prisma](https://www.prisma.io)
- [Jest](https://jestjs.io)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)

## 🔖 Layout:

Você pode visualizar o layout do projeto através do link abaixo:

- [Layout Figma](https://www.figma.com/community/file/1102912516166573468/Feedback-Widget)

## ⚙️ Como rodar o projeto

Você pode acessar a aplicação Web onde foi feito deploy na Vercel utilizando as estrategias de CI/CD, ou roda-la localmente seguindo os procedimentos abaixo;
- [Aplicação Web](https://feedback-project-xi.vercel.app)

```sh
# BackEnd
$ cd server
$ npm install
$ npm run dev
```

```sh
# FrontEnd
$ cd web
$ npm install
$ npm run dev
```

```sh
# Mobile
$ cd mobile
$ npm install
$ npm run start

```

