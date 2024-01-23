import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogInDetail } from './entities/login.entity';
import { LoginDto } from './entities/login.dto';

@Injectable()
export class LogInService {
  constructor(
    @InjectRepository(LogInDetail)
    private readonly loginRepository: Repository<LogInDetail>,
  ) {}

  async create(loginDto: LoginDto): Promise<LogInDetail> {
    const user = this.loginRepository.create(loginDto);
    return this.loginRepository.save(user);
  }

  async findAll(): Promise<LogInDetail[]> {
    return this.loginRepository.find();
  }

  async delete(id: string): Promise<void> {
    await this.loginRepository.delete(id);
  }

  async findByEmail(email: string): Promise<LogInDetail | undefined> {
    return this.loginRepository.findOne({ where: { email } });
  }
}
