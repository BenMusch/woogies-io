// @generated by protoc-gen-es v1.8.0
// @generated from file config_service/config_service.proto (package config_service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message config_service.EnableGamesRequest
 */
export declare class EnableGamesRequest extends Message<EnableGamesRequest> {
  /**
   * @generated from field: bool enabled = 1;
   */
  enabled: boolean;

  constructor(data?: PartialMessage<EnableGamesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "config_service.EnableGamesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnableGamesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnableGamesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnableGamesRequest;

  static equals(a: EnableGamesRequest | PlainMessage<EnableGamesRequest> | undefined, b: EnableGamesRequest | PlainMessage<EnableGamesRequest> | undefined): boolean;
}

/**
 * @generated from message config_service.SetFEHashRequest
 */
export declare class SetFEHashRequest extends Message<SetFEHashRequest> {
  /**
   * @generated from field: string hash = 1;
   */
  hash: string;

  constructor(data?: PartialMessage<SetFEHashRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "config_service.SetFEHashRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetFEHashRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetFEHashRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetFEHashRequest;

  static equals(a: SetFEHashRequest | PlainMessage<SetFEHashRequest> | undefined, b: SetFEHashRequest | PlainMessage<SetFEHashRequest> | undefined): boolean;
}

/**
 * @generated from message config_service.PermissionsRequest
 */
export declare class PermissionsRequest extends Message<PermissionsRequest> {
  /**
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * @generated from field: google.protobuf.BoolValue director = 2;
   */
  director?: boolean;

  /**
   * @generated from field: google.protobuf.BoolValue admin = 3;
   */
  admin?: boolean;

  /**
   * @generated from field: google.protobuf.BoolValue mod = 4;
   */
  mod?: boolean;

  /**
   * @generated from field: google.protobuf.BoolValue bot = 5;
   */
  bot?: boolean;

  constructor(data?: PartialMessage<PermissionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "config_service.PermissionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermissionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermissionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermissionsRequest;

  static equals(a: PermissionsRequest | PlainMessage<PermissionsRequest> | undefined, b: PermissionsRequest | PlainMessage<PermissionsRequest> | undefined): boolean;
}

/**
 * @generated from message config_service.UserRequest
 */
export declare class UserRequest extends Message<UserRequest> {
  /**
   * @generated from field: string username = 1;
   */
  username: string;

  constructor(data?: PartialMessage<UserRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "config_service.UserRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserRequest;

  static equals(a: UserRequest | PlainMessage<UserRequest> | undefined, b: UserRequest | PlainMessage<UserRequest> | undefined): boolean;
}

/**
 * @generated from message config_service.UserResponse
 */
export declare class UserResponse extends Message<UserResponse> {
  /**
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * @generated from field: string uuid = 2;
   */
  uuid: string;

  /**
   * @generated from field: string email = 3;
   */
  email: string;

  /**
   * @generated from field: bool is_bot = 4;
   */
  isBot: boolean;

  /**
   * @generated from field: bool is_director = 5;
   */
  isDirector: boolean;

  /**
   * @generated from field: bool is_mod = 6;
   */
  isMod: boolean;

  /**
   * @generated from field: bool is_admin = 7;
   */
  isAdmin: boolean;

  constructor(data?: PartialMessage<UserResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "config_service.UserResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserResponse;

  static equals(a: UserResponse | PlainMessage<UserResponse> | undefined, b: UserResponse | PlainMessage<UserResponse> | undefined): boolean;
}

/**
 * @generated from message config_service.ConfigResponse
 */
export declare class ConfigResponse extends Message<ConfigResponse> {
  constructor(data?: PartialMessage<ConfigResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "config_service.ConfigResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigResponse;

  static equals(a: ConfigResponse | PlainMessage<ConfigResponse> | undefined, b: ConfigResponse | PlainMessage<ConfigResponse> | undefined): boolean;
}

/**
 * @generated from message config_service.Announcement
 */
export declare class Announcement extends Message<Announcement> {
  /**
   * @generated from field: string title = 1;
   */
  title: string;

  /**
   * @generated from field: string link = 2;
   */
  link: string;

  /**
   * @generated from field: string body = 3;
   */
  body: string;

  constructor(data?: PartialMessage<Announcement>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "config_service.Announcement";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Announcement;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Announcement;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Announcement;

  static equals(a: Announcement | PlainMessage<Announcement> | undefined, b: Announcement | PlainMessage<Announcement> | undefined): boolean;
}

/**
 * @generated from message config_service.SetAnnouncementsRequest
 */
export declare class SetAnnouncementsRequest extends Message<SetAnnouncementsRequest> {
  /**
   * @generated from field: repeated config_service.Announcement announcements = 1;
   */
  announcements: Announcement[];

  constructor(data?: PartialMessage<SetAnnouncementsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "config_service.SetAnnouncementsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetAnnouncementsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetAnnouncementsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetAnnouncementsRequest;

  static equals(a: SetAnnouncementsRequest | PlainMessage<SetAnnouncementsRequest> | undefined, b: SetAnnouncementsRequest | PlainMessage<SetAnnouncementsRequest> | undefined): boolean;
}

/**
 * @generated from message config_service.GetAnnouncementsRequest
 */
export declare class GetAnnouncementsRequest extends Message<GetAnnouncementsRequest> {
  constructor(data?: PartialMessage<GetAnnouncementsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "config_service.GetAnnouncementsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAnnouncementsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAnnouncementsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAnnouncementsRequest;

  static equals(a: GetAnnouncementsRequest | PlainMessage<GetAnnouncementsRequest> | undefined, b: GetAnnouncementsRequest | PlainMessage<GetAnnouncementsRequest> | undefined): boolean;
}

/**
 * @generated from message config_service.AnnouncementsResponse
 */
export declare class AnnouncementsResponse extends Message<AnnouncementsResponse> {
  /**
   * @generated from field: repeated config_service.Announcement announcements = 1;
   */
  announcements: Announcement[];

  constructor(data?: PartialMessage<AnnouncementsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "config_service.AnnouncementsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsResponse;

  static equals(a: AnnouncementsResponse | PlainMessage<AnnouncementsResponse> | undefined, b: AnnouncementsResponse | PlainMessage<AnnouncementsResponse> | undefined): boolean;
}

/**
 * @generated from message config_service.SetSingleAnnouncementRequest
 */
export declare class SetSingleAnnouncementRequest extends Message<SetSingleAnnouncementRequest> {
  /**
   * @generated from field: config_service.Announcement announcement = 1;
   */
  announcement?: Announcement;

  /**
   * @generated from field: string link_search_string = 2;
   */
  linkSearchString: string;

  constructor(data?: PartialMessage<SetSingleAnnouncementRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "config_service.SetSingleAnnouncementRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetSingleAnnouncementRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetSingleAnnouncementRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetSingleAnnouncementRequest;

  static equals(a: SetSingleAnnouncementRequest | PlainMessage<SetSingleAnnouncementRequest> | undefined, b: SetSingleAnnouncementRequest | PlainMessage<SetSingleAnnouncementRequest> | undefined): boolean;
}

