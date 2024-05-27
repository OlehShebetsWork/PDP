// src/database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://lllebets:Qwerty123!@cluster0.sr3sptv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      synchronize: true,
      entities: [Pet],
    }),
    TypeOrmModule.forFeature([Pet]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
