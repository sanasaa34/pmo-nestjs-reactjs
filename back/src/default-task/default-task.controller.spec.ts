import { Test, TestingModule } from '@nestjs/testing';
import { DefaultTaskController } from './default-task.controller';

describe('DefaultTaskController', () => {
  let controller: DefaultTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefaultTaskController],
    }).compile();

    controller = module.get<DefaultTaskController>(DefaultTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
