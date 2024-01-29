import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import {GithubController} from './auth.controller-git';
import { PassportModule } from '@nestjs/passport';
import { FortyTwoStrategy } from './utils/42-strategy';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { ConfigModule } from '@nestjs/config';
import {GithubStrategy} from './utils/github-strategy';
import { GoogleStrategy } from './utils/google-starteg';

// console.log('process.env:', process.env);
// console.log('GITHUB_CLIENT_SECRET:', process.env.GITHUB_CLIENT_SECRET);

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: 'config/.env',
            isGlobal: true,
        }),
        PassportModule.register({ defaultStrategy: '42' }),
        UserModule,
        JwtModule.register({
            global: true,
            secret: 'fsdkfjdklsj345rklefjkldjsfksdkjfjdksfndsfnkds',
        })
    ],
    controllers: [AuthController],
    providers: [ AuthService, FortyTwoStrategy, GithubStrategy, GoogleStrategy, JwtService],
    exports: [AuthService]
})
export class AuthModule {}


