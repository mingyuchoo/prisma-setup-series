<p align="center">
  <a href="https://github.com/mingyuchoo/prisma-setup-series/blob/main/LICENSE"><img alt="license" src="https://img.shields.io/github/license/mingyuchoo/prisma-setup-series"/></a>
  <a href="https://github.com/mingyuchoo/prisma-setup-series/issues"><img alt="Issues" src="https://img.shields.io/github/issues/mingyuchoo/prisma-setup-series?color=appveyor" /></a>
  <a href="https://github.com/mingyuchoo/prisma-setup-series/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/mingyuchoo/prisma-setup-series?color=appveyor" /></a>
</p>

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