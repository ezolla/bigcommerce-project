# BigCommerce Project

My code for a BigCommerce take home project. View the live version at [https://bigcommerce-project.vercel.app](https://bigcommerce-project.vercel.app)

## Development

To get the project started in your development environment. Follow these steps,

1. Clone the repository
2. Install dependencies with `npm i`
3. Run `npm run dev`
4. Add `API_URL` to environmental variables, see below
5. Open [localhost:3000](http://localhost:3000/)

## Environment

In order for the API calls to not run into cors issues, use a proxy like below inside `.env.local`

```
API_URL=https://fathomless-everglades-86116.herokuapp.com/https://www.bigcommerce.com
```

## Deployments & Production

Production can be viewed at [https://bigcommerce-project.vercel.app](https://bigcommerce-project.vercel.app). Deployments and production is handled by [Vercel](https://vercel.com/).

## Built With

- [React](https://reactjs.org/)
- [Next](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
