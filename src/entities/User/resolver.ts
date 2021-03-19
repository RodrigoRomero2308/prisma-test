import { prisma } from "../../prisma"
import { IUserCreateInput } from "./interfaces"

export const UserResolver = {
  Query: {
    users: () => {
      return prisma.user.findMany({
        where: {
          active: {
            equals: true
          },
          dts: {
            equals: null
          }
        }
      })
    }
  },
  Mutation: {
    createUser: (parent: any, { input: { email, password, username } }: { input: IUserCreateInput }) => {
      return prisma.user.create({
        data: {
          email,
          username,
          password,
          active: true,
          its: new Date(),
        }
      })
    },
    editUser: (parent: any) { // TODO: completar
    }
  }
}