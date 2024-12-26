/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, MinLength, IsMobilePhone } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    // description: 'The name of the user',
    example: 'Aritra Bera',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    // description: 'The email address of the user',
    example: 'aritrabera67@gmail.com',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    // description: 'The mobile number of the user',
    example: '8967314096',
    required: true,
  })
  @IsMobilePhone()
  @IsNotEmpty()
  readonly mobileNumber: string;

  @ApiProperty({
    // description: 'The password for the user',
    example: 'password123',
    minLength: 6,
    required: true,
  })
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  readonly password: string;
}


export class LoginUserDto {
  @ApiProperty({
    // description: 'The email address of the user',
    example: 'aritrabera67@gmail.com',
    required: true,  
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    // description: 'The password for the user',
    example: 'password123',
    minLength: 6,
    required: true,
  })
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  readonly password: string;
}
