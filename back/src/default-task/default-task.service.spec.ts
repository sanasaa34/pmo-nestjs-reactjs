import { Test, TestingModule } from '@nestjs/testing';
import { DefaultTaskService } from './default-task.service';

describe('DefaultTaskService', () => {
  let service: DefaultTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultTaskService],
    }).compile();

    service = module.get<DefaultTaskService>(DefaultTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
