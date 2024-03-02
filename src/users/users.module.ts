import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/User';
import { ProfilesModule } from './profiles.module';
import { Posts } from 'src/typeorm/entities/Posts';

@Module({
  imports: [TypeOrmModule.forFeature([User, Posts]), ProfilesModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
