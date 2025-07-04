import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Post } from 'src/modules/post/entities/post.entity';

@Injectable()
export class SearchService {
  constructor(
    private readonly elasticsearchService: ElasticsearchService
  ) {}

  async indexDocument(post: Post) {
    try{
      return this.elasticsearchService.index({
        index: 'posts',
        type: '_doc',
        id: post.id,
        body: {
          access: post.access,
          content: post.content,
          userId: post.user.id,
          // createdAt: post.createdAt
        }
      });      
    }catch(err){
      console.error(err)
    }
  }

  async search(index: string, keyword: string, userId: string = "") {
    const result = await this.elasticsearchService.search({
      index,
      body: this.createQueryBuilder(keyword, userId),
    });
    return result.body.hits.hits.map(hit => ({
      id: hit._id,
      // ...hit._source,
    }));
  }

  async updateDocument(post: Post) {
    return this.elasticsearchService.update({
      index: 'posts',
      id: post.id,
      body: {
        doc: {
          access: post.access,
          content: post.content,
          userId: post.user.id,
          // createdAt: post.createdAt
        }
      }
    });
  }

  async deleteDocument(postId: string){
    return this.elasticsearchService.delete({
      index: 'posts',
      id: postId,
    });
  }

  createQueryBuilder(keyword: string, userId: string = "") {
    return {};
  }
}
