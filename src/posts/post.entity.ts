import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('posts')
export class PostEntity extends BaseEntity {
  @Column({ length: 240, nullable: false })
  text: string;

  @Column('json', { default: [] })
  images: Array<string>;

  @Column({ name: 'like_count', default: 0 })
  likeCount: number;

  @Column({ name: 'repost_count', default: 0 })
  repostCount: number;

  @OneToOne(() => PostEntity)
  @JoinColumn({name:'orig_post_id'})
  originalPost: PostEntity;

  @OneToOne(() => PostEntity)
  @JoinColumn({name:'reply_to_id'})
  replyToPost: PostEntity;

  @Column('json', { default: [] })
  hashtags: Array<string>;

  @Column('json', { default: [] })
  mentions: Array<Mentions>;
}

class Mentions {
  name: string;
  id: string;
}
