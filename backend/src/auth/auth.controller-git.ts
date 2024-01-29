// auth.controller.ts
// github.controller.ts
import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

console.log("user :");
@Controller('auth')
export class GithubController {

  constructor() {}

  @Get('github/login')
  @UseGuards(AuthGuard('github'))
  handleGithubLogin() {
    return {
      msg: 'GitHub authentication',
    };
  }

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  async handleGithubRedirect(@Req() req, @Res() res) {
    const user = req.user;
    console.log("sdfdfdsfs");
      const firstLogin = req.user.firstLogin;
      const accessToken = req.user.appAccessToken;
      const providerAccessToken = req.user.providerAccessToken;
      res.redirect(`http://localhost:4200/dashboard?firstLogin=${firstLogin}&accessToken=${accessToken}&provider=${providerAccessToken}`);
  }
}
