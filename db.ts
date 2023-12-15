import { DataSource } from 'typeorm';
import { Profile, ProfileSubscriber } from './Profile';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "test",
  entities: [Profile],
  subscribers: [ProfileSubscriber],
});
