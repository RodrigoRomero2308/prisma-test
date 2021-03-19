import { PrismaClient } from ".prisma/client";

export const prisma = new PrismaClient({
  rejectOnNotFound: false,
  // errorFormat: "pretty",
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'event',
      level: 'info'
    },
    {
      emit: 'event',
      level: 'warn',
    },
    {
      emit: 'event',
      level: 'error'
    }
  ],
})

prisma.$on('beforeExit', (exit) => {
  console.log('Exiting');
  exit().then(() => {
    console.log('Exited successfully');
  }).catch((err) => {
    console.log('Exited with errors:');
    console.log(err)
  })
})

prisma.$on('query', (event) => {
  console.log(event)
})

prisma.$on('info', (event) => {
  console.log(event)
})

prisma.$on('warn', (event) => {
  console.log(event)
})

prisma.$on('error', (event) => {
  console.log(event)
})