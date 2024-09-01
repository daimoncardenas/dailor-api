import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from '../prisma.service';
import { ROLE, STATUS } from '@prisma/client';
import { ResponseUser } from './dto/response-user';
import { InputQueries } from 'src/common/input-queries';
import { InputIdQueries } from 'src/common/input-id';
import { User } from './dto/user';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) { }


  async create(createUserInput: CreateUserInput) {
    try {
      const user = await this.prisma.user.create({
        data: {
          email: createUserInput.email,
          password: createUserInput.password,
          role: ROLE.DOCTOR,
          status: STATUS.ACTIVE,
          address: createUserInput.address || '',
          phone: createUserInput.phone || '',
          firstname: createUserInput.firstname,
          lastname: createUserInput.lastname,
        },
      });
      return user;
    } catch (error) {
      throw new Error(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async findAll(input: InputQueries): Promise<ResponseUser> {
    try {
      const { search, skip, status, take } = input;
      const where = {
        ...(search && { email: { contains: search } }),
        ...(status && { status: status }) as any,
      };
      const users = await this.prisma.user.findMany({
        where,
        skip: skip ? skip : 0,
        take: take ? take : 10,
      });

      console.log("users", users);
      const total_items = await this.prisma.user.count({
        where,
      });

      return {
        total_pages: Math.ceil(total_items / (take || 10)),
        total_items: total_items,
        count: users.length,
        current_page: (skip / take + 1),
        users: users, // Este debe ser un array de usuarios
      } as any
    } catch (error) {
      throw new Error(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }


  async findOne(input: InputIdQueries): Promise<User> {
    try {
      const { id } = input
      const user = await this.prisma.user.findUnique({
        where: { id: id },
      });
      return user as any;
    } catch (error) {
      throw new Error(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async update(updateUserInput: UpdateUserInput) {
    try {
      const user = await this.prisma.user.update({
        where: { id: updateUserInput.id },
        data: {
          ...(updateUserInput.email && { email: updateUserInput.email }),
          ...(updateUserInput.password && { password: updateUserInput.password }),
          ...(updateUserInput.role && { role: ROLE.DOCTOR }),
          ...(updateUserInput.address && { address: updateUserInput.address }),
          ...(updateUserInput.phone && { phone: updateUserInput.phone }),
          ...(updateUserInput.firstname && { firstname: updateUserInput.firstname }),
          ...(updateUserInput.lastname && { lastname: updateUserInput.lastname }),
          ...(updateUserInput.status && { status: STATUS.ACTIVE }),
        },
      });
      return user;
    } catch (error) {
      throw new Error(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

}
