# prisma-setup-series

## How to create a project

```bash
mkdir <project-name>
cd <project-name>
npm init -y
npm install --save-dev typescript ts-node @types/node
npx tsc --init
npm install --save-dev prisma
npx prisma init --datasource-provider sqlite
```

modify `./prisma/schema.prisma`

```bash
npx prisma migrate dev --name init
touch script.ts
```

modify `./script.ts`

```bash
npx ts-node script.ts
```

## References

- <https://www.prisma.io/docs/getting-started/quickstart>