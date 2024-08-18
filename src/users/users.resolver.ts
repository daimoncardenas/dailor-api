import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './dto/user';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InputQueries } from 'src/common/input-queries';
import { ResponseUser } from './dto/response-user';
import { InputIdQueries } from 'src/common/input-id';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => ResponseUser, { name: 'users' })
  async findAll(@Args('input') input: InputQueries): Promise<ResponseUser> {
    return this.usersService.findAll(input);
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id') id: InputIdQueries): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }


}
