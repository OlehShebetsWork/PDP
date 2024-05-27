import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PetsService } from '../services/pets.service';
import { Pet } from '../entities/pet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('pets')
export class PetsController {
  constructor(
    private readonly petsService: PetsService,
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
  ) {}

  @Get()
  async getAllPets(): Promise<Pet[]> {
    return await this.petsService.getAllPets();
  }

  @Post()
  async createPet(@Body() pet: Partial<Pet>): Promise<Pet> {
    const newPet = this.petRepository.create(pet);
    return await this.petRepository.save(newPet);
  }

  @Put(':id')
  async updatePet(
    @Param('id') id: string,
    @Body() petData: Partial<Pet>,
  ): Promise<Pet> {
    return await this.petsService.updatePet(id, petData);
  }

  @Delete(':id')
  async removePet(@Param('id') id: string): Promise<void> {
    return await this.petsService.removePet(id);
  }
}
