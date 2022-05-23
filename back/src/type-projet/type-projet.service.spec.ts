import { Test, TestingModule } from '@nestjs/testing';
import { TypeProjetService } from './type-projet.service';

describe('TypeProjetService', () => {
  let service: TypeProjetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeProjetService],
    }).compile();

    service = module.get<TypeProjetService>(TypeProjetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
