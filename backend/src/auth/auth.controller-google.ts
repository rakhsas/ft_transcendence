// auth.controller.ts
import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin(): Promise<void> {
    // Google authentication will redirect to Google login page
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(@Req() req, @Res() res): Promise<void> {
    const user = req.user;
    console.log("user :", user)
    const firstLogin = req.user.firstLogin;
    const accessToken = req.user.appAccessToken;
    const providerAccessToken = req.user.providerAccessToken;
    res.redirect(`http://localhost:4200/dashboard?firstLogin=${firstLogin}&accessToken=${accessToken}&provider=${providerAccessToken}`)
  }
}
