import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { MembersRepository } from './repositories/members-repositoy';
import { CreateMember } from './dtos/create.member';

describe('AppController', () => {
  let appController: AppController;
  let membersRepository: MembersRepository;

  beforeEach(async () => {
    membersRepository = { create: jest.fn() } as any; 

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        { provide: MembersRepository, useValue: membersRepository },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('createMember', () => {
    it('should return "Success"', async () => {
      const body: CreateMember = { name: 'John', function: 'Developer' }; 
      jest.spyOn(membersRepository, 'create').mockResolvedValueOnce(undefined); 

      expect(await appController.createMember(body)).toBe('Success');
    });
  });
});

