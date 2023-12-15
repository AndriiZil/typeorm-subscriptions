import { Profile } from './Profile';
import { AppDataSource } from './db';

(async () => {
  try {
    await AppDataSource.initialize();
    await AppDataSource.synchronize(true);
    const profileRepo = AppDataSource.getRepository(Profile)

    await profileRepo
      .createQueryBuilder()
      .insert()
      .into(Profile)
      .values({
        gender: 'gender',
        photo: 'photo'
      })
      .execute();

    console.log('DONE');
  } catch (err) {
    console.log(err);
  }
})();
