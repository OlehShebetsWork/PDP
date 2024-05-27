import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from '../entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
  ) {}

  async getAllPets(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async createPet(petData: Partial<Pet>): Promise<Pet> {
    const newPet = this.petRepository.create(petData);
    return await this.petRepository.save(newPet);
  }

  async updatePet(id: any, petData: Partial<Pet>): Promise<Pet> {
    const existingPet = await this.petRepository.findOne(id);

    if (!existingPet) {
      throw new Error('Pet not found');
    }
    const updatedPet = { ...existingPet, ...petData };
    return await this.petRepository.save(updatedPet);
  }

  async removePet(id: any): Promise<void> {
    const existingPet = await this.petRepository.findOne(id);

    if (!existingPet) {
      throw new Error('Pet not found');
    }

    await this.petRepository.remove(existingPet);
  }
}
