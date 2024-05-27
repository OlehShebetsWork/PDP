// src/pets/pets.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsService } from './services/pets.service';
import { PetsController } from './controllers/pets.controller';
import { Pet } from './entities/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetsService],
  controllers: [PetsController],
})
export class PetsModule {}
