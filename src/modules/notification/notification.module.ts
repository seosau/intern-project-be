import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { GrpcModule } from '../../config/gRPC/grpc.module';

@Module({
  imports: [GrpcModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
