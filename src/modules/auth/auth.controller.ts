import { Controller, Post, Body, HttpCode, Res, Req, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';
import { Response } from 'express';
import { AuthGuard } from '../../guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(201)
  @ApiCreatedResponse({ description: 'User created successfully!' })
  @ApiConflictResponse({ description: 'User already exists!' })
  @ApiBadRequestResponse({ description: 'Missing input!' })
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.authService.register(createUserDto);
  }

  @Post('login')
  @HttpCode(200)
  @ApiOkResponse({ description: 'Login successfully!'})
  @ApiBadRequestResponse({ description: 'Email or password is incorrect'})
  async login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { access_token, user } = await this.authService.login(loginUserDto);

    response.cookie('access_token', access_token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      // sameSite: process.env.NODE_ENV === 'production'? 'none' : 'lax',
      secure: false,
      sameSite: 'lax',
      maxAge: 3600000*24, // 1 ngay
    });

    return {user};
    // return await this.authService.login(loginUserDto);
  }

  @Post('logout')
  @HttpCode(200)
  @ApiOkResponse({ description: 'Logout successfully!' })
  async logout(
    @Res({ passthrough: true }) response: Response
  ) {
    response.clearCookie('access_token', {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    })

    return {message: 'Logged out successfully!'}
  }

  @UseGuards(AuthGuard)
  @Get('/me')
  @HttpCode(200)
  async me(
    @Req() req: Request
  ) {
    const userId = req['user'].sub
    const user = await this.authService.me(userId);

    return {user};
  }
}
