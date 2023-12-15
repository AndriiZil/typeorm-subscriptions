import {
  AfterInsert,
  AfterLoad,
  BeforeInsert,
  Column,
  Entity, EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  gender: string

  @Column()
  photo: string
}

@EventSubscriber()
export class ProfileSubscriber implements EntitySubscriberInterface<Profile> {
  afterLoad(entity: any) {
    console.log(`AFTER ENTITY LOADED: `, entity)
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Profile>) {
    console.log(`BEFORE POST INSERTED: `, event.entity)
  }

  /**
   * Called after entity insertion.
   */
  afterInsert(event: InsertEvent<any>) {
    console.log(`AFTER ENTITY INSERTED: `, event.entity)
  }
}
