import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { CreateReviewDto } from 'src/review/dto/create-review.dto';
import { disconnect, Types } from 'mongoose';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { REVIEW_NOT_FOUND } from 'src/review/review.consts';

const productId = new Types.ObjectId().toHexString();
const loginDto: AuthDto = {
  login: 'a2@a.ru',
  password: '1',
};

const testDto: CreateReviewDto = {
  name: 'Test',
  title: 'Title',
  description: 'desc tests',
  rating: 5,
  productId,
};

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;
  let createdId: string;
  let token: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { body } = await request(app.getHttpServer())
      .post('/auth/login')
      .send(loginDto);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    token = body.access_token;
  });

  it('/review/create (POST) - success', async () => {
    return request(app.getHttpServer())
      .post('/review/create')
      .send(testDto)
      .expect(201)
      .then(({ body }: request.Response) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        createdId = body._id;
        expect(createdId).toBeDefined();
      });
  });

  it('/review/create (POST) - fail', () => {
    return request(app.getHttpServer())
      .post('/review/create')
      .send({ ...testDto, rating: 0 })
      .expect(400);
  });

  it('/review/:id (DELETE) - success', () => {
    return request(app.getHttpServer())
      .delete('/review/' + createdId)
      .set('Authorization', 'Bearer ' + token)
      .expect(200);
  });

  it('/review/:id (DELETE) - fail', () => {
    return request(app.getHttpServer())
      .delete('/review/' + new Types.ObjectId().toHexString())
      .set('Authorization', 'Bearer ' + token)
      .expect(404, {
        statusCode: 404,
        message: REVIEW_NOT_FOUND,
      });
  });

  afterAll(() => {
    disconnect();
  });
});
