import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/login.entity';

@Injectable()
export class LogInService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async register(data: any): Promise<UserEntity> {
    return this.userRepository.save(data);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async delete(email: string): Promise<void> {
    await this.userRepository.delete(email);
  }

  async findOne(email: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  
}