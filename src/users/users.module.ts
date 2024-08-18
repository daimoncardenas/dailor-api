import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from '../prisma.service';
import { DateScalar } from 'src/date.scalar';

@Module({
  providers: [UsersResolver, UsersService, PrismaService, DateScalar],
  exports: [UsersService],
})
export class UsersModule { }
