# starter-2.26.0-lint

ref - <https://www.prisma.io/docs/getting-started/quickstart-typescript>

## How to install modules

```bash
npm install --offline

# or

npm install --offline --production # for deploy
```

## How to start

```bash
npm run prisma:generate
npm run prisma:migrate:dev
```

## How to use Prisma Studio

```bash
npm run prisma:studio
```

## How to sync database

```bash
npm run prisma:db:pull
npm run prisma:db:push
```

## Make .env file

```bash
DATABASE_URL="file:./dev.db"
```
