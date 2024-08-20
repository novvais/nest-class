import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { MembersRepository } from './repositories/members-repositoy';
import { PrismaMembersRepository } from './repositories/prisma/prisma-members-repostory';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService,
    {
      provide: MembersRepository,
      useClass: PrismaMembersRepository
    }
  ],
})
export class AppModule {}
