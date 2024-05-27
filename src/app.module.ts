import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsController } from './controllers/pets.controller';
import { PetsService } from './services/pets.service';
import { DatabaseModule } from './database.module';
import { PetsModule } from './pet.model';

@Module({
  imports: [DatabaseModule, PetsModule],
  controllers: [AppController, PetsController],
  providers: [AppService, PetsService],
})
export class AppModule {}
