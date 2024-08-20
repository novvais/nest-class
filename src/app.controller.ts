import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMember } from './dtos/create.member';
import { MembersRepository } from './repositories/members-repositoy';

@Controller('app')
export class AppController {
  constructor(private membersRepository: MembersRepository) {}

  @Get('member')
  async createMember(@Body() body: CreateMember) {
    const { name, function: memberFunction } = body;

    await this.membersRepository.create(name, memberFunction);
  }
}
