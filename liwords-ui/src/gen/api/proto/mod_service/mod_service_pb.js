// @generated by protoc-gen-es v1.8.0
// @generated from file mod_service/mod_service.proto (package mod_service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum mod_service.ModActionType
 */
export const ModActionType = /*@__PURE__*/ proto3.makeEnum(
  "mod_service.ModActionType",
  [
    {no: 0, name: "MUTE"},
    {no: 1, name: "SUSPEND_ACCOUNT"},
    {no: 2, name: "SUSPEND_RATED_GAMES"},
    {no: 3, name: "SUSPEND_GAMES"},
    {no: 4, name: "RESET_RATINGS"},
    {no: 5, name: "RESET_STATS"},
    {no: 6, name: "RESET_STATS_AND_RATINGS"},
    {no: 7, name: "REMOVE_CHAT"},
    {no: 8, name: "DELETE_ACCOUNT"},
  ],
);

/**
 * @generated from enum mod_service.EmailType
 */
export const EmailType = /*@__PURE__*/ proto3.makeEnum(
  "mod_service.EmailType",
  [
    {no: 0, name: "DEFAULT"},
    {no: 1, name: "CHEATING"},
    {no: 2, name: "DELETION"},
  ],
);

/**
 * @generated from enum mod_service.NotoriousGameType
 */
export const NotoriousGameType = /*@__PURE__*/ proto3.makeEnum(
  "mod_service.NotoriousGameType",
  [
    {no: 0, name: "GOOD"},
    {no: 1, name: "NO_PLAY"},
    {no: 2, name: "SITTING"},
    {no: 3, name: "SANDBAG"},
    {no: 4, name: "NO_PLAY_DENIED_NUDGE"},
    {no: 5, name: "EXCESSIVE_PHONIES"},
  ],
);

/**
 * @generated from message mod_service.ModAction
 */
export const ModAction = /*@__PURE__*/ proto3.makeMessageType(
  "mod_service.ModAction",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(ModActionType) },
    { no: 3, name: "duration", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "start_time", kind: "message", T: Timestamp },
    { no: 5, name: "end_time", kind: "message", T: Timestamp },
    { no: 6, name: "removed_time", kind: "message", T: Timestamp },
    { no: 7, name: "channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "message_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "applier_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "remover_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "chat_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "note", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "email_type", kind: "enum", T: proto3.getEnumType(EmailType) },
  ],
);

/**
 * @generated from message mod_service.ModActionsMap
 */
export const ModActionsMap = /*@__PURE__*/ proto3.makeMessageType(
  "mod_service.ModActionsMap",
  () => [
    { no: 1, name: "actions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: ModAction} },
  ],
);

/**
 * @generated from message mod_service.ModActionsList
 */
export const ModActionsList = /*@__PURE__*/ proto3.makeMessageType(
  "mod_service.ModActionsList",
  () => [
    { no: 1, name: "actions", kind: "message", T: ModAction, repeated: true },
  ],
);

/**
 * @generated from message mod_service.GetActionsRequest
 */
export const GetActionsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "mod_service.GetActionsRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message mod_service.ModActionResponse
 */
export const ModActionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "mod_service.ModActionResponse",
  [],
);

/**
 * @generated from message mod_service.NotoriousGame
 */
export const NotoriousGame = /*@__PURE__*/ proto3.makeMessageType(
  "mod_service.NotoriousGame",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(NotoriousGameType) },
    { no: 3, name: "created_at", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message mod_service.ResetNotorietyRequest
 */
export const ResetNotorietyRequest = /*@__PURE__*/ proto3.makeMessageType(
  "mod_service.ResetNotorietyRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message mod_service.ResetNotorietyResponse
 */
export const ResetNotorietyResponse = /*@__PURE__*/ proto3.makeMessageType(
  "mod_service.ResetNotorietyResponse",
  [],
);

/**
 * @generated from message mod_service.GetNotorietyReportRequest
 */
export const GetNotorietyReportRequest = /*@__PURE__*/ proto3.makeMessageType(
  "mod_service.GetNotorietyReportRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message mod_service.NotorietyReport
 */
export const NotorietyReport = /*@__PURE__*/ proto3.makeMessageType(
  "mod_service.NotorietyReport",
  () => [
    { no: 1, name: "score", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "games", kind: "message", T: NotoriousGame, repeated: true },
  ],
);

