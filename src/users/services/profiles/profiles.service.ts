import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserProfileParams } from 'src/utils';
import { In, Repository } from 'typeorm';
import { User } from '../../../typeorm/entities/User';
import { Profile } from '../../../typeorm/entities/Profile';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  async createProfile(
    id: number,
    createUserProfileDetails: CreateUserProfileParams,
  ) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const newUserProfile = this.profileRepository.create(
      createUserProfileDetails,
    );

    const savedProfile = await this.profileRepository.save(newUserProfile);
    user.profile = savedProfile;

    return this.userRepository.save(user);
  }
}
