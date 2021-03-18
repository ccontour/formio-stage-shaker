import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class AppService {
  // This will be the same database name your portal uses
  public static readonly DB_NAME = '';
  public static readonly DB_CONNECT = 'mongodb://localhost:27017';

  public async onModuleInit() {
    const client = new MongoClient(AppService.DB_CONNECT, {
      // Add any needed connection options here
    });
    client.connect(async (err) => {
      if (err) {
        console.error(err);
        process.exit();
      }
      console.log('Connected successfully to server');

      const db = client.db(AppService.DB_NAME);

      const items = await db
        .collection('projects')
        .find({ type: 'project', deleted: { $ne: null } })
        .toArray();

      await Promise.all(
        items.map(async (project) => {
          console.log(`Cleanup: ${project._id} / ${project.title}`);
          return db
            .collection('projects')
            .updateMany(
              { project: project._id },
              { $set: { deleted: project.deleted } },
            );
        }),
      );

      await client.close();
    });
  }
}
