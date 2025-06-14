// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.2
//   protoc               v3.12.4
// source: notification.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import type { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "notification";

export enum NotificationType {
  NOTIFICATION_TYPE_UNSPECIFIED = 0,
  LIKE = 1,
  COMMENT = 2,
  SHARE = 3,
  UNRECOGNIZED = -1,
}

export interface Notification {
  id: string;
  postId: string;
  userId: string;
  notifType: NotificationType;
  createdAt: string;
  deletedAt: string;
}

export interface GetNotificationsRequest {
  userId: string;
}

export interface GetNotificationsResponse {
  notifications: Notification[];
}

export interface CreateNotificationRequest {
  postId: string;
  userId: string;
  notifType: NotificationType;
}

export interface CreateNotificationResponse {
  notifications: Notification | undefined;
}

export const NOTIFICATION_PACKAGE_NAME = "notification";

function createBaseNotification(): Notification {
  return { id: "", postId: "", userId: "", notifType: 0, createdAt: "", deletedAt: "" };
}

export const Notification: MessageFns<Notification> = {
  encode(message: Notification, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.postId !== "") {
      writer.uint32(18).string(message.postId);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    if (message.notifType !== 0) {
      writer.uint32(32).int32(message.notifType);
    }
    if (message.createdAt !== "") {
      writer.uint32(42).string(message.createdAt);
    }
    if (message.deletedAt !== "") {
      writer.uint32(58).string(message.deletedAt);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Notification {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.postId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.userId = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.notifType = reader.int32() as any;
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.deletedAt = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseGetNotificationsRequest(): GetNotificationsRequest {
  return { userId: "" };
}

export const GetNotificationsRequest: MessageFns<GetNotificationsRequest> = {
  encode(message: GetNotificationsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetNotificationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotificationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseGetNotificationsResponse(): GetNotificationsResponse {
  return { notifications: [] };
}

export const GetNotificationsResponse: MessageFns<GetNotificationsResponse> = {
  encode(message: GetNotificationsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.notifications) {
      Notification.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetNotificationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotificationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.notifications.push(Notification.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseCreateNotificationRequest(): CreateNotificationRequest {
  return { postId: "", userId: "", notifType: 0 };
}

export const CreateNotificationRequest: MessageFns<CreateNotificationRequest> = {
  encode(message: CreateNotificationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.notifType !== 0) {
      writer.uint32(24).int32(message.notifType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateNotificationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNotificationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.postId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.userId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.notifType = reader.int32() as any;
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseCreateNotificationResponse(): CreateNotificationResponse {
  return { notifications: undefined };
}

export const CreateNotificationResponse: MessageFns<CreateNotificationResponse> = {
  encode(message: CreateNotificationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.notifications !== undefined) {
      Notification.encode(message.notifications, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateNotificationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNotificationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.notifications = Notification.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

export interface NotificationServiceClient {
  getNotifications(request: GetNotificationsRequest): Observable<GetNotificationsResponse>;

  createNotification(request: CreateNotificationRequest): Observable<CreateNotificationResponse>;
}

export interface NotificationServiceController {
  getNotifications(
    request: GetNotificationsRequest,
  ): Promise<GetNotificationsResponse> | Observable<GetNotificationsResponse> | GetNotificationsResponse;

  createNotification(
    request: CreateNotificationRequest,
  ): Promise<CreateNotificationResponse> | Observable<CreateNotificationResponse> | CreateNotificationResponse;
}

export function NotificationServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getNotifications", "createNotification"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("NotificationService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("NotificationService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const NOTIFICATION_SERVICE_NAME = "NotificationService";

export type NotificationServiceService = typeof NotificationServiceService;
export const NotificationServiceService = {
  getNotifications: {
    path: "/notification.NotificationService/GetNotifications",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetNotificationsRequest) => Buffer.from(GetNotificationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetNotificationsRequest.decode(value),
    responseSerialize: (value: GetNotificationsResponse) =>
      Buffer.from(GetNotificationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetNotificationsResponse.decode(value),
  },
  createNotification: {
    path: "/notification.NotificationService/CreateNotification",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateNotificationRequest) =>
      Buffer.from(CreateNotificationRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateNotificationRequest.decode(value),
    responseSerialize: (value: CreateNotificationResponse) =>
      Buffer.from(CreateNotificationResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateNotificationResponse.decode(value),
  },
} as const;

export interface NotificationServiceServer extends UntypedServiceImplementation {
  getNotifications: handleUnaryCall<GetNotificationsRequest, GetNotificationsResponse>;
  createNotification: handleUnaryCall<CreateNotificationRequest, CreateNotificationResponse>;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
