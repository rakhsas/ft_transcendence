// google.strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    userService: any;
  constructor() {
    super({
      clientID: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
      callbackURL: 'http://localhost:3000/api/auth/google/callback',
      scope: ['profile', 'email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    // Retrieve or create user in your database based on the profile information
    const user = {
      googleId: profile.id,
      email: profile.emails[0].value,
      displayName: profile.displayName,
    };

    // You may want to store additional user information or perform other tasks here

    done(null, user);
  }
  serializeUser(user: any, done: Function) {
    done(null, user.id);
}

deserializeUser(id: any, done: Function) {
this.userService.viewUser(id)
    .then((user: any) => done(null, user))
    .catch((error: any) => done(error));
}
}
