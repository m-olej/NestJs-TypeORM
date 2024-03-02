import { Module } from '@nestjs/common';
import { ProfilesController } from './controllers/profiles/profiles.controller';
import { ProfilesService } from './services/profiles/profiles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/User';
import { Profile } from '../typeorm/entities/Profile';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile])],
  controllers: [ProfilesController],
  providers: [ProfilesService],
})
export class ProfilesModule {}
