import { Controller, ParseIntPipe } from '@nestjs/common';
import { ProfilesService } from 'src/users/services/profiles/profiles.service';
import { Post, Body, Param } from '@nestjs/common';
import { CreateUserDtoUserProfileDto } from 'src/users/dtos';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @Post(':id')
  createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    createUserDto: CreateUserDtoUserProfileDto,
  ) {
    return this.profilesService.createProfile(id, createUserDto);
  }
}
