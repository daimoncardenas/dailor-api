import { Injectable } from '@nestjs/common';
import { loginInput } from './dto/login.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {

  constructor(private prisma: PrismaService) { }

  async create(Input: loginInput) {
    try {
      const { email, password } = Input;
      const user = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }
      if (user.password !== password) {
        throw new Error("Password incorrect");
      }
      return "Login success";
    } catch (error) { } finally { }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
