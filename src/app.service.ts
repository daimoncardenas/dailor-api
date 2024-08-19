import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'DAILOR-API is running! Please route to /graphql to access the API';
  }
}
